import React from 'react';
import { Layout } from '../components/Layout';

interface Profile {
  name: string;
  role: string;
  description: string;
  extendedDescription?: string;
  profileImage?: string;
  email?: string;
  website?: string;
}

interface SocialLink {
  id: string;
  name: string;
  label: string;
  url: string;
  enabled: boolean;
}

interface SkillCategory {
  name: string;
  displayName: string;
  skills: string[];
}

interface HomePageProps {
  landingPageData: {
    profile: Profile;
    socialLinks: SocialLink[];
    skillCategories: SkillCategory[];
    navigation: any[];
  };
}

export const HomePage = ({ landingPageData }: HomePageProps) => {
  // Extract data from landingPageData structure
  const profile = landingPageData?.profile || {};
  const socialLinks = landingPageData?.socialLinks || [];
  const skillCategories = landingPageData?.skillCategories || [];
  const navigation = landingPageData?.navigation || [];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {profile.profileImage && (
              <div className="flex justify-center">
                <img
                  src={profile.profileImage}
                  alt={profile.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
            )}
            
            <div>
              <h1 
                className="text-5xl md:text-7xl font-bold mb-4"
                style={{ color: '#3b82f6' }}
              >
                {profile.name}
              </h1>
              <p 
                className="text-xl md:text-2xl mb-6"
                style={{ color: '#64748b' }}
              >
                {profile.role}
              </p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {profile.description}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  style={{ borderColor: '#f59e0b' }}
                >
                  <span className="sr-only">{link.label}</span>
                  {/* Add icon component here */}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-bold mb-4"
              style={{ color: '#3b82f6' }}
            >
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600">
              Technologies I work with
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: '#3b82f6' }}
                >
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.skills && category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex justify-between items-center">
                      <span className="text-gray-700">{skill}</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-300"
                          style={{
                            width: '85%',
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
      </section>
    </Layout>
  );
};

export default HomePage;