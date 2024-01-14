import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQueryParams } from '../util/useQueryParams';

function EmailVerification() {
    const navigate = useNavigate();
    const { email } = useQueryParams();

    useEffect(() => {
        setTimeout(() => {
            navigate(`/verify-email?email=${encodeURIComponent(email)}`);
        }, 4000);
    }, [navigate, email]);

    return (
        <div className="content-container">
            <h1>Thanks for signing up!</h1>
            <p>A verification <strong>CODE!</strong> has been sent to the email address you provided to accsess full features!</p>
        </div>
    )
};

export default EmailVerification;