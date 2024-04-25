'use client'
import {memo, useTransition} from "react";
import {useLocale} from "next-intl";
import {useRouter, usePathname} from "next/navigation";

interface SwitchLanguageProps {
    flag: string;
    language: string;
    title: string,
}

const SwitchLanguage = (props: SwitchLanguageProps) => {
    const router = useRouter();
    const pathName = usePathname();
    const {flag, language, title} = props;
    const localeActive = useLocale();
    const [isPending, startTransition] = useTransition();
    function onChangeLanguage() {
        startTransition(() => {
            const newPath = pathName.replace(`/${localeActive}`, localeActive === 'en' ? '/vi' : '/en');
            router.push(newPath);
        });
    }

    return (
        <div className={'flex items-center w-[80px] justify-end'}>
            <button
                disabled={isPending}
                onClick={() => {onChangeLanguage()}}
                className={'flex m-1  disabled:opacity-50 disabled:cursor-not-allowed p-2 bg-violet-950'}
                title={title}>
                <span className={'text-white'}>{flag}</span>
                <span className={'text-white'}>{language}</span>
            </button>
        </div>
    );
};

export default memo(SwitchLanguage);
