"use client";
import React from "react";
import Section from "./section";
import { socials } from "@/constants";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";


const Footer = () => {
    const {theme} = useTheme();
    const t = useTranslations('footer');
    return (
        <Section 
          crosses 
          className={`!px-0 !py-10 ${theme === 'light' ? 'bg-slate-50' : ''}`}
        >
          <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
            <p className={`caption lg:block ${theme === 'light' ? 'text-n-8' : 'text-n-4'}`}>
              © {new Date().getFullYear()}. {t('droit')}.
            </p>
    
            <ul className="flex gap-5 flex-wrap">
              {socials.map((item) => (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                >
                  <Image src={item.iconUrl} width={16} height={16} alt={item.title} className="text-red-500"/>
                </a>
              ))}
            </ul>
          </div>
        </Section>
      );
}
export default Footer