import React from 'react';
import { Layout } from '../components/Layout';

interface ProjectsPageProps {
  projects: any[];
}

export const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">My Projects</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;