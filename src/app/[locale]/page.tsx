import {useTranslations} from "next-intl";
import {Button} from "antd";
import DatepickerFloatLabel from "@/components/DatepickerFloatLabel";

export default function Home() {
    const t = useTranslations('Home');
    return (
        <div>

            <Button type="primary">Button</Button>
            <hr/>
            <div className={'w-[400px] p-5'}>
                <DatepickerFloatLabel
                    id={'datetimeFrom'}
                    label={'Thời gian đón (*)'}
                />
            </div>
        </div>
    );
}
