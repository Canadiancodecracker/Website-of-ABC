import React from 'react';
import Link from 'next/link';
import { TechnologyQualityPreviewProps } from '@/lib/types/components';
import { Button } from '@/components/ui/Button';

export const TechnologyQualityPreview: React.FC<TechnologyQualityPreviewProps> = ({
  title,
  description,
  features,
  href,
}) => {
  return (
    <div className="card">
      <h3 className="card-title text-xl mb-3">{title}</h3>
      <p className="card-desc mb-4">{description}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            {feature.icon && (
              <span className="text-brand-blue text-xl">{feature.icon}</span>
            )}
            <div>
              <h4 className="font-semibold text-sm">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button label="Learn More" href={href} variant="primary" />
    </div>
  );
};

