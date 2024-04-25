import React from 'react';
import {CarFront} from "lucide-react";

interface SectionTopPageProps {
    title: string,

}
const SectionTopPage = (props: SectionTopPageProps) => {
    return (
        <div className={'flex flex-col justify-center items-center'}>
            <div className="title font-bold text-[32px]">{props.title}</div>
            <div className="line flex gap-x-1 justify-center items-center py-3 ">
                <div className="line bg-gray-600 h-[2px] w-[50px]"></div>
                <div className="icon"><CarFront className={'text-highlight'} strokeWidth={3}/></div>
                <div className="line bg-gray-600 h-[2px] w-[50px]"></div>
            </div>
        </div>
    );
};

export default SectionTopPage;
