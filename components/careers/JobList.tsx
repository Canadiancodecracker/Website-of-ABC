import React from 'react';
import Link from 'next/link';
import { JobListProps } from '@/lib/types/components';

export const JobList: React.FC<JobListProps> = ({ jobs }) => {
  return (
    <div className="space-y-6">
      {jobs.map((job, index) => (
        <Link
          key={index}
          href={job.href}
          className="card group block"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1">
              <h3 className="card-title group-hover:text-brand-blue transition-colors">
                {job.title}
              </h3>
              <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
                <span>{job.location}</span>
                <span>•</span>
                <span>{job.type}</span>
              </div>
              <p className="card-desc mt-2 line-clamp-2">{job.description}</p>
            </div>
            <div className="text-brand-blue font-semibold">
              View Details →
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

