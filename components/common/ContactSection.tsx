'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/components/layout/LanguageProvider';

export default function ContactSection() {
  const { language } = useLanguage();
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const placeholders = {
    ITA: {
      name: 'Nome',
      email: 'Email',
      message: 'Messaggio',
      send: 'Invia messaggio',
    },
    ENG: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Now',
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setResponseMessage(null);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const result = await res.json();

      if (res.ok) {
        setResponseMessage(language === 'ITA' ? 'Messaggio inviato!' : 'Message sent!');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setResponseMessage(language === 'ITA' ? 'Errore nell\'invio.' : 'Sending failed.');
        console.error(result.error);
      }
    } catch (err) {
      console.error(err);
      setResponseMessage(language === 'ITA' ? 'Errore interno.' : 'Internal error.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="bg-white text-black py-20 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[60vh]">
        <div className="flex items-center justify-center px-4">
          <div className="text-center md:text-left max-w-md space-y-4">
            <h2 className="text-3xl font-bold">
              {language === 'ITA' ? 'Vivere il Sentiero Rosso' : 'Walking the Red Path'}
            </h2>
            <p className="text-base leading-relaxed">
              {language === 'ITA'
                ? 'Scrivici. La tua voce è importante.'
                : 'Write to us. Your voice matters.'}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center px-4">
          <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={placeholders[language].name}
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              required
              className="w-full border border-gray-300 rounded px-4 py-3"
            />
            <input
              type="email"
              name="email"
              placeholder={placeholders[language].email}
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              required
              className="w-full border border-gray-300 rounded px-4 py-3"
            />
            <textarea
              name="message"
              placeholder={placeholders[language].message}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              rows={5}
              required
              className="w-full border border-gray-300 rounded px-4 py-3 resize-none"
            />
            <button
              type="submit"
              disabled={isSending}
              className="inline-block px-6 py-2 border border-black text-white bg-black rounded-full transition-all duration-300 hover:bg-transparent hover:text-black cursor-pointer"
            >
              {isSending
                ? language === 'ITA' ? 'Invio in corso...' : 'Sending...'
                : placeholders[language].send}
            </button>
            {responseMessage && (
              <p className="text-sm mt-2 text-center text-green-600">{responseMessage}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
