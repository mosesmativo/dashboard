import { useHistory } from 'react-router-dom';

export const PasswordResetSuccess = () => {
    const history = useHistory();
    return (
        <div className="content-container success">
            <div className="holder">
                <h1>Hurrayy!! SUCCESS!</h1>
                <p>Your password has been reset. Use the new password to login.</p>
                <button onClick={() => history.push('/login')}>Go to Login Page</button>
            </div>
        </div>
    )

};