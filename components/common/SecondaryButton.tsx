'use client';

import React from 'react';
import Link from 'next/link';

type SecondaryButtonProps = {
  text: string;
  href: string;
};

export default function SecondaryButton({ text, href }: SecondaryButtonProps) {
  return (
    <Link
      href={href}
      className="inline-block px-6 py-2 border border-white text-white bg-transparent rounded-full transition-all duration-300 hover:bg-white hover:text-black"
    >
      {text}
    </Link>
  );
}
