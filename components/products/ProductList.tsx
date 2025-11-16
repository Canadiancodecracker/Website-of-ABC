import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductListProps } from '@/lib/types/components';

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.slug}
          href={`/products/${product.slug}`}
          className="card group"
        >
          <div className="relative h-48 rounded-lg overflow-hidden mb-4">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 className="card-title">{product.name}</h3>
          {product.chineseName && (
            <p className="text-sm text-gray-500 mb-2">{product.chineseName}</p>
          )}
          <p className="card-desc">{product.shortDescription}</p>
          <span className="text-sm font-semibold text-brand-blue mt-auto">
            Learn More →
          </span>
        </Link>
      ))}
    </div>
  );
};

