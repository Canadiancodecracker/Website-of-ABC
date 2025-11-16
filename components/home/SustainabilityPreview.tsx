import React from 'react';
import { SustainabilityPreviewProps } from '@/lib/types/components';
import { Button } from '@/components/ui/Button';

export const SustainabilityPreview: React.FC<SustainabilityPreviewProps> = ({
  title,
  description,
  highlights,
  href,
}) => {
  return (
    <div className="card">
      <h3 className="card-title text-xl mb-3">{title}</h3>
      <p className="card-desc mb-4">{description}</p>
      <ul className="space-y-3 mb-6">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start gap-3">
            {highlight.icon && (
              <span className="text-brand-green text-xl">{highlight.icon}</span>
            )}
            <div>
              <h4 className="font-semibold text-sm">{highlight.title}</h4>
              <p className="text-sm text-gray-600">{highlight.text}</p>
            </div>
          </li>
        ))}
      </ul>
      <Button label="Learn More" href={href} variant="primary" />
    </div>
  );
};

