import React from 'react';
import { SustainabilityPillarsProps } from '@/lib/types/components';

export const SustainabilityPillars: React.FC<SustainabilityPillarsProps> = ({
  pillars,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pillars.map((pillar, index) => (
        <div key={index} className="card">
          {pillar.icon && (
            <div className="icon bg-brand-green/10 mb-4">
              <span className="text-2xl text-brand-green">{pillar.icon}</span>
            </div>
          )}
          <h3 className="card-title">{pillar.title}</h3>
          <p className="card-desc">{pillar.description}</p>
        </div>
      ))}
    </div>
  );
};

