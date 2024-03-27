import { companyLogos } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface CompanyLogosProps{
    className?: any;
} 

const CompanyLogos: React.FC<CompanyLogosProps> = ({ className }) => {
  const t = useTranslations('companyLogos');
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        {t('title')}
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <Image src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
