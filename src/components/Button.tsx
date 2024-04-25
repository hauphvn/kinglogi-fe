import React from 'react';
interface ButtonProps {
    id: string,
    type?: 'text'|'email'|'password'|'number',
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void,
    warning?: string,
    disabled?: boolean,
    name?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
}
const Button = (props: ButtonProps) => {
    return (
            <button
                id={props.id}
                onClick={() => props.onClick}
                disabled={props.disabled}
                className="bg-primary text-white rounded p-2 w-full h-[44px] border border-gray-400 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 ease-linear hover:bg-primaryLight hover:text-white"
            >
                {props.name}
            </button>
    );
};

export default Button;
