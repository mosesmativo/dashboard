import { getDbConnection } from '../db';

export const testRoute = {
    path: '/api/test',
    method: 'get',
    handler: async (req, res) => {
        const db = getDbConnection('react-auth-db');
        const user = await db.collection('users').find().toArray();
        res.status(200).json(user);
    },
};