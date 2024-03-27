"use client";
import { check } from "@/assets";
import { pricing } from "@/constants";
import Button from "./button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const PricingList = () => {
    const {theme} = useTheme();
    const t = useTranslations('pricing');

    return (
        <div className="flex gap-[1rem] max-lg:flex-wrap">
            {pricing.map((item) => (
                <div
                    key={item.id}
                    className={`w-[19rem] max-lg:w-full h-full px-6 ${theme === 'light' ? 'bg-n-2 bg-opacity-5 border border-slate-600' : 'bg-n-8 border border-n-6'} rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3`}
                >
                    <h4 className={`h4 mb-4`}>{t('offer')}</h4>

                    <p 
                        className={`body-2 min-h-[4rem] mb-3 ${theme === 'light' ? 'text-n-8' : 'text-n-1/50'}`}
                        
                    >
                        {t('description')}
                    </p>

                    <div 
                        className={`flex items-center h-[5.5rem] mb-6 ${theme === 'light' ? 'text-n-8' : ''}`}
                    >
                        {item.price && (
                            <>
                                <div className="h3">$</div>
                                <div className="text-[5.5rem] leading-none font-bold" >
                                    {item.price}
                                </div>
                            </>
                        )}
                    </div>

                    <Button
                        className="w-full mb-6"
                        href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
                    >
                        <span className={`${theme === 'light' ? 'text-n-8' : ''}`}>{item.price ? t('button1') : t('button2')}</span>
                        
                    </Button>

                    <ul>
                        {item.features.map((feature, index) => (
                            <li
                                key={index}
                                className="flex items-start py-5 border-t border-n-6"
                            >
                                <Image src={check} width={24} height={24} alt="Check" />
                                <p className={`body-2 ml-4 ${theme === 'light' ? 'text-n-8' : ''}`}>{t('list')}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default PricingList;