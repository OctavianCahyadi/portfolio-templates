import React from 'react';
import { Layout } from '../components/Layout';
import { TemplatePageProps } from '../types';

export const AboutPage: React.FC<TemplatePageProps> = ({
  profileData,
  skillCategories,
  socialLinks,
  projects,
}) => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 
              className="text-5xl font-bold mb-6"
              style={{ color: '#3b82f6' }}
            >
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {profileData.description}
            </p>
          </div>

          {/* Extended Description */}
          {profileData.extendedDescription && (
            <div className="prose prose-lg mx-auto mb-16">
              <div className="text-gray-700 leading-relaxed">
                {profileData.extendedDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Skills Detail */}
          <div className="mb-16">
            <h2 
              className="text-3xl font-bold text-center mb-12"
              style={{ color: '#3b82f6' }}
            >
              Skills & Expertise
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category) => (
                <div key={category.id} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 
                    className="text-xl font-semibold mb-6"
                    style={{ color: '#3b82f6' }}
                  >
                    {category.name}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.id}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-gray-800">{skill.name}</span>
                          <span className="text-sm text-gray-500">
                            {skill.years && `${skill.years} years`}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div
                            className="h-3 rounded-full transition-all duration-500"
                            style={{
                              width: `${skill.level}%`,
                              backgroundColor: '#f59e0b'
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 
                className="text-2xl font-bold mb-4"
                style={{ color: '#3b82f6' }}
              >
                Let's Work Together
              </h3>
              <p className="text-gray-600 mb-6">
                I'm always interested in new opportunities and challenges.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: '#3b82f6' }}
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;