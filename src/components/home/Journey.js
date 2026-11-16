import React from 'react';
import Section from '../common/Section';
import Timeline from '../Timeline';

function Journey() {
  return (
    <Section title="My journey." className="rounded-[14px] mb-8">
      <Timeline />
      <div className="mt-6 p-4 rounded-xl border border-amber-500/40 bg-amber-500/10 text-amber-800 dark:text-amber-300 text-sm text-left">
        <strong>⚠️ Notice:</strong> The Dashboard Options project was discontinued in August 2026 due to server costs and lack of an investor/funding.
      </div>
    </Section>
  );
}

export default Journey; 