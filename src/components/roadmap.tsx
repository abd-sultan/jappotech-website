"use client"
import Button from "./button";
import Heading from "./heading";
import Section from "./section";
import TagLine from "./tagLine";
import { roadmap } from "@/constants";
import { check2, grid, loading1 } from "@/assets";
import { Gradient } from "./design/roadmap";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const Roadmap = () => {
    const { theme } = useTheme();
    const t = useTranslations('roadmap')
    
    return (
        <Section className={`overflow-hidden ${theme === 'light' ? 'bg-n-1 bg-opacity-70' : ''}`} id="roadmap" >
            <div className="container md:pb-10">
                <Heading tag={t('tag')} title={t('title')} />

                <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
                    {roadmap.map((item) => {
                        const status = item.status === "done" ? "Done" : "In progress";

                        return (
                            <div
                                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${item.colorful ? "bg-conic-gradient" : "bg-n-6"
                                    }`}
                                key={item.id}
                            >
                                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                                    <div className="absolute top-0 left-0 max-w-full">
                                        <Image
                                            className="w-full"
                                            src={grid}
                                            width={550}
                                            height={550}
                                            alt="Grid"
                                        />
                                    </div>
                                    <div className="relative z-1">
                                        <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                            <TagLine>{item.date}</TagLine>

                                            <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                                <Image
                                                    className="mr-2.5"
                                                    src={item.status === "done" ? check2 : loading1}
                                                    width={16}
                                                    height={16}
                                                    alt={status}
                                                />
                                                <div className="tagline">{status}</div>
                                            </div>
                                        </div>

                                        <div className="mb-10 -my-10 -mx-15">
                                            <Image
                                                className="w-full"
                                                src={item.imageUrl}
                                                width={628}
                                                height={426}
                                                alt={item.title}
                                            />
                                        </div>
                                        <h4 className="h4 mb-4">{t('itemTitle')}</h4>
                                        <p className="body-2 text-n-4">{t('itemDesc')}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    <Gradient />
                </div>

                <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
                    <Button href="/roadmap"><span className={`${theme === 'light' ? 'text-black' : ''} `}>{t('button')}</span></Button>
                </div>
            </div>
        </Section>

    )
};

export default Roadmap;

