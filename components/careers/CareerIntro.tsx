import React from 'react';
import Image from 'next/image';
import { CareerIntroProps } from '@/lib/types/components';

export const CareerIntro: React.FC<CareerIntroProps> = ({
  title,
  paragraphs,
  images,
}) => {
  return (
    <div className="py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
        {images && images.length > 0 && (
          <div className="grid grid-cols-1 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={`Career image ${index + 1}`}
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

