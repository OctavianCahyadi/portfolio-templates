import React from 'react';
import { Layout } from '../components/Layout';

interface HomePageProps {
  landingPageData: any;
}

export const HomePage = ({ landingPageData }: HomePageProps) => {
  const profile = landingPageData?.profile || {};
  const projects = landingPageData?.projects || [];
  const skillCategories = landingPageData?.skillCategories || [];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {profile.name || 'Your Name'}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {profile.role || 'Your Professional Role'}
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            {profile.description || 'Your professional description goes here.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/projects" 
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View Projects
            </a>
            <a 
              href="/contact" 
              className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {projects.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.slice(0, 3).map((project: any, index: number) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
                        <span key={techIndex} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.url && (
                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-medium hover:text-blue-700"
                    >
                      View Project →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Skills */}
      {skillCategories.length > 0 && (
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category: any, index: number) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {category.displayName || category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills?.map((skill: any, skillIndex: number) => (
                      <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {skill.name || skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default HomePage;