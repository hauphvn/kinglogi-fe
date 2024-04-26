'use client'
import React from 'react';
import InputLabelFloat from "@/components/InputLabelFloat";
import {Controller, useForm} from "react-hook-form";
import {signUpFormDefault, signUpFormValidate} from "@/types/yupSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "@/components/Button";
import SectionTopPage from "@/components/SectionTopPage";
import Link from "next/link";
import {NAV_PATH} from "@/configs/constants";
import {preNavigate} from "@/utils";
import {useLocale, useTranslations} from "next-intl";

const SignUpPage = () => {
    const localeActive = useLocale();
    const t = useTranslations('Register');
    const {
        formState: {errors, isDirty, isValid,},
        control: controlSignUp,
    } = useForm({
        resolver: yupResolver(signUpFormValidate()),
        mode: 'all',
        defaultValues: signUpFormDefault,
    });
    return (
        <div className={'flex justify-center items-center py-[50px] flex-col w-full min-w-[500px]'}>
            <SectionTopPage title={t('title')}/>
            <div className={'font-light text-[15px] pb-3 tracking-[0.8px]'}>{t('message')}
            </div>
            <form className={'rounded w-full flex flex-col max-w-[500px] min-h-[400px] gap-8 px-10 py-20 shadow-lg'}>
                <Controller
                    control={controlSignUp}
                    name="fullName"
                    render={({field: {onChange, onBlur, value}}) => (
                        <InputLabelFloat
                            warning={errors.fullName?.message}
                            onBlur={onBlur}
                            id={'fullName'}
                            placeholder={t('fullName') + ' (*)'}
                            onChange={onChange}
                            value={value}/>
                    )}
                />
                <Controller
                    control={controlSignUp}
                    name="phoneNumber"
                    render={({field: {onChange, onBlur, value}}) => (
                        <InputLabelFloat
                            warning={errors.phoneNumber?.message}
                            onBlur={onBlur}
                            id={'phoneNumber'}
                            placeholder={t('phone') + ' (*)'}
                            onChange={onChange}
                            value={value || ''}/>
                    )}
                />
                <Controller
                    control={controlSignUp}
                    name="email"
                    render={({field: {onChange, onBlur, value}}) => (
                        <InputLabelFloat
                            warning={errors.email?.message}
                            onBlur={onBlur}
                            id={'email'}
                            placeholder={t('email') + ' (*)'}
                            onChange={onChange}
                            value={value}/>
                    )}
                />
                <Controller
                    control={controlSignUp}
                    name="password"
                    render={({field: {onChange, onBlur, value}}) => (
                        <InputLabelFloat
                            type={'password'}
                            warning={errors.password?.message}
                            onBlur={onBlur}
                            id={'password'}
                            placeholder={t('password') + ' (*)'}
                            onChange={onChange}
                            value={value}/>
                    )}
                />
                <Button id={'signUp'} name={t('register')} disabled={!isDirty || !isValid}/>
                <div className={'w-full text-center text-[14px]'}>
                    <span>{t('areYouMember')} <Link href={preNavigate(localeActive, NAV_PATH.SIGN_IN)} className={'text-primaryLight hover:text-primary hover:underline transition-all duration-100'}>{t('signIn')}</Link></span>
                </div>
            </form>
        </div>
    );
};

export default SignUpPage;
