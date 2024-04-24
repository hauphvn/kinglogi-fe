'use client'
import React from 'react';
import {useLocale, useTranslations} from "next-intl";
import SwitchLanguage from "@/components/SwitchLanguage";
import MotionHeaderNav from "@/components/MotionHeaderNav";
import Link from "next/link";
import {NAV_PATH} from "@/configs/constants";
import {useRouter} from "next/navigation";
import {preNavigate} from "@/utils";

const Header = () => {
    const t = useTranslations('Header');
    const lang = useTranslations('SwitchLanguage');
    const localeActive = useLocale();
    return (
        <header className={'z-50 flex justify-between items-center fixed w-full'}>
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
                    <Link href={preNavigate(localeActive,NAV_PATH.SIGN_IN)} className={'flex items-center w-[90px] hover:bg-violet-950 h-[40px] p-2 justify-center'}>
                        <span className={'text-white text-[14px]'}>{t('login')}</span>
                    </Link>
                    <Link href={preNavigate(localeActive,NAV_PATH.SIGN_UP)} className={'flex items-center w-[90px] hover:bg-violet-950 h-[40px] p-2 justify-center hover:cursor-pointer'}>
                        <span className={'text-white text-[14px]'}>{t('register')}</span>
                    </Link>
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
