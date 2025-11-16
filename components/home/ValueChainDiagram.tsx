import React from 'react';
import { ValueChainDiagramProps } from '@/lib/types/components';

export const ValueChainDiagram: React.FC<ValueChainDiagramProps> = ({
  steps,
}) => {
  return (
    <div className="relative py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 text-center">
              {step.icon && (
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <span className="text-2xl">{step.icon}</span>
                </div>
              )}
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              {step.description && (
                <p className="text-sm text-gray-600">{step.description}</p>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block w-8 h-0.5 bg-gray-300">
                <div className="w-2 h-2 bg-brand-blue rounded-full -mt-1 ml-6"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

