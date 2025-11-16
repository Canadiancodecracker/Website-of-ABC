import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { NewsListProps } from '@/lib/types/components';

export const NewsList: React.FC<NewsListProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className="card group"
        >
          {item.thumbnail && (
            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          )}
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            {item.date}
          </div>
          <h3 className="card-title group-hover:text-brand-blue transition-colors">
            {item.title}
          </h3>
          <p className="card-desc line-clamp-3">{item.excerpt}</p>
          <span className="text-sm font-semibold text-brand-blue mt-auto">
            Read More →
          </span>
        </Link>
      ))}
    </div>
  );
};

