import React from 'react';

interface ButtonProps {
    id: string,
    placeholder?: string,
    defaultValue?: string,
    value: string | number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    type?: 'text'|'email'|'password'|'number',
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
    warning?: string
}
const Button = (props: ButtonProps) => {
    return (
        <div className="relative">
            <input
                id={props.id}
                onChange={props.onChange}
                value={props.value}
                defaultValue={props.defaultValue}
                type={props.type || 'text'}
                className="text-[16px] focus-visible:outline-primaryLight rounded p-2 peer w-full h-[44px] border border-gray-400
                placeholder:text-transparent"
                placeholder={props.placeholder}
                onBlur={props.onBlur}
            />
            <span className={' absolute bottom-[-20px] left-0 w-full  text-red-700 font-light text-[14px]'}>{props.warning}</span>
            <label
                htmlFor={props.id}
                   className="absolute left-0 ml-1 -translate-y-[10px] bg-white px-1 text-[12px] duration-150 ease-linear
                   peer-placeholder-shown:translate-y-[12px] peer-placeholder-shown:text-[14px]
                   peer-placeholder-shown:text-gray-500 peer-focus:ml-2 peer-focus:-translate-y-[12px]
                   peer-focus:px-1 peer-focus:text-[12px] peer-focus:text-primaryLight">{props.placeholder}</label>
        </div>
    );
};

export default Button;
