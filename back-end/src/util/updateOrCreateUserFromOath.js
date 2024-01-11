import { getDbConnection } from "../db";

export const updateOrCreateUserFromOath = async ({ oathUserInfo }) => {
    const {
        id: googleId,
        verified_email: isVerified,
        email,
        name,
        picture,
    } = oathUserInfo;

    const db = getDbConnection('react-auth-db');
    const existingUser = await db.collection('users').findOne({ email });

    const startingInfo = {
        name: name,
        hairColor: '',
        favoriteFood: '',
        bio: '',
        picture: picture,
    };

    if (existingUser) {
        const result = await db.collection('users').findOneAndUpdate(
            { email },
            { $set: { googleId, isVerified, picture } },
            { returnOriginal: false },
        );

        return result.value;
    } else {
        const result = await db.collection('users').insertOne({
            email,
            googleId,
            isVerified,
            info: startingInfo,
            picture: picture,
        });
        return result.ops[0];
    }
};