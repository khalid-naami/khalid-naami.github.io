import React from 'react';
import Section from '../common/Section';
import KhalidTravelMap from './KhalidTravelMap';

function OutsideWork() {
  return (
    <Section
      title="Khalid's Travels"
      subtitle="In my free time I do running and bodybuilding, read books and hang out with friends"
      className="md:max-w-[880px]"
    >
      <div className="flex-none rounded-sm text-center mx-auto text-lg p-2 mb-4">
        <KhalidTravelMap />
        <p className="text-sm mt-6">
          Nowadays I put work first. But I intend to travel to over 100 different countries.
        </p>
      </div>
    </Section>
  );
}

export default OutsideWork; 