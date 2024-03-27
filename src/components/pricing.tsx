"use client";
import Section from "./section";
import { smallSphere, stars } from "@/assets";
import Heading from "./heading";
import PricingList from "./pricingList";
import { LeftLine, RightLine } from "./design/pricing";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";

const Pricing = () => {
  const { theme } = useTheme();
  const t = useTranslations('pricing')
  return (
    <Section
      className={`overflow-hidden ${theme === 'light' ? 'bg-n-1' : ''}`}
      id="pricing"
    >
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Image
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <Image
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag={t('tag')}
          title={t('title')}
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex justify-center mt-10">
          <a
            className={`text-xs font-code font-bold tracking-wider uppercase border-b ${theme === 'light' ? 'text-n-8 border-n-8 font-bold' : ''}`}
            href="/pricing"
          >
            {t('fullDetails')}
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
