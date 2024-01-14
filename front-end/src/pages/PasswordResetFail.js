import { useNavigate } from 'react-router-dom';

export const PasswordResetFail = () => {
    const history = useNavigate();
    return (
        <div className="content-container fail">
            <div className="holder">
                <h1>uh!! Noo!</h1>
                <p>Something went wrong while trying to update your password</p>
                <button onClick={() => navigate('/login')}>Go to home Page</button>
            </div>
        </div>
    )

};