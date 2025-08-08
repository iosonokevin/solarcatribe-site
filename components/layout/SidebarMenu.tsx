'use client';
import React from 'react';
import CloseButton from '../common/CloseButton';
import Link from 'next/link';

interface Props {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function SidebarMenu({ isOpen, toggleMenu }: Props) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-full md:w-64 bg-white text-black transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <CloseButton
          onClick={toggleMenu}
          className="absolute top-4 right-4"
        />

        <div className="h-full flex flex-col justify-center items-center space-y-6 text-lg font-medium">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/events" className="hover:underline">Eventi</Link>
          <Link href="/living-matter" className="hover:underline">Materia Viva</Link>         
          <Link href="/red-path" className="hover:underline">Sentiero Rosso</Link> 
          <Link href="/tribe" className="hover:underline">Tribù</Link>         
          <Link href="/join-us" className="hover:underline">Contatti</Link>
        </div>
      </aside>
    </>
  );
}
