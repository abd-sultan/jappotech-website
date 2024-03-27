"use client"; 
import { benefits } from "../constants";
import Heading from './heading';
import Section from "./section";
import Arrow from "@/assets/svg/Arrow";
import { GradientLight } from "./design/benefits";
import ClipPath from "@/assets/svg/ClipPath";
import Image from "next/image";
import theme from "tailwindcss/defaultTheme";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";


const Benefits = () => {
    const {theme} = useTheme();
    const t = useTranslations('benefits');

    return (
        <Section id="features" className={`${theme === 'light' ? 'bg-n-1 bg-opacity-70' : ''}`}>
            <div className="container relative z-2">
                <Heading
                    className="md:max-w-md lg:max-w-2xl"
                    title={t('title')}
                />

                <div className="flex flex-wrap gap-10 mb-10 ">
                    {benefits.map((item) => (
                        <div
                            className="block relative rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`,
                            }}
                            key={item.id}
                        >
                            <div className={`relative ${theme === "light" ? 'bg-white border-1 border-black bg-opacity-50' : 'border'} z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none`}>
                                <h5 className={`h5 mb-5 ${theme === "light" ? 'text-n-8' : ''}`}>{t('itemTitle')}</h5>
                                <p className={`body-2 mb-6 ${theme === "light" ? 'text-n-8' : ''}`}>{t('itemDesc')}</p>
                                <div className="flex items-center mt-auto">
                                    <Image
                                        src={item.iconUrl}
                                        width={48}
                                        height={48}
                                        alt={item.title}
                                    />
                                    <p className={`ml-auto font-code text-xs font-bold ${theme === "light" ? 'text-n-8' : 'text-n-1'}  uppercase tracking-wider`} >
                                        {t('exploreMore')}
                                    </p>
                                    <Arrow />
                                </div>
                            </div>

                            {item.light && <GradientLight />}

                            <ClipPath />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
export default Benefits