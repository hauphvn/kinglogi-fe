'use client';

// Not found page
import {useTranslations} from "next-intl";

export default function NotFound() {
    const t = useTranslations('NotFound');
    return (
        <html>
        <body>
        <h1>{t('title')}</h1>
        </body>
        </html>
    );
}
