'use client'
import {useRouter} from "next/navigation";
import {useTransition} from "react";
import {useLocale} from "next-intl";

interface SwitchLanguageProps {
    flag: string;
    language: string;
    title: string
}

const SwitchLanguage = (props: SwitchLanguageProps) => {
    const {flag, language, title} = props;
    const localeActive = useLocale();
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    function onChangeLanguage() {
        startTransition(() => {
            if (localeActive === 'en') {
                router.replace('/vi');
            } else {
                router.replace('/en');
            }
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
            {/*<span className={' border-r-[1px] border-gray-500 h-[20px]'}></span>*/}
        </div>
    );
};

export default SwitchLanguage;
