'use client';

import React, { useState } from 'react';
import MemberCard from './MemberCard';
import MemberOverlay from './MemberOverlay';
import { members } from '@/data/members';

export default function MemberList() {
  const [selectedMember, setSelectedMember] = useState<null | typeof members[0]>(null);

  return (
    <section className="bg-white text-black py-20 px-6 sm:px-12">
      <h2 className="text-4xl font-bold text-center mb-12">I nostri membri</h2>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
      {members.map((member, index) => (
        <MemberCard
          key={index}
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
