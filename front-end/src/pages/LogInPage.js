import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useToken } from '../auth/useToken';
import { useQueryParams } from '../util/useQueryParams';

export const LogInPage = () => {
    const [, setToken] = useToken();

    const [errorMessage, setErrorMessage] = useState(false);
    const [loading, setLoading] = useState(false);

    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [getGoogleOathUrl, setGoogleOathUrl] = useState('');
    const { token: oathToken } = useQueryParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (oathToken) {
            setToken(oathToken);
            navigate('/');
        }
    }, [oathToken, setToken, navigate]);

    useEffect(() => {
        const loadOathUrl = async () => {
            try {
                const response = await axios.get('/auth/google/url');
                const { url } = response.data;
                setGoogleOathUrl(url);
            } catch (e) {
                console.log(e);
            }
        }

        loadOathUrl();
    }, [setGoogleOathUrl]);

    useEffect(() => {
        if (setErrorMessage) {
            setTimeout(() => {
                setErrorMessage(false);
            }, 3000);
        }
    }, [errorMessage]);



    const onLogInClicked = async () => {
        try {
            setLoading(true);

            const response = await axios.post('/api/login', {
                email: emailValue,
                password: passwordValue,
            });
            const { token } = response.data;
            setToken(token);
            setErrorMessage(false);
            navigate('/');

        } catch (e) {
            setErrorMessage(true);
        } finally { 
            setLoading(false)
        }
    };

    return (
        <>
            <div className="content-container">
                <h1 className="text-3xl font-bold underline">Log In</h1>
                {errorMessage && <div className="fail">Username or Password incorrect</div>}
                <input
                    value={emailValue}
                    onChange={e => setEmailValue(e.target.value)}
                    placeholder="someone@gmail.com" />
                <input
                    type="password"
                    value={passwordValue}
                    onChange={e => setPasswordValue(e.target.value)}
                    placeholder="password" />
                <hr />               
                <button
                    disabled={!emailValue || !passwordValue}
                    onClick={onLogInClicked}>  {loading ? <span class="loader"></span> : 'Login'}</button>
                <button onClick={() => navigate('/forgot-password')}>Forgot your password?</button>
                <button onClick={() => navigate('/signup')}>Don't have an account? Sign Up</button>
                <button
                    disabled={!getGoogleOathUrl}
                    onClick={() => window.location.href = getGoogleOathUrl}
                >Login With Google</button>
            </div>
        </>
    );
};