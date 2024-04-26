'use client'
import React from 'react';
import SectionTopPage from "@/components/SectionTopPage";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {bookFixedRouteFormDefault, bookFixedRouteFormValidate} from "@/types/yupSchema";
import SelectFloatLabel from "@/components/SelectFloatLabel";
import DatepickerFloatLabel from "@/components/DatepickerFloatLabel";
import Button from "@/components/Button";

const BookFlexibleBusRoute = () => {
    const {
        formState: {errors, isDirty, isValid,},
        control: controlBookFixedRoute,
    } = useForm({
        resolver: yupResolver(bookFixedRouteFormValidate()),
        mode: 'all',
        defaultValues: bookFixedRouteFormDefault,
    });
    return (
        <div
            className={'rounded max-w-[600px] w-full bg-primaryLightOpacity p-8 flex flex-col justify-center items-center'}>
            <SectionTopPage title={'ĐẶT XE ĐI BẤT CỨ ĐÂU NGAY'}/>
            <div className={'font-light text-[15px] pb-3 tracking-[0.8px] max-w-[400px]'}>
                Quý khách đã sẵn sàng? Xin vui lòng cung cấp thông tin điểm đi, đến, giờ đón, loại xe mong muốn và chúng tôi sẽ có mặt theo yêu cẩu của quý khách.
                Xin cảm ơn!
            </div>
            <form className={'flex flex-col gap-y-4 w-full max-w-[500px] pt-4'}>
                <Controller
                    control={controlBookFixedRoute}
                    name="fromAddress"
                    render={({field: {onChange, onBlur, value}}) => (
                        <SelectFloatLabel
                            label={'Điểm đi (*)'}
                            warning={errors.fromAddress?.message}
                            onBlur={onBlur}
                            id={'fromAddress'}
                            onChange={onChange}
                            value={value}/>
                    )}
                />
                <Controller
                    control={controlBookFixedRoute}
                    name="toAddress"
                    render={({field: {onChange, onBlur, value}}) => (
                        <SelectFloatLabel
                            label={'Điểm đến (*)'}
                            warning={errors.toAddress?.message}
                            onBlur={onBlur}
                            id={'toAddress'}
                            onChange={onChange}
                            value={value}/>
                    )}
                />
                <Controller
                    control={controlBookFixedRoute}
                    name="dateTime"
                    render={({field: {onChange, onBlur, value}}) => (
                        <DatepickerFloatLabel
                            label={'Thời gian đón (*)'}
                            warning={errors.dateTime?.message}
                            onBlur={onBlur}
                            id={'dateTime'}
                            onChange={onChange}
                            value={value}/>
                    )}
                />
                <Controller
                    control={controlBookFixedRoute}
                    name="busGroup"
                    render={({field: {onChange, onBlur, value}}) => (
                        <SelectFloatLabel
                            label={'Nhóm xe (*)'}
                            warning={errors.busGroup?.message}
                            onBlur={onBlur}
                            id={'busGroup'}
                            onChange={onChange}
                            value={value}/>
                    )}
                />
                <Button id={'bookBusFixedRoute'} name={'Đặt xe'} disabled={!isDirty || !isValid}/>
            </form>
            <div className={'w-[80%]'}>

                <div className={'flex text-[12px] px-5 border-primaryDarkOpacityBorder bg-primaryDarkOpacityBackground text-primaryLight py-1 mt-4 rounded border '} style={{wordWrap: 'break-word'}}>
                    <span className={'text-accent'}>*</span>
                    <span>
                            Phụ thu ngoài giờ đối với các chuyến xe có thời gian đón, trả trong khung giờ từ sau 22h00 đến trước 06h00 sáng có thể được áp dụng. Vui lòng liên hệ với <span className={'font-bold'}>KING Logi</span> nếu cần thêm chi tiết.
                        </span>
                </div>
            </div>
        </div>
    );
};

export default BookFlexibleBusRoute;
