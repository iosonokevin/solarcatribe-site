'use client';

import React, { useState } from 'react';
import MemberCard from './MemberCard';
import MemberOverlay from './MemberOverlay';
import { StaticImageData } from 'next/image';

interface Member {
  name: string;
  imageSrc: StaticImageData;
  bio: string;
}

interface Props {
  members: Member[];
  title?: string;
}

export default function MembersList({ members, title }: Props) {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  return (
    <section className="bg-white text-black py-20 px-6 sm:px-12">
      <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>

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
