import React from 'react';
import { QualitySystemOverviewProps } from '@/lib/types/components';

export const QualitySystemOverview: React.FC<QualitySystemOverviewProps> = ({
  title,
  description,
  items,
}) => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-8 max-w-3xl">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div key={index} className="card">
            {item.icon && (
              <div className="icon bg-brand-blue/10 mb-4">
                <span className="text-2xl">{item.icon}</span>
              </div>
            )}
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

