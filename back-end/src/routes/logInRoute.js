import jwt from 'jsonwebtoken';
import { getDbConnection } from '../db';
import { AuthenticationDetails, CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';
import { aswUserPool } from '../util/awsUserPool';

export const logInRoute = {
    path: '/api/login',
    method: 'post',
    handler: async (req, res) => {
        const { email, password } = req.body;

        new CognitoUser({ Username: email, Pool: aswUserPool}).authenticateUser( new AuthenticationDetails({ Username: email, Password: password}), {
            onSuccess: async result => {
                const db = getDbConnection('react-auth-db');
                const user = await db.collection('users').findOne({ email });

                // get user details if exists (_id is used instead of id)
                const { _id: id, isVerified, info } = user;

                // If the credentials are correct send a jwt token to the user
                jwt.sign({ id, isVerified, email, info }, process.env.JWT_SECRET, { expiresIn: '2d' }, (err, token) => {
                        if (err) {
                            res.sendStatus(500);
                        }

                        res.status(200).json({ token });
                });
            },
            onFailure: error => {
                res.sendStatus(401);
            }
        });
    },
}