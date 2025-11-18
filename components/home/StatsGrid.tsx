import React from 'react';
import { StatsGridProps } from '@/lib/types/components';

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="metric-card">
          <div className="metric">
            {stat.value}
            {stat.suffix && <span className="text-xl">{stat.suffix}</span>}
          </div>
          <div className="metric-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

