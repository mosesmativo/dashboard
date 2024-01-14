import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';

export const SignUpPage = () => {
    const [, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState(false);

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState('');

    const navigate = useNavigate();

    const onSignUpClicked = async () => {
        try {
            const response = await axios.post('/api/signup', {
                email: emailValue,
                password: passwordValue,
            });
            const { token } = response.data;
            setToken(token);
            navigate(`/please-verify?email=${encodeURIComponent(emailValue)}`);

        } catch (e) {
            console.log(e);
            setErrorMessage(true);
        }

    }

    return (
        <div className="content-container">
            <h1 className='text-3xl font-bold underline'>Sign Up</h1>
            {errorMessage && <div className="fail"><p>Email address aready in use</p></div>}
            <input
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
                placeholder="someone@gmail.com" />
            <input
                type="password"
                value={passwordValue}
                onChange={e => setPasswordValue(e.target.value)}
                placeholder="password" />
            <input
                type="password"
                value={confirmPasswordValue}
                onChange={e => setConfirmPasswordValue(e.target.value)}
                placeholder="password" />
            <hr />
            <button
                disabled={
                    !emailValue || !passwordValue ||
                    passwordValue !== confirmPasswordValue
                }
                onClick={onSignUpClicked}>Sign Up</button>
            <button onClick={() => navigate('/login')}>Already have an account? Log In</button>
        </div>
    );
}