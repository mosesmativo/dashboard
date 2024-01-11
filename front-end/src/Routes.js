import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { PrivateRoute } from './auth/PrivateRoute';
import EmailVerification from './pages/EmailVerification';
// import { EmailVerificationLanding } from './pages/EmailVerificationLanding';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { PasswordResetLandingPage } from './pages/PasswordResetLandingPage';
import { EmailVerificationCodePage } from './pages/EmailVerificationCodePage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                <Route path="/login">
                    <LogInPage />
                </Route>
                <Route path="/please-verify">
                    <EmailVerification />
                </Route>
                {/* <Route path="/verify-email/:emailverification">
                    <EmailVerificationLanding />
                </Route> */}
                <Route path="/verify-email">
                    <EmailVerificationCodePage />
                </Route>
                <Route path="/forgot-password">
                    <ForgotPasswordPage />
                </Route>
                <Route path="/reset-password">
                    <PasswordResetLandingPage />
                </Route>
                <Route path="/signup">
                    <SignUpPage />
                </Route>
            </Switch>
        </Router>
    );
}