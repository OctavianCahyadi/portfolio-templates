'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  variant?: 'default' | 'terminal' | 'minimal';
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6', 
  lg: 'w-8 h-8',
};

const textSizes = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

export const LoadingSpinner = ({ 
  size = 'md',
  text = 'Loading...',
  variant = 'default',
  className = ''
}: LoadingSpinnerProps) => {
  
  if (variant === 'minimal') {
    return (
      <div className={`inline-flex items-center space-x-2 ${className}`}>
        <div 
          className={`border-2 rounded-full animate-spin ${sizeClasses[size]}`}
          style={{ 
            borderColor: '#e2e8f0',
            borderTopColor: '#3b82f6'
          }}
        ></div>
      </div>
    );
  }

  if (variant === 'terminal') {
    return (
      <div className={`inline-flex items-center space-x-2 ${className}`} style={{ color: '#64748b' }}>
        <div className={`${sizeClasses[size]} animate-pulse`}>
          {/* Terminal icon placeholder */}
          <div className="w-full h-full border rounded" style={{ borderColor: '#f59e0b' }}></div>
        </div>
        <span className={`font-mono ${textSizes[size]}`}>$ {text}</span>
        <div className="w-2 h-5 animate-pulse" style={{ backgroundColor: '#f59e0b' }}></div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center space-x-2 ${className}`} style={{ color: '#64748b' }}>
      <div 
        className={`border-2 rounded-full animate-spin ${sizeClasses[size]}`}
        style={{ 
          borderColor: '#e2e8f0',
          borderTopColor: '#3b82f6'
        }}
      ></div>
      <span className={`font-mono ${textSizes[size]}`}>{text}</span>
    </div>
  );
};

export const LoadingSkeleton = ({ 
  width = 'w-full',
  height = 'h-4',
  className = ''
}: {
  width?: string;
  height?: string;
  className?: string;
}) => {
  return (
    <div 
      className={`rounded animate-pulse ${width} ${height} ${className}`}
      style={{ backgroundColor: '#f1f5f9' }}
    ></div>
  );
};

export const LoadingCard = () => {
  return (
    <div 
      className="rounded-lg p-6 space-y-4 border"
      style={{ 
        backgroundColor: '#ffffff',
        borderColor: '#e2e8f0'
      }}
    >
      <div className="flex items-start space-x-2">
        <LoadingSkeleton width="w-5" height="h-5" className="mt-1" />
        <div className="flex-1 space-y-3">
          <div className="space-y-2">
            <LoadingSkeleton width="w-48" />
            <LoadingSkeleton width="w-32" />
          </div>
          <LoadingSkeleton width="w-3/4" height="h-6" />
          <div className="space-y-1">
            <LoadingSkeleton />
            <LoadingSkeleton width="w-5/6" />
          </div>
          <LoadingSkeleton width="w-24" height="h-6" className="rounded-full" />
          <LoadingSkeleton width="w-16" />
        </div>
      </div>
    </div>
  );
};

// Template-themed loading component
export const TemplateLoader = ({
  title = "loading.sh",
  command = "Loading...",
  children
}: {
  title?: string;
  command?: string;
  children?: React.ReactNode;
}) => {
  if (!false) {
    // Modern/Light theme loader
    return (
      <div className="bg-white rounded-2xl border shadow-lg p-8 max-w-md w-full" style={{ borderColor: '#64748b' }}>
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="flex space-x-1">
              <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: '#3b82f6' }}></div>
              <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: '#3b82f6', animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 rounded-full animate-bounce" style={{ backgroundColor: '#3b82f6', animationDelay: '0.2s' }}></div>
            </div>
          </div>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold" style={{ color: '#3b82f6' }}>Loading Portfolio</h2>
            <p className="text-sm" style={{ color: '#64748b' }}>Preparing your professional experience...</p>
          </div>
          {children}
        </div>
      </div>
    );
  }

  // Terminal theme loader
  return (
    <div 
      className="backdrop-blur-sm rounded-lg border shadow-2xl"
      style={{ 
        backgroundColor: '#3b82f6cc',
        borderColor: '#64748b'
      }}
    >
      {/* Terminal Header */}
      <div 
        className="flex items-center justify-between px-4 py-2 border-b rounded-t-lg"
        style={{ 
          backgroundColor: '#64748b',
          borderColor: '#f59e0b'
        }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-sm font-mono" style={{ color: '#f59e0b' }}>{title}</div>
        <div className="w-16"></div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm">
        <div className="flex items-center space-x-2 mb-4" style={{ color: '#f59e0b' }}>
          <span style={{ color: '#f59e0b' }}>user@portfolio</span>
          <span>:</span>
          <span style={{ color: '#3b82f6' }}>~</span>
          <span>$</span>
          <span>{command}</span>
          <div className="w-2 h-4 animate-pulse ml-1" style={{ backgroundColor: '#f59e0b' }}></div>
        </div>
        
        {children || (
          <div className="space-y-2">
            <LoadingSkeleton />
            <LoadingSkeleton width="w-3/4" />
            <LoadingSkeleton width="w-1/2" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;