import React from 'react';
import { SectionHeaderProps } from '@/lib/types/components';

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'left',
}) => {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="h-1 w-12 bg-gradient-brand rounded-full"></div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-brand bg-clip-text text-transparent">
          {title}
        </h2>
      </div>
      {subtitle && (
        <p className={`mt-4 text-lg text-gray-700 max-w-3xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

