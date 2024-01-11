import sendEmail from '../util/sendEmail';

export const testEmailRoute = {
    path: '/api/test-email',
    method: 'post',
    handler: async (req, res) => {
        try {
            await sendEmail(
                to: 'mosesmativo24@gmail.com',
                from: 'clishtivo@gmail.com',
                subject: 'Email test',
                text: 'This Email Route Works just fine',
            });
            res.sendStatus(200);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }
};