'use client';

import React, { useState } from 'react';
import EventCard from './EventCard';
import { allEventsENG } from '@/data/events';
import { allEventsITA } from '@/data/eventi';
import { useLanguage } from '@/components/layout/LanguageProvider';

export default function EventList() {
  const { language } = useLanguage();
  const [showPastEvents, setShowPastEvents] = useState(false);

  const allEvents = language === 'ITA' ? allEventsITA : allEventsENG;

  const activeEvents = allEvents.filter(event => event.active);
  const pastEvents = allEvents.filter(event => !event.active);

  const eventsToShow = showPastEvents
    ? [...activeEvents, ...pastEvents]
    : activeEvents;

  const texts = {
    ITA: {
      title: 'Eventi',
      noEvents: 'Nessun evento da mostrare.',
      showPast: 'Mostra eventi passati',
      hidePast: 'Nascondi eventi passati',
    },
    ENG: {
      title: 'Events',
      noEvents: 'No events to show.',
      showPast: 'Show past events',
      hidePast: 'Hide past events',
    },
  };

  return (
    <section className="bg-white text-black py-10 px-6 sm:px-12">
      <h2 className="text-4xl font-bold text-center mb-12">
        {texts[language].title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {eventsToShow.length > 0 ? (
          eventsToShow.map((event, index) => (
            <EventCard
              key={event.slug}
              slug={event.slug}
              title={event.title}
              date={event.date}
              location1={event.location1}
              location2={event.location2}
              image={event.image}
              priority={index < 2}
            />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            {texts[language].noEvents}
          </p>
        )}
      </div>

      <div className="mt-12 flex justify-center">
        <button
          onClick={() => setShowPastEvents(!showPastEvents)}
          className="px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition cursor-pointer"
          aria-expanded={showPastEvents}
        >
          {showPastEvents
            ? texts[language].hidePast
            : texts[language].showPast}
        </button>
      </div>
    </section>
  );
}
