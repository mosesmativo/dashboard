import { google } from 'googleapis';

//set up google api packages with creds 
export const oathClient = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'http://localhost:8080/auth/google/callback',
);