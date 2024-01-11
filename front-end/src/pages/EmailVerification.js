import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQueryParams } from '../util/useQueryParams';

function EmailVerification() {
    const history = useHistory();
    const { email } = useQueryParams();

    useEffect(() => {
        setTimeout(() => {
            history.push(`/verify-email?email=${encodeURIComponent(email)}`);
        }, 4000);
    }, [history, email]);

    return (
        <div className="content-container">
            <h1>Thanks for signing up!</h1>
            <p>A verification <strong>CODE!</strong> has been sent to the email address you provided to accsess full features!</p>
        </div>
    )
};

export default EmailVerification;