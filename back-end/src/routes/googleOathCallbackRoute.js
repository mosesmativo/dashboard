import jwt from 'jsonwebtoken';
import { getGoogleUser } from '../util/getGoogleUser';
import { updateOrCreateUserFromOath } from '../util/updateOrCreateUserFromOath';

export const googleOathCallbackRoute = {
    path: '/auth/google/callback',
    method: 'get',
    handler: async (req, res) => {
        const { code } = req.query;

        const oathUserInfo = await getGoogleUser({ code });
        const updatedUser = await updateOrCreateUserFromOath({ oathUserInfo });

        // console.log(updatedUser);
        const { _id: id, isVerified, email, info, picture} = updatedUser;

        jwt.sign({ id, email, info, isVerified, picture }, process.env.JWT_SECRET, (err, token) => {
            if (err) return res.sendStatus(500)
            return res.redirect(`http://localhost:3000/login?token=${token}`);
        });
    }
};