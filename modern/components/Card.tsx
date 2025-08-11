import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <div className={`
      bg-white rounded-xl border border-gray-200 shadow-sm p-6
      ${hover ? 'hover:shadow-lg hover:border-blue-200 transition-all duration-300' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};