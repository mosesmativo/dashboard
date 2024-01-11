import { ObjectID } from 'mongodb';
import { CognitoUser } from 'amazon-cognito-identity-js';
import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';
import { aswUserPool } from '../util/awsUserPool';

export const emailVerificationRoute = {
    path: '/api/verify-email',
    method: 'put',
    handler: async (req, res) => {
        const { email, verificationString } = req.body;

        new CognitoUser({Username: email, Pool: aswUserPool})
        .confirmRegistration(verificationString, true, async (err) => {
            if (err) return res.status(401).json({ message: 'The Email verification code is incorect. Please try again'});

            const db = await getDbConnection('react-auth-db');

            const result = await db.collection('users')
                .findOneAndUpdate({ email: email}, {
                    $set: { isVerified: true}
                }, {
                    returnOriginal: false,
                }
            );

            const {_id: id, info} = result.value;

            jwt.sign({ id, email, info, isVerified: true }, process.env.JWT_SECRET, { expiresIn: '2d' }, (err, token) => {
                if (err) return sendStatus(500);
                res.status(200).json({ token });
            });

        });
    }
};