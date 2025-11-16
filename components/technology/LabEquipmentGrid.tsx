import React from 'react';
import Image from 'next/image';
import { LabEquipmentGridProps } from '@/lib/types/components';

export const LabEquipmentGrid: React.FC<LabEquipmentGridProps> = ({
  items,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <div key={index} className="card">
          {item.image && (
            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <h3 className="card-title">{item.name}</h3>
          {item.description && (
            <p className="card-desc">{item.description}</p>
          )}
        </div>
      ))}
    </div>
  );
};

