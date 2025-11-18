import React from 'react';
import { ProcessFlowDiagramProps } from '@/lib/types/components';

export const ProcessFlowDiagram: React.FC<ProcessFlowDiagramProps> = ({
  steps,
}) => {
  return (
    <div className="py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex-1 text-center">
              {step.icon && (
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-brand-blue/10 flex items-center justify-center">
                  <span className="text-2xl">{step.icon}</span>
                </div>
              )}
              <div className="mb-2">
                <span className="inline-block px-3 py-1 bg-brand-blue text-white rounded-full text-sm font-semibold">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              {step.description && (
                <p className="text-sm text-gray-600">{step.description}</p>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className="hidden md:block w-8 h-0.5 bg-gray-300 relative">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-brand-blue border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

