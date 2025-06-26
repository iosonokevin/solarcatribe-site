import React from 'react';
import LanguageSwitch from '../layout/LanguageSwitch';
import HamburgerButton from '../layout/HamburgerButton';
import { useLanguage } from '../layout/LanguageProvider';

interface HeaderProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
  showLanguageSwitch?: boolean;
}

export default function Header({ toggleMenu, isMenuOpen, showLanguageSwitch = true }: HeaderProps) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header
      className={`absolute top-0 left-0 w-full px-8 sm:px-20 py-6 flex items-center z-20 ${
        showLanguageSwitch ? 'justify-between' : 'justify-end'
      }`}
    >
      {showLanguageSwitch && (
        <LanguageSwitch language={language} toggleLanguage={toggleLanguage} />
      )}
      <HamburgerButton isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}

