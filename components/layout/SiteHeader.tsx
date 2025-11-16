'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { SiteHeaderProps } from '@/lib/types/components';

export const SiteHeader: React.FC<SiteHeaderProps> = ({
  navItems,
  locale,
  onLocaleChange,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: 'en' | 'zh') => {
    if (onLocaleChange) {
      onLocaleChange(newLocale);
    }
    // Update URL to new locale
    const pathWithoutLocale = pathname.replace(/^\/(en|zh)/, '') || '/';
    router.push(`/${newLocale}${pathWithoutLocale}`);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <Image
              src="/assets/images/abc-logo.png"
              alt="ABC Chemical Logo"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
            <span className="text-lg sm:text-xl font-extrabold tracking-tight">
              ABC Chemical
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-brand-blue transition"
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-2 h-6 w-px bg-gray-300"></div>
            <div
              className="inline-flex rounded-lg border border-gray-300 overflow-hidden"
              role="group"
              aria-label="Language toggle"
            >
              <button
                onClick={() => handleLocaleChange('en')}
                className={`lang-btn ${locale === 'en' ? 'lang-active' : ''}`}
                aria-pressed={locale === 'en'}
              >
                EN
              </button>
              <button
                onClick={() => handleLocaleChange('zh')}
                className={`lang-btn ${locale === 'zh' ? 'lang-active' : ''}`}
                aria-pressed={locale === 'zh'}
              >
                中
              </button>
            </div>
          </nav>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-brand-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            aria-label="Open main menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 grid gap-1 text-sm font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => handleLocaleChange('en')}
                  className={`lang-btn flex-1 ${locale === 'en' ? 'lang-active' : ''}`}
                >
                  EN
                </button>
                <button
                  onClick={() => handleLocaleChange('zh')}
                  className={`lang-btn flex-1 ${locale === 'zh' ? 'lang-active' : ''}`}
                >
                  中
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

