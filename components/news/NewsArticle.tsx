import React from 'react';
import Image from 'next/image';
import { NewsArticleProps } from '@/lib/types/components';

export const NewsArticle: React.FC<NewsArticleProps> = ({
  title,
  date,
  body,
  coverImage,
}) => {
  return (
    <article className="py-8 max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
          {date}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
      </div>

      {coverImage && (
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </article>
  );
};

