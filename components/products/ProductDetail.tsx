import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductDetailProps } from '@/lib/types/components';

export const ProductDetail: React.FC<ProductDetailProps> = ({
  name,
  chineseName,
  cas,
  formula,
  heroImage,
  applicationSummary,
  specs,
  grades,
  packaging,
  downloads,
}) => {
  return (
    <div className="py-8">
      {/* Hero Section */}
      {heroImage && (
        <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
          <Image
            src={heroImage}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">{name}</h1>
        {chineseName && (
          <p className="text-xl text-gray-600 mb-4">{chineseName}</p>
        )}
        <div className="flex flex-wrap gap-4 text-sm">
          <div>
            <span className="font-semibold">CAS:</span> {cas}
          </div>
          <div>
            <span className="font-semibold">Formula:</span> {formula}
          </div>
        </div>
      </div>

      {/* Application Summary */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Applications</h2>
        <p className="text-gray-700 leading-relaxed">{applicationSummary}</p>
      </div>

      {/* Specifications */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Specifications</h2>
        <div className="card">
          <table className="w-full">
            <tbody>
              {specs.map((spec, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="py-2 font-semibold">{spec.key}</td>
                  <td className="py-2 text-gray-700">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grades */}
      {grades && grades.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Grades</h2>
          <div className="space-y-6">
            {grades.map((grade, index) => (
              <div key={index} className="card">
                <h3 className="card-title mb-2">
                  {grade.gradeName} - {grade.purity} Purity
                </h3>
                <table className="w-full mt-4">
                  <tbody>
                    {grade.specs.map((spec, specIndex) => (
                      <tr key={specIndex} className="border-b border-gray-200">
                        <td className="py-2 font-semibold">{spec.key}</td>
                        <td className="py-2 text-gray-700">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Packaging */}
      {packaging && packaging.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Packaging</h2>
          <div className="flex flex-wrap gap-2">
            {packaging.map((pkg, index) => (
              <span key={index} className="badge">
                {pkg}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Downloads */}
      {downloads && downloads.length > 0 && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Downloads</h2>
          <div className="space-y-2">
            {downloads.map((download, index) => (
              <a
                key={index}
                href={download.file}
                download
                className="res-card block"
              >
                <div className="res-icon"></div>
                <div>
                  <div className="res-title">{download.label}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

