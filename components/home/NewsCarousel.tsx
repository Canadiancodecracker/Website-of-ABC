'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NewsCarouselProps } from '@/lib/types/components';

export const NewsCarousel: React.FC<NewsCarouselProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Duplicate items for infinite scroll
    const duplicatedItems = [...items, ...items];
    
    // Set up animation
    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= container.scrollHeight / 2) {
        scrollPosition = 0;
      }
      container.scrollTop = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [items]);

  return (
    <div className="relative overflow-hidden bg-gradient-brand rounded-3xl p-10 shadow-brand-xl ring-4 ring-brand-blue/10">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-1 w-12 bg-white/30 rounded-full"></div>
        <h2 className="text-3xl font-bold text-white">News & Updates</h2>
      </div>
      <div
        ref={containerRef}
        className="max-h-96 overflow-y-auto space-y-4 scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {[...items, ...items].map((item, index) => (
          <Link
            key={`${item.href}-${index}`}
            href={item.href}
            className="block news-item"
          >
            <div className="news-date">{item.date}</div>
            <h3 className="news-title">{item.title}</h3>
            <p className="news-summary">{item.excerpt}</p>
            <span className="news-read-more">Read More →</span>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

