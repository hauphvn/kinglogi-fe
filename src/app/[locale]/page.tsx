import {useTranslations} from "next-intl";
import {Button} from "antd";
import SelectFloatLabel from "@/components/SelectFloatLabel";

export default function Home() {
    const t = useTranslations('Home');
    return (
        <div>

            <Button type="primary">Button</Button>
<hr/>
           <div className={'w-[400px] p-5'}>
               <SelectFloatLabel id={'hauphvn'} label={'Điểm đi (*)'}/>
           </div>
        </div>
    );
}
