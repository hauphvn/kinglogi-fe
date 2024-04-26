'use client'
import React, {memo, useEffect, useState} from 'react';
import {ConfigProvider, DatePicker as DatepickerAntd, Space} from 'antd';
import locale from 'antd/locale/vi_VN';
import dayjs from 'dayjs';
import 'dayjs/locale/vi';

interface DatepickerFloatLabelProps {
    value?: any,
    onChange?: (value: string) => void,
    defaultValue?: string,
    id?: string,
    label?: string,
    height?: number,
    warning?: string,
    onBlur?: () => void,
}

dayjs.locale('zh-cn');
const DatepickerFloatLabel = (props: DatepickerFloatLabelProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [valueSelected, setValueSelected] = useState<any>(props?.value)
    useEffect(() => {
        setIsFocused(valueSelected instanceof dayjs);
    }, [valueSelected]);
    const handleOnBlur = () => {
        setIsFocused(valueSelected instanceof dayjs);
        props.onBlur?.();
    }
    return (
        <Space onBlur={handleOnBlur} className={'relative'} direction="vertical" style={{width: '100%'}}>
            <ConfigProvider locale={locale}>
                <DatepickerAntd
                    value={props.value}
                    placeholder={''}
                    onFocus={() => setIsFocused(true)}
                    title={props.label}
                    className={'text-[16px] focus-visible:outline-primaryLight rounded p-2 w-full h-[44px] border border-gray-400'}
                    height={props.height || 44}
                    showNow={false}
                    id={props.id}
                    showTime
                    showSecond={false}
                    onChange={(e) => {
                        setValueSelected(e);
                        props.onChange?.(e);
                    }}
                />
            </ConfigProvider>
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

export default memo(DatepickerFloatLabel);
