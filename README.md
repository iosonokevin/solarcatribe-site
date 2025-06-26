# Solarca Tribe Website 🌿

This is the official website for **Solarca Tribe**, built with [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/). It supports multilingual content (English and Italian) and includes features like dynamic routing, reusable components, and cookie consent handling.

## 🚀 Features

- ✅ Modern stack with Next.js 15 and Tailwind CSS  
- 🌐 Multilingual support (EN / IT)  
- 📱 Responsive design  
- 🧱 Custom reusable components  
- 🍪 Integrated cookie consent banner (with Vanilla CookieConsent)  
- ⚙️ Static and dynamic routes (e.g., privacy policy, event pages)  

## 🌍 Multilingual Support

The site uses a `LanguageProvider` context to dynamically switch between English and Italian. Text content is handled through language dictionaries or inline conditional rendering using `language === 'ITA' ? ... : ...`.

## 🔐 Cookie Consent
The cookie banner is powered by vanilla-cookieconsent and supports both languages. Preferences and categories are customizable via CookieConsentConfig.ts.

## 📜 License
This project is for internal use by Solarca Tribe.
All rights reserved.

## 👤 Author & Contact
Created by Kevin Burrafato
Feel free to open an issue or contact me for any questions or improvements.

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build




