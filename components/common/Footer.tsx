'use client';

import { useLanguage } from '@/components/layout/LanguageProvider';

export default function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="bg-white py-10 flex justify-center items-center text-sm text-black">
      <p>
        {language === 'ITA'
          ? '© 2025 Solarca Tribe. Tutti i diritti riservati.'
          : '© 2025 Solarca Tribe. All rights reserved.'}
      </p>
    </footer>
  );
}
