import Header from "@/components/header";
import Image from "next/image";
import ButtonGradient from "../../assets/svg/ButtonGradient"
import Accueil from "@/components/accueil";
import Benefits from "@/components/benefits";
import Collaboration from "@/components/collaboration";
import Services from "@/components/services";
import Pricing from "@/components/pricing";
import Roadmap from "@/components/roadmap";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/themeSwitch";
import { useTranslations } from "next-intl";

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Accueil/>
        <Benefits/>
        <Collaboration/>
        <Services/>
        <Pricing/>
        <Roadmap/>
        <Footer/>
      </div>
      <ButtonGradient/>
    </>
  );
}
