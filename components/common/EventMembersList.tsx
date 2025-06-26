'use client';

import React, { useState } from 'react';
import MemberCard from './MemberCard';
import MemberOverlay from './MemberOverlay';
import { useLanguage } from '@/components/layout/LanguageProvider';

interface Member {
  name: string;
  imageSrc: string;
  bio: string;
}

interface Props {
  members: Member[];
}

export default function EventMembersList({ members }: Props) {
  const { language } = useLanguage();
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  let heading = '';
  if (language === 'ITA') {
    heading = members.length > 1 ? 'Conducono' : 'Conduce';
  } else {
    heading = 'Hosted by';
  }

  return (
    <section className="bg-white text-black py-20 px-6 sm:px-12">
      <h2 className="text-3xl font-bold text-center mb-12">{heading}</h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
        {members.map((member) => (
          <MemberCard
            key={member.name}
            name={member.name}
            imageSrc={member.imageSrc}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      {selectedMember && (
        <MemberOverlay
          name={selectedMember.name}
          bio={selectedMember.bio}
          imageSrc={selectedMember.imageSrc}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
}
