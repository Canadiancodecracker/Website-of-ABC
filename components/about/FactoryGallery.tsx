'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FactoryGalleryProps } from '@/lib/types/components';

export const FactoryGallery: React.FC<FactoryGalleryProps> = ({
  images,
  layout = 'grid',
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div
        className={
          layout === 'masonry'
            ? 'columns-1 md:columns-2 lg:columns-3 gap-4'
            : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
        }
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative h-64">
              <Image
                src={image}
                alt={`Factory image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-2xl font-bold hover:text-gray-300"
            >
              ×
            </button>
            <Image
              src={selectedImage}
              alt="Gallery image"
              width={1600}
              height={1200}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

