import { CognitoUser } from 'amazon-cognito-identity-js';
import { aswUserPool } from '../util/awsUserPool';

export const forgotPasswordRoute = {
    path: '/api/forgot-password/:email',
    method: 'put',
    handler: async (req, res) => {
        const { email } = req.params;

        new CognitoUser({ Username: email, Pool: aswUserPool}).forgotPassword({
            onSuccess: () => {
                res.sendStatus(200);
            },
            onFailure: () => {
                res.sendStatus(500);
            }
        });
    }
};