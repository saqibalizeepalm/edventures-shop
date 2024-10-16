'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import GroupEdventureDetail from './components/groupEdventureDetail';
import IndividualEdventureDetail from './components/individualEdventureDetail';

export default function Home() {
  const [edventureType, setEdventureType] = useState('group');

  return (
    <div className="w-full flex flex-col items-center mt-20">
      <div className="flex gap-5">
        <div
          onClick={() => setEdventureType('group')}
          className={`flex items-center rounded-l-full  rounded-r-full pl-10 pr-10 hover:bg-primary hover:text-white cursor-pointer ${
            edventureType === 'group' ? 'bg-primary text-white' : ''
          }`}
          style={{ border: '2px solid #D3D3DA', height: '40px' }}
        >
          <p>Group EDventures</p>
        </div>
        <div
          onClick={() => setEdventureType('individual')}
          className={`flex items-center rounded-l-full  rounded-r-full pl-10 pr-10 hover:bg-primary hover:text-white cursor-pointer ${
            edventureType === 'individual' ? 'bg-primary text-white' : ''
          }`}
          style={{ border: '2px solid #D3D3DA', height: '40px' }}
        >
          <p>Individual EDVentures</p>
        </div>
      </div>
      <div className="mt-16">
        <p
          className="text-heading font-poppins line-height-extra-loose tracking-small text-primary text-center"
          style={{ fontWeight: 'bold', lineHeight: '0.5em' }}
        >
          The Colonial
        </p>
        <p
          className="text-heading font-poppins line-height-extra-loose tracking-small text-custom-blue text-center"
          style={{ fontWeight: 'bold' }}
        >
          Road Trip
        </p>
      </div>
      <div style={{ marginTop: '-20px' }}>
        {edventureType === 'group' ? (
          <div>
            <Image
              src="/images/group-img.webp"
              width={585}
              height={585}
              alt="group edventure"
            />
            <GroupEdventureDetail />
          </div>
        ) : (
          <div>
            <Image
              src="/images/individual-img.webp"
              width={585}
              height={585}
              alt="group edventure"
            />
            <IndividualEdventureDetail />
          </div>
        )}
      </div>
    </div>
  );
}
