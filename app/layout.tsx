import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageLoader from "@/components/common/PageLoader";
import { LanguageProvider } from "@/components/layout/LanguageProvider";
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import CookieConsentComponent from '@/components/layout/CookieConsent';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solarca Tribe – Vivere il Sentiero Rosso",
  description:
    "Un cammino di crescita personale e spirituale ispirato alla tradizione del Sentiero Rosso. Scopri eventi, cerimonie e guide del progetto Solarca Tribe.",
  keywords: [
    "Sentiero Rosso",
    "spiritualità",
    "cerimonie",
    "seminari sciamanici",
    "Solarca Tribe",
    "crescita personale",
    "tradizioni native",
    "cammino interiore",
  ],
  verification: {
    google: "sckk7qfY-xwGJCNThzrSRgrFXhWr2wedl0mR3oM9kW8s",
  },
  openGraph: {
    title: "Solarca Tribe – Red Path",
    description:
      "Partecipa a cerimonie, seminari ed esperienze di crescita ispirate alla tradizione del Sentiero Rosso.",
    url: "https://www.solarcatribe.com/",
    siteName: "Solarca Tribe",
    images: [
      {
        url: "https://www.solarcatribe.com/logo_solarca.png",
        width: 1200,
        height: 630,
        alt: "Logo solarca tribe",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">   
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageLoader />
        <LanguageProvider>
        {children}
        </LanguageProvider>
        <CookieConsentComponent />
      </body>
    </html>
  );
}
