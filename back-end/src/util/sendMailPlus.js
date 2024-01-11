import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import { oathClient } from './oathClient';

const sendEmail = async ({ to, from, subject, text, html }) => {

  // Set credentials
  oathClient.setCredentials({
    refresh_token: process.env.GMAIL_REFRESH_TOKEN,
  });

  // Get an access token
  const accessToken = await oathClient.getAccessToken();

  // Create Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'mosesmativo24@gmail.com',
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken,
    },
  });

  // Compose the email
  const mailOptions = {
    from,
    to,
    subject,
    text,
    html,
  };

  // Send the email
  return transporter.sendMail(mailOptions);
};

export default sendEmail;
