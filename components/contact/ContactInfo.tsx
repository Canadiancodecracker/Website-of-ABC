import React from 'react';
import { ContactInfoProps } from '@/lib/types/components';

export const ContactInfo: React.FC<ContactInfoProps> = ({
  companyName,
  address,
  email,
  phone,
  mapEmbedUrl,
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">{companyName}</h3>
        <p className="text-sm text-gray-700 mb-4">{address}</p>
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-semibold">Email:</span>{' '}
            <a href={`mailto:${email}`} className="text-brand-blue hover:underline">
              {email}
            </a>
          </div>
          {phone && (
            <div>
              <span className="font-semibold">Phone:</span>{' '}
              <a href={`tel:${phone}`} className="text-brand-blue hover:underline">
                {phone}
              </a>
            </div>
          )}
        </div>
      </div>

      {mapEmbedUrl && (
        <div className="rounded-lg overflow-hidden border border-gray-200">
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      )}
    </div>
  );
};

