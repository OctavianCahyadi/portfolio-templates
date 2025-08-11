import React from 'react';
import { Layout } from '../components/Layout';

interface HomePageProps {
  landingPageData: any;
}

export const HomePage = ({ landingPageData }: HomePageProps) => {
  const featuredProjects = landingPageData.projects?.filter((p: any) => p.featured)?.slice(0, 3) || [];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {profileData.avatar && (
              <div className="flex justify-center">
                <img
                  src={profileData.avatar}
                  alt={profileData.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
                />
              </div>
            )}
            
            <div>
              <h1 
                className="text-5xl md:text-7xl font-bold mb-4"
                style={{ color: '#3b82f6' }}
              >
                {profileData.name}
              </h1>
              <p 
                className="text-xl md:text-2xl mb-6"
                style={{ color: '#64748b' }}
              >
                {profileData.role}
              </p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {profileData.description}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks.filter(link => link.enabled).map((link) => (
                <a
                  key={link.id}
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

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl font-bold mb-4"
              style={{ color: '#3b82f6' }}
            >
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Some of my recent work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <h3 
                    className="text-xl font-semibold mb-3"
                    style={{ color: '#3b82f6' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm rounded-full"
                        style={{ 
                          backgroundColor: '#f59e0b20',
                          color: '#f59e0b'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline transition-colors"
                        style={{ color: '#3b82f6' }}
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
            {skillCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-lg shadow-lg p-6">
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{ color: '#3b82f6' }}
                >
                  {category.name}
                </h3>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.id} className="flex justify-between items-center">
                      <span className="text-gray-700">{skill.name}</span>
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-300"
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
      </section>
    </Layout>
  );
};

export default HomePage;