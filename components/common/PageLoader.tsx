'use client';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleMediaLoaded = () => {
      setTimeout(() => setLoading(false), 300);
    };

    window.addEventListener('media-loaded', handleMediaLoaded);

    return () => {
      window.removeEventListener('media-loaded', handleMediaLoaded);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center transition-opacity duration-500">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
