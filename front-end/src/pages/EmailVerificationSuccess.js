import { useHistory } from 'react-router-dom';

export const EmailVerificationSuccess = () => {
    const history = useHistory();
    return (
        <div className="content-container success">
            <div className="holder">
                <h1>Hurrayy!! SUCCESS!</h1>
                <p>Thanks for verifying your email address</p>
                <button onClick={() => history.push('/')}>Go to home Page</button>
            </div>
        </div>
    )

};