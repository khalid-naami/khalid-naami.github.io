import React, { Suspense } from 'react';
import Section from '../common/Section';

const KhalidTravelMap = React.lazy(() => import('./KhalidTravelMap'));

function OutsideWork() {
  return (
    <Section
      title="Khalid's Travels"
      subtitle="In my free time I do running and bodybuilding, read books and hang out with friends"
      className="md:max-w-[880px]"
    >
      <div className="flex-none rounded-sm text-center mx-auto text-lg p-2 mb-4">
        <Suspense fallback={<div className="h-[400px] flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl">Loading Map...</div>}>
          <KhalidTravelMap />
        </Suspense>
        <p className="text-sm mt-6">
          Nowadays I put work first. But I intend to travel to over 100 different countries.
        </p>
      </div>
    </Section>
  );
}

export default OutsideWork; 