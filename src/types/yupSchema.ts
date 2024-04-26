import {email, phoneNumberFormat, stringRequired} from '@/types/yupValidation';
import * as yup from 'yup';

export const signUpFormValidate = () => {
    return yup.object().shape({
        fullName: stringRequired,
        email,
        password: stringRequired,
        phoneNumber: phoneNumberFormat,
    });
};
export const signUpFormDefault = {
    fullName: '',
    email: '',
    password: '',
    phoneNumber: ''
}
export const signInFormValidate = () => {
    return yup.object().shape({
        emailOrPhoneNumber: stringRequired,
        password: stringRequired,
    });
};
export const signInFormDefault = {
    emailOrPhoneNumber: '',
    password: '',
}
export const forgetPwdFormValidate = () => {
    return yup.object().shape({
        email
    });
};
export const forgetPwdFormDefault = {
    email: '',
}
export const bookFixedRouteFormValidate = () => {
    return yup.object().shape({
        fromAddress: stringRequired,
        toAddress: stringRequired,
        dateTime: stringRequired,
        busGroup: stringRequired,
    });
};
export const bookFixedRouteFormDefault = {
    fromAddress: '',
    toAddress: '',
    dateTime: '',
    busGroup: '',
}
