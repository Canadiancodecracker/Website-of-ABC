import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroSectionProps } from '@/lib/types/components';
import { Button } from '@/components/ui/Button';

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  backgroundImage,
  backgroundVideo,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-green-50/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,60,117,0.05),transparent_50%)]"></div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-20 sm:py-28 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-slide-up">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue bg-white/80 backdrop-blur-sm ring-2 ring-brand-blue/20 rounded-full px-4 py-2 shadow-lg">
              <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></span>
              Reliable • Scientific • Global
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-brand bg-clip-text text-transparent leading-tight">
              {title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                label={ctaPrimary.label}
                href={ctaPrimary.href}
                variant="primary"
              />
              {ctaSecondary && (
                <Button
                  label={ctaSecondary.label}
                  href={ctaSecondary.href}
                  variant="secondary"
                />
              )}
            </div>
          </div>
          <div className="lg:col-span-5 animate-float">
            <div className="relative h-64 sm:h-80 lg:h-[32rem] rounded-3xl bg-gradient-brand shadow-brand-xl overflow-hidden ring-4 ring-brand-blue/10">
              {backgroundVideo ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={backgroundImage}
                >
                  <source src={backgroundVideo} type="video/mp4" />
                </video>
              ) : backgroundImage ? (
                <Image
                  src={backgroundImage}
                  alt="Hero background"
                  fill
                  className="object-cover"
                />
              ) : (
                <svg
                  viewBox="0 0 600 600"
                  className="absolute inset-0 h-full w-full opacity-30"
                >
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#8bb6e5" />
                    </linearGradient>
                  </defs>
                  <g stroke="url(#g1)" strokeWidth="1.2">
                    <path d="M0 60 H600M0 120 H600M0 180 H600M0 240 H600M0 300 H600M0 360 H600M0 420 H600M0 480 H600M0 540 H600" />
                    <path d="M60 0 V600M120 0 V600M180 0 V600M240 0 V600M300 0 V600M360 0 V600M420 0 V600M480 0 V600M540 0 V600" />
                  </g>
                  <g fill="#ffffff" opacity="0.9">
                    <circle cx="120" cy="120" r="5" />
                    <circle cx="300" cy="200" r="6" />
                    <circle cx="420" cy="340" r="4" />
                    <circle cx="220" cy="420" r="5" />
                    <circle cx="520" cy="160" r="5" />
                  </g>
                  <g stroke="#ffffff" strokeWidth="2" opacity="0.9">
                    <line x1="120" y1="120" x2="300" y2="200" />
                    <line x1="300" y1="200" x2="420" y2="340" />
                    <line x1="300" y1="200" x2="220" y2="420" />
                    <line x1="520" y1="160" x2="420" y2="340" />
                  </g>
                </svg>
              )}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm text-brand-blue text-xs font-bold px-4 py-2 rounded-full ring-2 ring-brand-blue/30 shadow-lg">
                Calcium & Cyanamide Specialists
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

