import React from 'react';

interface SkeletonLoaderProps {
  variant?: 'card' | 'profile' | 'project' | 'blog' | 'skill';
  className?: string;
}

export const SkeletonLoader = ({ variant = 'card', className = '' }: SkeletonLoaderProps) => {
  const baseClasses = "animate-pulse";
  const shimmerColor = '#3b82f610';
  
  const renderSkeleton = () => {
    switch (variant) {
      case 'profile':
        return (
          <div className="flex flex-col items-center space-y-4">
            {/* Profile image skeleton */}
            <div 
              className="w-32 h-32 rounded-full"
              style={{ backgroundColor: shimmerColor }}
            />
            {/* Name skeleton */}
            <div 
              className="h-8 w-48 rounded"
              style={{ backgroundColor: shimmerColor }}
            />
            {/* Role skeleton */}
            <div 
              className="h-6 w-32 rounded"
              style={{ backgroundColor: shimmerColor }}
            />
            {/* Description skeleton */}
            <div className="space-y-2 w-full max-w-md">
              <div 
                className="h-4 w-full rounded"
                style={{ backgroundColor: shimmerColor }}
              />
              <div 
                className="h-4 w-3/4 rounded"
                style={{ backgroundColor: shimmerColor }}
              />
            </div>
          </div>
        );

      case 'project':
        return (
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            {/* Project image skeleton */}
            <div 
              className="h-48 rounded-lg"
              style={{ backgroundColor: shimmerColor }}
            />
            {/* Title and status skeleton */}
            <div className="flex justify-between items-start">
              <div 
                className="h-6 w-3/4 rounded"
                style={{ backgroundColor: shimmerColor }}
              />
              <div 
                className="h-5 w-16 rounded-full"
                style={{ backgroundColor: shimmerColor }}
              />
            </div>
            {/* Description skeleton */}
            <div className="space-y-2">
              <div 
                className="h-4 w-full rounded"
                style={{ backgroundColor: shimmerColor }}
              />
              <div 
                className="h-4 w-2/3 rounded"
                style={{ backgroundColor: shimmerColor }}
              />
            </div>
            {/* Technologies skeleton */}
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="h-6 w-16 rounded"
                  style={{ backgroundColor: shimmerColor }}
                />
              ))}
            </div>
            {/* Action buttons skeleton */}
            <div className="flex space-x-4 pt-4">
              <div 
                className="h-8 w-16 rounded"
                style={{ backgroundColor: shimmerColor }}
              />
              <div 
                className="h-8 w-20 rounded"
                style={{ backgroundColor: shimmerColor }}
              />
            </div>
          </div>
        );

      case 'blog':
        return (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
            {/* Category and meta skeleton */}
            <div className="flex justify-between items-center">
              <div 
                className="h-6 w-20 rounded-full"
                style={{ backgroundColor: shimmerColor }}
              />
              <div 
                className="h-4 w-24 rounded"
                style={{ backgroundColor: shimmerColor }}
              />
            </div>
            {/* Title skeleton */}
            <div 
              className="h-6 w-3/4 rounded"
              style={{ backgroundColor: shimmerColor }}
            />
            {/* Content skeleton */}
            <div className="space-y-2">
              <div 
                className="h-4 w-full rounded"
                style={{ backgroundColor: shimmerColor }}
              />
              <div 
                className="h-4 w-full rounded"
                style={{ backgroundColor: shimmerColor }}
              />
              <div 
                className="h-4 w-1/2 rounded"
                style={{ backgroundColor: shimmerColor }}
              />
            </div>
            {/* Read more skeleton */}
            <div 
              className="h-5 w-24 rounded"
              style={{ backgroundColor: shimmerColor }}
            />
          </div>
        );

      case 'skill':
        return (
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            {/* Skill category title skeleton */}
            <div 
              className="h-6 w-32 rounded"
              style={{ backgroundColor: shimmerColor }}
            />
            {/* Skills list skeleton */}
            <div className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex justify-between items-center">
                  <div 
                    className="h-4 w-20 rounded"
                    style={{ backgroundColor: shimmerColor }}
                  />
                  <div 
                    className="h-2 w-20 rounded-full"
                    style={{ backgroundColor: shimmerColor }}
                  />
                </div>
              ))}
            </div>
          </div>
        );

      default: // card variant
        return (
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            <div 
              className="h-6 w-3/4 rounded"
              style={{ backgroundColor: shimmerColor }}
            />
            <div className="space-y-2">
              <div 
                className="h-4 w-full rounded"
                style={{ backgroundColor: shimmerColor }}
              />
              <div 
                className="h-4 w-2/3 rounded"
                style={{ backgroundColor: shimmerColor }}
              />
            </div>
            <div 
              className="h-8 w-24 rounded"
              style={{ backgroundColor: shimmerColor }}
            />
          </div>
        );
    }
  };

  return (
    <div className={`${baseClasses} ${className}`}>
      {renderSkeleton()}
    </div>
  );
};

// Grid skeleton for loading multiple items
export const SkeletonGrid = ({ 
  count = 6, 
  variant = 'card',
  className = '' 
}: { 
  count?: number;
  variant?: SkeletonLoaderProps['variant'];
  className?: string;
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <SkeletonLoader key={i} variant={variant} />
      ))}
    </div>
  );
};

export default SkeletonLoader;