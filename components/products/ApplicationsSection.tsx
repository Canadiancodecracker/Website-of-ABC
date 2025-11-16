import React from 'react';
import Image from 'next/image';
import { ApplicationsSectionProps } from '@/lib/types/components';

export const ApplicationsSection: React.FC<ApplicationsSectionProps> = ({
  applications,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {applications.map((app, index) => (
        <div key={index} className="app-card">
          {app.image && (
            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
              <Image
                src={app.image}
                alt={app.category}
                fill
                className="object-cover"
              />
            </div>
          )}
          <h3 className="text-lg font-semibold mb-2">{app.category}</h3>
          <p className="text-sm text-gray-700">{app.description}</p>
        </div>
      ))}
    </div>
  );
};

