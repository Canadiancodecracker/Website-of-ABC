import React from 'react';
import Image from 'next/image';
import { CompanyOverviewProps } from '@/lib/types/components';

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
        {images && images.length > 0 && (
          <div className="grid grid-cols-2 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`${title} image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

