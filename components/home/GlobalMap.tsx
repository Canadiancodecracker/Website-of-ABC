import React from 'react';
import { GlobalMapProps } from '@/lib/types/components';

export const GlobalMap: React.FC<GlobalMapProps> = ({ regions }) => {
  return (
    <div className="relative py-12">
      <div className="bg-gray-100 rounded-2xl p-8 min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Global Presence</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {regions.map((region, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg ${
                  region.highlight
                    ? 'bg-brand-blue text-white'
                    : 'bg-white text-gray-900'
                }`}
              >
                <div className="font-semibold">{region.name}</div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-600">
            Interactive map visualization coming soon
          </p>
        </div>
      </div>
    </div>
  );
};

