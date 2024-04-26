import {useTranslations} from "next-intl";
import BookFixedBusRoute from "@/components/BookFixedBusRoute";
import BookFlexibleBusRoute from "@/components/BookFlexibleBusRoute";

export default function Home() {
    const t = useTranslations('Home');
    return (
        <div className={'min-h-screen mt-5 w-full'}>
            <div id={'home-page'} className={'flex flex-row w-full gap-x-4 justify-center'}>
                <BookFixedBusRoute/>
                <BookFlexibleBusRoute/>
            </div>
        </div>
    );
}
