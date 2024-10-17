'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import GroupEdventureDetail from './components/groupEdventureDetail';
import IndividualEdventureDetail from './components/individualEdventureDetail';

export default function Home() {
  const [edventureType, setEdventureType] = useState('group');

  return (
    <div className="w-full flex flex-col items-center mt-20 px-4 md:px-0">
      <div className="flex flex-col sm:flex-row gap-5 sm: items-center justify-center w-full">
        <div
          onClick={() => setEdventureType('group')}
          className={`flex items-center rounded-full px-5 py-2 hover:bg-primary hover:text-white cursor-pointer ${
            edventureType === 'group' ? 'bg-primary text-white' : ''
          }`}
          style={{ border: '2px solid #D3D3DA' }}
        >
          <p>Group EDventures</p>
        </div>
        <div
          onClick={() => setEdventureType('individual')}
          className={`flex items-center rounded-full px-5 py-2 hover:bg-primary hover:text-white cursor-pointer ${
            edventureType === 'individual' ? 'bg-primary text-white' : ''
          }`}
          style={{ border: '2px solid #D3D3DA' }}
        >
          <p>Individual EDVentures</p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-heading font-poppins line-height-extra-loose tracking-small text-primary font-bold">
          The Colonial
        </p>
        <p className="text-heading font-poppins line-height-extra-loose tracking-small text-custom-blue font-bold">
          Road Trip
        </p>
      </div>

      <div className="mt-5 w-full flex justify-center">
        {edventureType === 'group' ? (
          <div className="flex flex-col items-center">
            <Image
              src="/images/group-img.webp"
              width={585}
              height={585}
              alt="group edventure"
              className="w-full max-w-md"
            />
            <GroupEdventureDetail />
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <Image
              src="/images/individual-img.webp"
              width={585}
              height={585}
              alt="individual edventure"
              className="w-full max-w-md"
            />
            <IndividualEdventureDetail />
          </div>
        )}
      </div>
    </div>
  );
}
