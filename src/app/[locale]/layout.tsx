import type {Metadata} from "next";
import {NextIntlClientProvider, useMessages} from 'next-intl';
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AntdRegistry } from '@ant-design/nextjs-registry';
export const metadata: Metadata = {
    title: "KING LOGI",
    description: "HỆ THỐNG ĐẶT XE VẬN TẢI HÀNG ĐẦU VIỆT NAM",
};

export default function LocaleLayout({
                                         children,
                                         params: {locale}
                                     }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    const messages = useMessages();
    return (
        <html lang={locale}>
        <body>
        <div className={'flex flex-col mx-auto min-h-screen'}>
            <NextIntlClientProvider locale={locale} messages={messages}>
                <AntdRegistry>
                    <Header/>
                    <main className={'flex-grow mx-auto max-w-4xl mt-[170px]'}>
                        {children}
                    </main>
                    <Footer/>
                </AntdRegistry>

            </NextIntlClientProvider>

        </div>
        </body>
        </html>
    );
}
