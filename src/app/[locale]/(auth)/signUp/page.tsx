'use client'
import React, {useState} from 'react';
import {CarFront} from "lucide-react";
import InputLabelFloat from "@/components/InputLabelFloat";
import {Controller, useForm} from "react-hook-form";
import {signUpFormDefault, signUpFormValidate} from "@/types/yupSchema";
import {yupResolver} from "@hookform/resolvers/yup";
const SignUpPage = () => {
    const {
        formState: {errors, isDirty, isValid,},
        control: controlSignUp,
        getValues,
        reset: resetAddress,
        setValue,
    } = useForm({
        resolver: yupResolver(signUpFormValidate()),
        mode: 'all',
        defaultValues: signUpFormDefault,
    });
    return (
        <div className={'flex justify-center items-center py-[50px] flex-col w-full'}>
            <div className="title font-bold text-[32px]">ĐĂNG KÝ</div>
            <div className="line flex gap-x-1 justify-center items-center py-3 ">
                <div className="line bg-gray-600 h-[2px] w-[50px]"></div>
                <div className="icon"><CarFront className={'text-highlight'} strokeWidth={3} /></div>
                <div className="line bg-gray-600 h-[2px] w-[50px]"></div>
            </div>
            <div className={'font-light text-[15px] pb-3 tracking-[0.8px]'}>Điền đầy đủ thông tin bên dưới để đăng ký tài khoản mới.</div>
            <form className={'rounded w-full flex flex-col max-w-[500px] min-h-[400px] gap-8 px-10 py-20 shadow-lg'}>
                <Controller
                    control={controlSignUp}
                    name="fullName"
                    render={({field: {onChange, onBlur, value}}) => (
                        <InputLabelFloat
                            warning={errors.fullName?.message}
                            onBlur={onBlur}
                            id={'fullName'}
                            placeholder={'Họ tên (*)'}
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
                            placeholder={'Số điện thoại (*)'}
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
                            placeholder={'Email (*)'}
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
                            placeholder={'Mật khẩu (*)'}
                            onChange={onChange}
                            value={value}/>
                    )}
                />

            </form>
        </div>
    );
};

export default SignUpPage;
