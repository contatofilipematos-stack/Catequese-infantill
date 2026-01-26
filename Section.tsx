
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id }) => (
  <section id={id} className={`py-16 px-4 md:py-24 ${className}`}>
    <div className="max-w-6xl mx-auto w-full">
      {children}
    </div>
  </section>
);
