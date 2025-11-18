import React from 'react';
import Link from 'next/link';
import { ButtonProps } from '@/lib/types/components';

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  href,
  onClick,
}) => {
  const baseClasses = 'btn-primary';
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    outline: 'btn-secondary border-2',
  };

  const className = variantClasses[variant] || baseClasses;

  if (href) {
    return (
      <Link href={href} className={className}>
        {label}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {label}
    </button>
  );
};

