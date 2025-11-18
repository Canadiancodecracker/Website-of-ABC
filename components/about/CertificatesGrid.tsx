'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CertificatesGridProps } from '@/lib/types/components';

export const CertificatesGrid: React.FC<CertificatesGridProps> = ({
  certificates,
}) => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="card cursor-pointer"
            onClick={() => setSelectedCert(cert.file)}
          >
            <div className="relative h-64 rounded-lg overflow-hidden mb-4">
              <Image
                src={cert.thumbnail}
                alt={cert.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="card-title">{cert.name}</h3>
          </div>
        ))}
      </div>

      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute -top-12 right-0 text-white text-2xl font-bold"
            >
              ×
            </button>
            <Image
              src={selectedCert}
              alt="Certificate"
              width={1200}
              height={800}
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

