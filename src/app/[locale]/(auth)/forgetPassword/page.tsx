'use client'
import React from 'react';
import InputLabelFloat from "@/components/InputLabelFloat";
import {Controller, useForm} from "react-hook-form";
import {forgetPwdFormDefault, forgetPwdFormValidate} from "@/types/yupSchema";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "@/components/Button";
import SectionTopPage from "@/components/SectionTopPage";
import Link from "next/link";
import {NAV_PATH} from "@/configs/constants";
import {preNavigate} from "@/utils";
import {useLocale, useTranslations} from "next-intl";

const ForgetPassword = () => {
    const localeActive = useLocale();
    const t = useTranslations('ForgetPassword');
    const {
        formState: {errors, isDirty, isValid,},
        control: controlSignUp,
        getValues,
        reset: resetAddress,
        setValue,
    } = useForm({
        resolver: yupResolver(forgetPwdFormValidate()),
        mode: 'all',
        defaultValues: forgetPwdFormDefault,
    });
    return (
        <div className={'flex justify-center items-center py-[50px] flex-col w-full min-w-[500px]'}>
            <SectionTopPage title={t('title')}/>
            <div className={'font-light text-[15px] pb-3 tracking-[0.8px]'}>{t('message')}
            </div>
            <form className={'rounded w-full flex flex-col max-w-[500px] min-h-[400px] gap-8 px-10 py-20 shadow-lg'}>
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
                <Button id={'signIn'} name={t('send')} disabled={!isDirty || !isValid}/>
                <div className={'w-full text-center text-[14px] flex flex-col gap-y-2'}>
                    <span>{t('back')}<Link href={preNavigate(localeActive, NAV_PATH.SIGN_IN)} className={'text-primaryLight hover:text-primary hover:underline transition-all duration-100'}> {t('signIn')}</Link></span>
                    <span>{t('areYouMember')}<Link href={preNavigate(localeActive, NAV_PATH.SIGN_UP)} className={'text-primaryLight hover:text-primary hover:underline transition-all duration-100'}> {t('signUp')}</Link></span>
                </div>
            </form>
        </div>
    );
};

export default ForgetPassword;
