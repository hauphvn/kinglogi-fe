'use client';

// Not found page
import {useTranslations} from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React from "react";

export default function NotFound() {
    const t = useTranslations('NotFound');
    return (
        <html>
        <body>
        <Header/>
        <div className={'flex-grow mx-auto max-w-4xl mt-[170px]'}>
            <h1>{t('title')}</h1>
        </div>
        <Footer/>
        </body>
        </html>
    );
}
