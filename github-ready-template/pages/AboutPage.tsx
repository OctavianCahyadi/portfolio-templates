import React from 'react';
import { Layout } from '../components/Layout';

interface AboutPageProps {
  profileData: any;
}

export const AboutPage = ({ profileData }: AboutPageProps) => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Me</h1>
        <div className="prose prose-lg mx-auto">
          <p>About page content goes here...</p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;