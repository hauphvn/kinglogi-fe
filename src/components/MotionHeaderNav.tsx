'use client'
import {useEffect, useState} from "react";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";

const MotionHeaderNav = () => {
    const t = useTranslations('Navbar');
    const [scrollY, setScrollY] = useState(0);
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [bodyOffset, setBodyOffset] = useState({top: 0, left: 0, right: 0, bottom: 0, width: 0, height: 0});
    const [logo, setLogo] = useState('/images/kinglogi-logo-png.png')
    const headerHeight = useSpring(80, {
        stiffness: 100, damping: 20
    });
    const listener = (e: any) => {
        setBodyOffset(document.body.getBoundingClientRect());
        setScrollY(-bodyOffset.top);
        setLastScrollTop(scrollY);
    }
    const {scrollYProgress} = useScroll();
    const bgColor = useTransform(scrollYProgress,[0,0.1],['#5E2D85','#20003A']);
    useEffect(() => {
        window.addEventListener("scroll", listener);
        if (scrollY > lastScrollTop) {
            headerHeight.set(80);
            setLogo('/images/kinglogi-logo-text-png.png');
        } else {
            headerHeight.set(120);
            setLogo('/images/kinglogi-logo-png.png');
        }
        return () => {
            window.removeEventListener("scroll", listener);
        }
    }, [scrollY, lastScrollTop, headerHeight]);
    return (
        <motion.header
            className={`flex py-2 shadow-md justify-between items-center px-10 min-w-screen `}
            style={{
                height: headerHeight,
                position: 'fixed',
                background: bgColor,
                width: '100%',
                top: 50,
                left: 0
            }}
        >
            <div className={'nav-logo flex justify-between items-center w-full'}>
                <Link href={'/'}>
                    <div className={'transition-all duration-100 relative'}>
                        <Image className={''} height={60} width={150} src={logo} alt={'logo'}
                               style={{transition: 'opacity 0.1s'}}/>
                    </div>
                </Link>
                <nav className={'flex gap-x-5 w-full justify-end '}>
                    <Link className={'text-white font-bold hover:text-hover transition-all'}
                          href={'/'}>{t('home')}</Link>
                    <Link className={'text-white font-bold hover:text-hover transition-all'}
                          href={'/about'}>{t('route')}</Link>
                    <Link className={'text-white font-bold hover:text-hover transition-all'}
                          href={'/services'}>{t('group')}</Link>
                    <Link className={'text-white font-bold hover:text-hover transition-all'}
                          href={'/contact'}>{t('service')}</Link>
                    <Link className={'text-white font-bold hover:text-hover transition-all'}
                          href={'/contact'}>{t('contact')}</Link>
                </nav>
            </div>

        </motion.header>
    );
};

export default MotionHeaderNav;
