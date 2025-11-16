import React from 'react';
import { EHSCommitmentProps } from '@/lib/types/components';

export const EHSCommitment: React.FC<EHSCommitmentProps> = ({
  title,
  paragraphs,
  icons,
}) => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="space-y-4 mb-8">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      {icons && icons.length > 0 && (
        <div className="flex flex-wrap gap-6">
          {icons.map((icon, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-2xl">{icon.icon}</span>
              <span className="text-sm font-semibold">{icon.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

