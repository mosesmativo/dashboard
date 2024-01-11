import { useHistory } from 'react-router-dom';

export const EmailVerificationFailure = () => {
    const history = useHistory();
    return (
        <div className="content-container">
            <div className="fail">
                <h1>UH!! Oh....</h1>
                <p>Something went wrong when verifying your email account</p>
                <button onClick={() => history.push('/signup')}>Back to Sign-up</button>
            </div>
        </div>
    )

};