'use client';

import { useRouter, usePathname } from '@/navigation';
import { useTranslations } from 'next-intl';
import frenchFlag from '@/assets/france.png';
import ukFlag from '@/assets/united-kingdom.png';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LanguageSelectorProps {
    locale: any;
}
const LanguageChanger: React.FC<LanguageSelectorProps> = ({ locale }) => {
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('language');
    const [selectedLocale, setSelectedLocale] = useState(locale);

    useEffect(() => {
        const storedLocale = localStorage.getItem('selectedLocale');
        if (storedLocale) {
            setSelectedLocale(storedLocale);
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = e.target.value;
        setSelectedLocale(newLocale);
        localStorage.setItem('selectedLocale', newLocale); // Stockage de la nouvelle langue dans localStorage
        router.push(pathname, { locale: newLocale });
    };

    const flagImage = selectedLocale === 'fr' ? frenchFlag : ukFlag;


    return (
        <div className="flex items-center">
            <Image src={flagImage} alt="Language Flag" className="w-6 h-6 mr-2" />
            <select value={selectedLocale} onChange={handleChange} className={`p-1 rounded bg-gray-300 text-black`}>
                
                <option value="fr">{t('french')}</option>
                <option value="en">{t('english')}</option>
            </select>
        </div>
    );
}
export default LanguageChanger
