import React from 'react';
import { LoadingSpinner, TemplateLoader } from '../components/Loader';

export default function Loading() {
  
  // Modern/Professional theme loading screen
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#f8fafc' }}>
      <TemplateLoader title="test-template8" command="Loading...">
        <div className="space-y-4">
          <div className="animate-pulse space-y-3">
            <div className="h-2 rounded" style={{ backgroundColor: '#3b82f630' }}></div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 rounded col-span-2" style={{ backgroundColor: '#3b82f630' }}></div>
              <div className="h-2 rounded col-span-1" style={{ backgroundColor: '#3b82f630' }}></div>
            </div>
            <div className="h-2 rounded" style={{ backgroundColor: '#3b82f630' }}></div>
          </div>
          
          <div className="text-center">
            <p className="text-sm" style={{ color: '#64748b' }}>
              Preparing your professional portfolio...
            </p>
          </div>
        </div>
      </TemplateLoader>
    </div>
  );
}