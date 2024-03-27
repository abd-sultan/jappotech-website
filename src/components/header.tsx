"use client";
import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { useEffect, useState } from "react";
import { brainwave } from "../assets";
import { background } from "../assets";
import { navigation } from "../constants";
import Button from "./button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/header";
import Image from "next/image";
import ThemeSwitch from "./themeSwitch";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import LanguageSelector from "./languageChanger";
const Header = () => {
    const [pathName, setPathName] = useState("");
    const [openNavigation, setOpenNavigation] = useState(false);
    const { theme, setTheme } = useTheme();
    const t = useTranslations('header');

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, [setTheme]);

    return (
        <div
            className={`fixed top-0 left-0 w-full z-50  border-b ${theme === 'light' ? `lg:bg-n-1 border-slate-500  lg:backdrop-blur-sm ` : `border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm`}   ${openNavigation ? `${theme === 'light' ? "bg-n-1" : "bg-n-8"}` : `${theme === 'light' ? "bg-n-1 backdrop-blur-sm" : "bg-n-8 backdrop-blur-sm"}` 
                }`}
        >
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <Image src={brainwave} width={190} height={40} alt="JappoTech" />
                </a>

                <nav
                    className={`${openNavigation ? "flex" : "hidden"
                        } fixed top-[5rem] left-0 right-0 ${theme === 'light' ? "bg-n-1" : "bg-n-8"}  bottom-0 bg-slate-white lg:static lg:flex lg:mx-auto`}
                >
                    <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                        {navigation.map((item) => (
                            <a
                                key={item.id}
                                href={item.url}
                                onClick={handleClick}
                                className={`block relative font-code text-2xl uppercase ${theme === 'light' ? ' text-slate-900' : ' text-slate-100'} text-slate-900 transition-colors hover:text-purple-400 ${item.onlyMobile ? "lg:hidden" : ""
                                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${item.url === pathName.hash
                                        ? `${theme === 'light' ? 'z-2 lg:text-slate-800 text-slate-800' : 'z-2 lg:text-slate-100 text-slate-100'}`
                                        : `${theme === 'light' ? 'z-2 lg:text-black text-black' : 'lg:text-slate-400 text-slate-400'}`
                                    } ${theme === 'light' ? 'lg:leading-5 lg:hover:text-slate-500 xl:px-12' : 'lg:leading-5 lg:hover:text-slate-100 xl:px-12'}`}
                            >
                                {t('itemTitle')}
                            </a>

                        ))}

                    </div>

                    <HamburgerMenu />
                </nav>
                <div className="flex items-center">
                    <div className="hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
                        <ThemeSwitch />
                    </div>
                    <div className="hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
                        <LanguageSelector locale={undefined} />
                    </div>
                </div>

                <Button className={`hidden lg:flex ${theme === 'light' ? 'text-slate-900' : 'text-slate-50'} `} href="#contact">
                    {t('subTitle')}
                </Button>

                <Button
                    className="ml-auto lg:hidden"
                    px={3}
                    onClick={toggleNavigation}
                >
                    <MenuSvg openNavigation={openNavigation} />
                </Button>
            </div>
        </div>
    );
}
export default Header