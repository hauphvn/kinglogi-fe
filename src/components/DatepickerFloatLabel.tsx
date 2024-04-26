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
            <label
                htmlFor={props.id}
                className={`absolute left-0 bottom-[32px] ml-1 bg-white px-1 text-[14px] duration-150 ease-linear
            ${isFocused ? 'translate-y-[-10px] text-[14px] text-primaryLight' : 'translate-y-[12px] text-gray-500'}`}
            >
                {props.label}
            </label>
        </Space>
    );
};

export default memo(DatepickerFloatLabel);
