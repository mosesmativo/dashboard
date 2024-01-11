import axios from 'axios';
import { oathClient } from './oathClient';

const getAccessAndBearerTokenUrl = ({ accessToken }) => `
    https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`;

export const getGoogleUser = async ({ code }) => {
    const { tokens } = await oathClient.getToken(code);
    const response = await axios.get(getAccessAndBearerTokenUrl(
        {
            accessToken: tokens.access_token,
        },
        {
            headers: { Authorization: `Bearer ${tokens.id_token}` }
        }
    ));

    return response.data;
};