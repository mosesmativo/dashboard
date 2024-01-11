import { emailVerificationRoute } from './emailVerificationRoute';
import { forgotPasswordRoute } from './forgotPasswordRoute';
import { logInRoute } from './logInRoute';
import { resetPasswordRoute } from './resetPasswordRoute';
import { signUpRoute } from './signUpRoute';
// import { testEmailRoute } from './testEmailRoute';
import { getGoogleOathUrlRoute } from './getGoogleAouthUrlRoute';
import { testRoute } from './testRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
import { googleOathCallbackRoute } from './googleOathCallbackRoute';

export const routes = [
    logInRoute,
    signUpRoute,
    getGoogleOathUrlRoute,
    googleOathCallbackRoute,
    testRoute,
    updateUserInfoRoute,
    emailVerificationRoute,
    forgotPasswordRoute,
    resetPasswordRoute
];
