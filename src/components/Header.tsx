import React from 'react';
import {useTranslations} from "next-intl";
import SwitchLanguage from "@/components/SwitchLanguage";
import MotionHeaderNav from "@/components/MotionHeaderNav";

const Header = () => {
    const t = useTranslations('Header');
    const lang = useTranslations('SwitchLanguage');
    return (
        <header className={'flex justify-between items-center fixed w-full'}>
            <div className={'header-root-top h-[50px] flex justify-between bg-[#20003A] py-2 w-full px-[100px]'}>
                <div className={'flex gap-x-12 items-center'}>
                    <div className={'flex gap-x-1'}>
                        <span className={'text-white'}>{t('hotline')}:</span>
                        <span className={'text-white'}>1900 1234</span>
                    </div>
                    <div className={'flex gap-x-1'}>
                        <span className={'text-white'}>{t('email')}:</span>
                        <span className={'text-white'}>admin@kinglogi.com</span>
                    </div>
                </div>
                <div className={'header-top-right flex transition-all duration-100 items-center'}>
                    <SwitchLanguage
                        title={lang('title')}
                        language={lang('language')}
                        flag={lang('flag')}/>
                    <div className={'flex items-center w-[100px] hover:bg-violet-950 h-[40px] p-2 justify-center hover:cursor-pointer'}>
                        <span className={'text-white'}>{t('login')}</span>
                        {/*<span className={' border-r-[1px] border-gray-500 h-[20px]'}></span>*/}
                    </div>
                    <div className={'flex items-center w-[100px] hover:bg-violet-950 h-[40px] p-2 justify-center hover:cursor-pointer'}>
                        <span className={'text-white'}>{t('register')}</span>
                    </div>
                </div>
            </div>
            <MotionHeaderNav/>
            {/*<nav>*/}
            {/*    <ul className={'flex space-x-4'}>*/}
            {/*        <li>*/}
            {/*            <a href={'/en'}>English</a>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <a href={'/vi'}>Vietnamese</a>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</nav>*/}
        </header>
    );
};

export default Header;
