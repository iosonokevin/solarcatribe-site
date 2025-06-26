import { allEventsENG } from '@/data/events';
import { allEventsITA } from '@/data/eventi';
import { notFound } from 'next/navigation';
import ContactBanner from '@/components/common/ContactBanner';
import Footer from '@/components/common/Footer';
import Hero from '@/components/common/HeroSection';
import { membersITA } from '@/data/membri';
import { membersENG } from '@/data/members';
import EventMembersList from '@/components/common/EventMembersList';
import { MapPin, Calendar } from 'lucide-react';
import ButtonLink from '@/components/common/PrimaryButton';
import ReactMarkdown from 'react-markdown';

interface Props {
  params: { 
    lang: 'ITA' | 'ENG'; 
    slug: string;
  };
}

function getEventsByLang(lang: 'ITA' | 'ENG') {
  return lang === 'ITA' ? allEventsITA : allEventsENG;
}

function getMembersByLang(lang: 'ITA' | 'ENG') {
  return lang === 'ITA' ? membersITA : membersENG;
}

export function generateStaticParams() {
  const paramsITA = allEventsITA.map(event => ({ lang: 'ITA', slug: event.slug }));
  const paramsENG = allEventsENG.map(event => ({ lang: 'ENG', slug: event.slug }));

  return [...paramsITA, ...paramsENG];
}

export default function EventPage({ params }: Props) {
  const { lang, slug } = params;
  const events = getEventsByLang(lang);
  const event = events.find(e => e.slug === slug);

  if (!event) return notFound();

  const members = getMembersByLang(lang);
  const eventMembers = members.filter(m => event.members.includes(m.name));

  const registerText = lang === 'ITA' ? 'ISCRIVITI QUI' : 'REGISTER HERE';

  return (
    <div className="bg-white text-black">
      <Hero title={event.title} height="90vh" imageSrc={event.image} showLanguageSwitch={false}/>

      <section className="bg-[#A4012F] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 py-8 flex flex-col sm:flex-row justify-between items-start sm:items-center text-lg font-medium">
          <div className="flex space-x-2 mb-4 sm:mb-0 sm:text-left items-start">
            <MapPin className="h-6 w-6 text-white flex-shrink-0 mt-0.5 sm:mt-0" />
            <div className="flex flex-col">
              <span>{event.location1 ?? (lang === 'ITA' ? 'Da definire' : 'TBD')}</span>
              {event.location2 && <span>{event.location2}</span>}
            </div>
          </div>

          <div className="flex items-center sm:text-right space-x-2">
            <Calendar className="h-6 w-6 text-white" />
            <span>{event.date}</span>
          </div>
        </div>
      </section>

      <EventMembersList members={eventMembers} />

      <section className="bg-white text-black max-w-6xl mx-auto px-6 py-16 sm:px-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="sm:w-2/3">
          <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
          {event.description1 && (
            <div className="mb-8">
              <ReactMarkdown>{event.description1}</ReactMarkdown>
            </div>
          )}
          {event.description2 && (
            <div className="mb-8">
              <ReactMarkdown>{event.description2}</ReactMarkdown>
            </div>
          )}
          {event.description3 && (
            <div className="mb-8">
              <ReactMarkdown>{event.description3}</ReactMarkdown>
            </div>
          )}
        </div>

        {event.registration && (
          <div className="sm:w-1/3 flex items-center justify-center">
            <ButtonLink text={registerText} href={event.registration} />
          </div>
        )}
      </section>

      <ContactBanner />
      <Footer />
    </div>
  );
}
