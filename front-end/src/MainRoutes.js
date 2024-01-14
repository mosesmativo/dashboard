import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LogInPage } from './pages/LogInPage';
import { SignUpPage } from './pages/SignUpPage';
import { PrivateRoute } from './auth/PrivateRoute';
import EmailVerification from './pages/EmailVerification';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { PasswordResetLandingPage } from './pages/PasswordResetLandingPage';
import { EmailVerificationCodePage } from './pages/EmailVerificationCodePage';

export const MainRoutes = () => {
    return (
        <Router>
           
            <Routes>
                <Route path="/" element={<PrivateRoute />} />
                <Route path="/login" element={<LogInPage />} />
                <Route path="/please-verify" element={<EmailVerification />} />
                {/* <Route path="/verify-email/:emailverification" element={<EmailVerificationLanding />} /> */}
                <Route path="/verify-email" element={<EmailVerificationCodePage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<PasswordResetLandingPage />} />
                <Route path="/signup" element={<SignUpPage />} />
            </Routes>
        </Router>
    );
};
