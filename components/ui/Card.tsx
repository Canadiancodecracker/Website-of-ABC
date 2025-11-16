import React from 'react';
import { CardProps } from '@/lib/types/components';

export const Card: React.FC<CardProps> = ({
  title,
  children,
  className = '',
}) => {
  return (
    <div className={`card ${className}`}>
      {title && <h3 className="card-title">{title}</h3>}
      {children}
    </div>
  );
};

