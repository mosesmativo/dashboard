import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import { EmailVerificationSuccess } from './EmailVerificationSuccess';
import { EmailVerificationFailure } from './EmailVerificationFailure';

export const EmailVerificationLanding = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isSuccess, setIsSuccess] = useState(false);
    const { emailverification } = useParams();

    // console.log(emailverification);

    const [, setToken] = useToken();

    useEffect(() => {
        const loadverification = async () => {
            try {
                const response = await axios.put(`/api/verify-email`, { emailverification });
                const { token } = response.data;
                // console.log(token);
                setToken(token);
                setIsSuccess(true);
                setIsLoading(false);

            } catch (e) {
                setIsSuccess(false);
                setIsLoading(false);
            }
        };

        loadverification();

    }, [setToken, emailverification]);

    if (isLoading) return <h1>...Loading</h1>;
    if (isSuccess) {
        return <EmailVerificationSuccess />;
    } else {
        <EmailVerificationFailure />
    }
};