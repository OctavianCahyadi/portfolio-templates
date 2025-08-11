import React from 'react';
import Link from 'next/link';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { Layout } from '../components/Layout';

interface HomePageProps {
  landingPageData: any;
}

export const HomePage = ({ landingPageData }: HomePageProps) => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero profile={landingPageData.profile} />

      {/* Skills Section */}
      {landingPageData.skillCategories.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Skills & Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {landingPageData.skillCategories.map((category: any) => (
                <Card key={category.name}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {category.displayName}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill: string) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation Section */}
      {landingPageData.navigation.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Explore
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {landingPageData.navigation.map((item: any) => (
                <Link key={item.path} href={item.path}>
                  <Card className="text-center cursor-pointer">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 capitalize">
                      {item.label}
                    </h3>
                    <p className="text-gray-600">
                      Learn more about my {item.label}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Social Links */}
      {landingPageData.socialLinks.length > 0 && (
        <section className="py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Let's Connect
            </h2>
            <div className="flex justify-center space-x-6">
              {landingPageData.socialLinks.map((link: any) => (
                <a
                  key={link.name}
                  href={link.name === 'email' ? `mailto:${link.url}` : link.url}
                  target={link.name !== 'email' ? '_blank' : undefined}
                  rel={link.name !== 'email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                >
                  <span className="font-medium text-gray-900">
                    {link.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};