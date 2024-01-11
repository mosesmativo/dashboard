import { getGoogleOathUrl } from "../util/getGoogleOathUrl";

export const getGoogleOathUrlRoute = {
    path: '/auth/google/url',
    method: 'get',
    handler: (req, res) => {
        const url = getGoogleOathUrl();
        res.status(200).json({ url });
    }
};