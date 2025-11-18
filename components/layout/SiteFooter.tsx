import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SiteFooterProps } from '@/lib/types/components';

export const SiteFooter: React.FC<SiteFooterProps> = ({
  companyName,
  address,
  email,
  phone,
  quickLinks,
  socials,
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-white border-t border-gray-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/assets/images/abc-logo.png"
              alt="ABC Chemical Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <span className="font-bold text-lg bg-gradient-brand bg-clip-text text-transparent">{companyName}</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-blue"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <div className="text-xs text-gray-500">
              © {currentYear} {companyName}. All rights reserved.
            </div>
            <Image
              src="/assets/images/abc-chemical-qr-code.png"
              alt="Scan to visit"
              width={48}
              height={48}
              className="w-12 h-12"
            />
          </div>
        </div>
        {socials && socials.length > 0 && (
          <div className="mt-6 flex justify-center gap-4">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-brand-blue transition"
              >
                <span className="sr-only">{social.icon}</span>
              </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
};

