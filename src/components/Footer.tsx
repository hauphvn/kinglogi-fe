import React from 'react';
import Image from "next/image";
import {ArrowRight, Check, Mail, MapPin, Phone} from "lucide-react";
import Link from "next/link";
import {useTranslations} from "next-intl";

const Footer = () => {
    const intro = useTranslations('FooterIntro');
    const bank = useTranslations('FooterInfoBank');
    const contact = useTranslations('FooterInfoContact');
    return (
        <footer className={'flex justify-between flex-wrap bg-primary p-10 flex-auto gap-x-4'}>
            <div className={'flex flex-1 flex-row flex-wrap'}>
                <p className={'font-bold text-2xl text-white uppercase w-full'}>{intro('title')}</p>
                <Image width={150} height={100} src={'/images/kinglogi-logo-footer-png.png'} alt={'logo'}/>
                <p className={'text-highlight text-[13px]'}>
                    Công Ty TNHH Phần mềm Vận tải <span className={'font-bold'}>KING LOGI</span> được thành lập và
                    hoạt động theo GCN ĐKDN số 0109301679 do Sở KH&ĐT TP Hà Nội cấp ngày 11/08/2020 và Giấy phép KDVT số
                    8849 do Sở GTVT TP Hà Nội cấp ngày 29/12/2020
                </p>
                <p className={'font-light text-[13px] text-white mb-3 flex flex-col gap-y-2'}>
                    <span> {intro('address')}: 873 Hồng Hà, phường Chương Dương, quận Hoàn Kiếm, TP Hà Nội, Việt Nam</span>
                    <span> {intro('businessId')}: 0109301679</span>
                </p>
                <div className={'flex flex-col gap-y-2 mb-3'}>
                    <p className={'font-light text-[13px] text-white'}>{intro('quickLink')}</p>
                    <ul className={'transition-all flex flex-col gap-y-1 '}>
                        <li className={'text-highlight font-light text-[13px] flex gap-x-1 items-center'}>
                            <ArrowRight className={'text-white size-[14px]'}/>
                            <span className={'hover:cursor-pointer hover:underline'}>{intro('term')}</span></li>
                        <li className={'text-highlight font-light text-[13px] flex gap-x-1 items-center'}>
                            <ArrowRight className={'text-white size-[14px]'}/>
                            <span className={'hover:cursor-pointer hover:underline'}>{intro('privacy')}</span>
                        </li>
                        <li className={'text-highlight font-light text-[13px] flex gap-x-1 items-center'}>
                            <ArrowRight className={'text-white size-[14px]'}/>
                            <span className={'hover:cursor-pointer hover:underline'}>{intro('regulation')}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={'flex flex-1 flex-col'}>
                <p className={'font-bold text-2xl text-white uppercase w-full mb-4'}>{bank('title')}</p>
                <ul className={'text-white mb-2 text-[14px] flex flex-col gap-y-2'}>
                    <li className={'flex gap-x-1 items-center'}>
                        <Check strokeWidth={5} className={'text-white font-bold'} size={18}/>
                        <span>{bank('accountName')}: Công ty TNHH Phần mềm vận tải KING LOGI</span>
                    </li>
                    <li className={'flex gap-x-1 items-center'}>
                        <Check strokeWidth={5} className={'text-white font-bold'} size={18}/>
                        <span>{bank('bank')}: Techcombank</span>
                    </li>
                    <li className={'flex gap-x-1 items-center'}>
                        <Check strokeWidth={5} className={'text-white font-bold'} size={18}/>
                        <span>{bank('place')}: 15 Đào Duy Từ, Hoàn Kiếm, Hà Nội</span>
                    </li>
                    <li className={'flex gap-x-1 items-center'}>
                        <Check strokeWidth={5} className={'text-white font-bold'} size={18}/>
                        <span>{bank('accountNumber')}: 19036196293022</span>
                    </li>
                    <li className={'flex gap-x-1 items-center'}>
                        <Check strokeWidth={5} className={'text-white font-bold'} size={18}/>
                        <span>{bank('cashNumber')}: 19036196293022</span>
                    </li>
                </ul>
                <div>
                    <p className={'text-white mb-2 font-light text-[13px]'}>{bank('labelDownloadApp')}</p>
                    <div className={'flex flex-col gap-y-2'}>
                        <Link target={'_blank'} href={'https://apps.apple.com/us/app/id1528993698'}>
                            <Image width={150} height={100} src={'/images/apple-store.png'} alt={'logo'}/>
                        </Link>
                        <Image width={150} height={100} src={'/images/google-play-store.png'} alt={'logo'}/>
                    </div>
                </div>
            </div>
            <div className={'flex flex-1 flex-col'}>
                <p className={'font-bold text-2xl text-white uppercase w-full mb-4'}>{contact('title')}</p>
                <p className={'text-white text-[14px] mb-4'}>{contact('subTitle')}</p>
                <ul className={'flex gap-y-2 flex-col mb-4'}>
                    <li className={'flex gap-x-1 items-center'}><Phone strokeWidth={2} className={'text-white'}
                                                                       size={14}/><span
                        className={'text-highlight font-bold text-[14px]'}>1900077796</span></li>
                    <li className={'flex gap-x-1 items-center'}><Mail strokeWidth={2} className={'text-white'}
                                                                      size={14}/><span
                        className={'text-highlight font-bold text-[14px]'}>admin@kinglogi.com</span></li>
                    <li className={'flex gap-x-1 items-center'}><MapPin strokeWidth={2} className={'text-white'}
                                                                        size={14}/><Link target={'_blank'}
                                                                                         href="https://maps.app.goo.gl/gpZPM9GKCk5Vby6t9">
                        <span
                            className={'text-highlight font-bold text-[14px]'}>Google Map</span>
                    </Link></li>
                </ul>
                <div>
                    <p className={'text-white text-[14px]'}>{contact('partner')}</p>
                    <div className={'flex gap-x-2 flex-wrap h-[100px]'}>
                        <Link target={'_blank'} href={'https://www.otofun.net/'} className={'relative w-[80px]'}>
                            <Image fill objectFit={'contain'} src={'/images/Otofun(1).png'} alt={'logo'}/>
                        </Link>
                        <Link target={'_blank'} href={'https://paynetvn.com/'} className={'relative w-[80px]'}>
                            <Image fill objectFit={'contain'} src={'/images/Paynet-Logo.png'} alt={'logo'}/>
                        </Link>
                        <Link target={'_blank'} href={'https://paytrip.vn/'} className={'relative w-[80px] '}>
                            <Image fill objectFit={'contain'} src={'/images/Paytrip1s.png'} alt={'logo'}/>
                        </Link>
                        <Link target={'_blank'} href={'https://www.vietnamairlines.com/vn/vi/home'}
                              className={'relative w-[80px]'}>
                            <Image fill objectFit={'contain'} src={'/images/vietnam-airlines-vector-logo-2022(1).png'}
                                   alt={'logo'}/>
                        </Link>
                        <Link target={'_blank'} href={'https://vnibe.com/'} className={'relative w-[80px]'}>
                            <Image fill objectFit={'contain'} src={'/images/Vnibe.jpg'} alt={'logo'}/>
                        </Link>
                        <Link target={'_blank'} href={'https://vbooking.com.vn/'} className={'relative w-[80px]'}>
                            <Image fill objectFit={'contain'} src={'/images/booking-1274x340.png'} alt={'logo'}/>
                        </Link>
                        <Link target={'_blank'} href={'https://gdsys.vn/'} className={'relative w-[80px]'}>
                            <Image fill objectFit={'contain'} src={'/images/Gdsys.png'} alt={'logo'}/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
