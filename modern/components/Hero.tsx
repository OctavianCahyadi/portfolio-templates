import React from 'react';
import Link from 'next/link';

interface HeroProps {
  profile: {
    name: string;
    role: string; 
    description: string;
  };
}

export const Hero = ({ profile }: HeroProps) => {
  return (
    <section className="text-center py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          {profile.name}
        </h1>
        <h2 className="text-2xl text-blue-600 mb-6 font-medium">
          {profile.role}
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          {profile.description}
        </p>
        <div className="flex justify-center space-x-4">
          <Link 
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            View My Work
          </Link>
          <Link 
            href="/contact"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
};