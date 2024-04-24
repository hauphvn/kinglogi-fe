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
