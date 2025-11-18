import React from 'react';
import { TimelineProps } from '@/lib/types/components';

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative py-12">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="relative pl-20">
            <div className="absolute left-6 w-4 h-4 bg-brand-blue rounded-full border-4 border-white shadow-lg"></div>
            <div className="text-sm font-semibold text-brand-blue mb-1">
              {item.year}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

