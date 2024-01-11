import { useState } from 'react';
import axios from 'axios';
import {EmailVerificationSuccess} from './EmailVerificationSuccess';
import { EmailVerificationFailure } from './EmailVerificationFailure';
import { useToken } from '../auth/useToken';
import { useQueryParams } from '../util/useQueryParams';

export const EmailVerificationCodePage = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailure, setIsFailure] = useState(false);
    const [verificationString, setVerificationString] = useState('');

    const { email } = useQueryParams();
    const [, setToken] = useToken();

    const onSubmitVerificationString = async () => {
        try {
            const response = await axios.put('/api/verify-email', {
                email,
                verificationString
            });

            const { token } = response.data;
            setToken(token)
            setIsSuccess(true)
            
        } catch (error) {
            console.log(error);
            setIsFailure(true);
        }
    }

    if (isSuccess) return <EmailVerificationSuccess />;
    if (isFailure) return <EmailVerificationFailure />;


    return(
        < div className='content-container'>
            <h1>Please Verify Your Email</h1>
            <p>You should hav erecived a verification code at the email address provided please enter here</p>
            <input
                placeholder='eg 123456'
                value={verificationString}
                onChange={(e) => setVerificationString(e.target.value)}
            />
            <button
             onClick={onSubmitVerificationString}
            >Verify</button>
        </div>
    )
}


