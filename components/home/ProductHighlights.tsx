import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductHighlightsProps } from '@/lib/types/components';

export const ProductHighlights: React.FC<ProductHighlightsProps> = ({
  products,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Link
          key={index}
          href={product.href}
          className="card group"
        >
          <div className="icon bg-brand-blue/10">
            <Image
              src={product.image}
              alt={product.name}
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </div>
          <h3 className="card-title">{product.name}</h3>
          <p className="card-desc">{product.description}</p>
        </Link>
      ))}
    </div>
  );
};

