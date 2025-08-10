import React, { useState } from 'react';
import { Layout } from './Layout';
import { TemplatePageProps } from '../types';

export const ProjectsPage: React.FC<TemplatePageProps> = ({
  profileData,
  skillCategories,
  socialLinks,
  projects,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  
  // Get unique technologies for filtering
  const allTechnologies = Array.from(
    new Set(projects.flatMap(p => p.technologies))
  ).sort();

  // Filter projects
  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.technologies.includes(selectedFilter));

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 
              className="text-5xl font-bold mb-6"
              style={{ color: '#3b82f6' }}
            >
              My Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of work that showcases my skills and experience
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedFilter === 'all'
                  ? 'text-white shadow-lg'
                  : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
              }`}
              style={selectedFilter === 'all' ? { backgroundColor: '#3b82f6' } : {}}
            >
              All ({projects.length})
            </button>
            {allTechnologies.slice(0, 6).map((tech) => {
              const count = projects.filter(p => p.technologies.includes(tech)).length;
              return (
                <button
                  key={tech}
                  onClick={() => setSelectedFilter(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedFilter === tech
                      ? 'text-white shadow-lg'
                      : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                  }`}
                  style={selectedFilter === tech ? { backgroundColor: '#3b82f6' } : {}}
                >
                  {tech} ({count})
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                {/* Project Image Placeholder */}
                <div 
                  className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${project.featured ? '#3b82f620' : '#64748b20'} 0%, ${project.featured ? '#f59e0b20' : '#3b82f620'} 100%)`
                  }}
                >
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-white"
                      style={{ backgroundColor: '#3b82f6' }}
                    >
                      {project.title.charAt(0)}
                    </div>
                    {project.featured && (
                      <span 
                        className="px-2 py-1 text-xs font-medium rounded-full text-white"
                        style={{ backgroundColor: '#f59e0b' }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 
                      className="text-xl font-bold group-hover:text-blue-600 transition-colors"
                      style={{ color: '#3b82f6' }}
                    >
                      {project.title}
                    </h3>
                    <span 
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        project.status === 'COMPLETED' ? 'bg-green-100 text-green-800' :
                        project.status === 'IN_PROGRESS' ? 'bg-blue-100 text-blue-800' :
                        project.status === 'PLANNING' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {project.status.replace('_', ' ')}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium rounded"
                        style={{ 
                          backgroundColor: '#f59e0b20',
                          color: '#f59e0b'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs font-medium rounded bg-gray-100 text-gray-600">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.highlights.slice(0, 2).map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <span 
                              className="inline-block w-1.5 h-1.5 rounded-full mt-2 mr-2"
                              style={{ backgroundColor: '#f59e0b' }}
                            />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Links */}
                  <div className="flex space-x-4 pt-4 border-t border-gray-100">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:underline transition-colors"
                        style={{ color: '#3b82f6' }}
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found for the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;