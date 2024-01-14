import { useNavigate } from 'react-router-dom';

export const EmailVerificationSuccess = () => {
    const navigate = useNavigate();
    return (
        <div className="content-container success">
            <div className="holder">
                <h1>Hurrayy!! SUCCESS!</h1>
                <p>Thanks for verifying your email address</p>
                <button onClick={() => navigate('/')}>Go to home Page</button>
            </div>
        </div>
    )

};