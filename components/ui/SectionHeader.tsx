import React from 'react';
import { SectionHeaderProps } from '@/lib/types/components';

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'left',
}) => {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 text-gray-700 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

