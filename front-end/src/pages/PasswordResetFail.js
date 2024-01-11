import { useHistory } from 'react-router-dom';

export const PasswordResetFail = () => {
    const history = useHistory();
    return (
        <div className="content-container fail">
            <div className="holder">
                <h1>uh!! Noo!</h1>
                <p>Something went wrong while trying to update your password</p>
                <button onClick={() => history.push('/login')}>Go to home Page</button>
            </div>
        </div>
    )

};