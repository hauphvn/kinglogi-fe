'use client'
import React, {useEffect, useState} from 'react';
import {Select as SelectAntd, Space} from 'antd';

interface SelectFloatLabelProps {
    value?: string,
    onChange?: (value: string) => void,
    defaultValue?: string,
    id?: string,
    label?: string,
    height?: number,
    warning?: string,
    onBlur?: () => void,
}

const SelectFloatLabel = (props: SelectFloatLabelProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [valueSelected, setValueSelected] = useState<string | undefined>(props.value)
    useEffect(() => {
        setIsFocused(!!valueSelected);
    }, [valueSelected]);
    return (
        <Space className={'relative'} direction="vertical" style={{width: '100%'}}>
            <SelectAntd
                value={props.value}
                id={props.id}
                style={{
                    width: '100%',
                    height: props.height || 44
                }}
                onBlur={() => {
                    props.onBlur?.();
                    setIsFocused(!!valueSelected);
                }}
                onFocus={() => setIsFocused(true)}
                className={'w-auto custom-select'}
                defaultValue={props.defaultValue}
                onChange={(e) => {
                    setValueSelected(e);
                    props.onChange?.(e);
                }}
                options={[
                    {value: 'jack', label: 'Jack'},
                    {value: 'lucy', label: 'Lucy'},
                    {value: 'Yiminghe', label: 'yiminghe'},
                    {value: 'disabled', label: 'Disabled', disabled: true},
                ]}/>
                <span
                    className={' absolute bottom-[-5px] left-0 w-full  text-red-700 font-light text-[14px]'}>{props.warning}
                </span>
            <label
                htmlFor={props.id}
                className={`rounded absolute left-1 bottom-[40px] ml-1 bg-white px-1 text-[14px] duration-150 ease-linear
    ${isFocused ? 'translate-y-[-10px] text-[14px] text-primaryLight' : 'translate-y-[12px] text-gray-500'}`}
            >
                {props.label}
            </label>
        </Space>
    );
};

export default SelectFloatLabel;
