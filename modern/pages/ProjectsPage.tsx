import Link from 'next/link';
import { Card } from '../components/Card';
import { Layout } from '../components/Layout';
import { ArrowLeft, Github, ExternalLink, Calendar, Code, Star } from 'lucide-react';

interface ProjectsPageProps {
  projects: Array<{
    id: string;
    title: string;
    slug: string;
    description: string;
    technologies: string[];
    highlights: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    status: string;
    startDate: string;
    endDate?: string;
  }>;
}

export const ProjectsPage = ({ projects }: ProjectsPageProps) => {
  // Separate featured and regular projects
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <Layout>
      <div className="py-12">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A collection of data engineering and machine learning projects I've built to solve real-world problems.
            </p>
          </div>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center space-x-2 mb-8">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-900">Featured Projects</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured={true} />
              ))}
            </div>
          </section>
        )}

        {/* Regular Projects */}
        {regularProjects.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project) => (
                <ProjectCard key={project.id} project={project} featured={false} />
              ))}
            </div>
          </section>
        )}

        {/* Empty state */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <Code className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl text-gray-500 mb-2">No projects yet</h3>
            <p className="text-gray-400">Check back soon for new projects!</p>
          </div>
        )}

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Want to see more?</h3>
              <p className="text-gray-600">
                Check out my GitHub for more projects and open source contributions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View GitHub Profile</span>
                </a>
                <Link 
                  href="/contact"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    slug: string;
    description: string;
    technologies: string[];
    highlights: string[];
    githubUrl?: string;
    liveUrl?: string;
    featured: boolean;
    status: string;
    startDate: string;
    endDate?: string;
  };
  featured: boolean;
}

function ProjectCard({ project, featured }: ProjectCardProps) {
  const statusColors = {
    'completed': 'bg-green-100 text-green-800',
    'in-progress': 'bg-blue-100 text-blue-800', 
    'planning': 'bg-yellow-100 text-yellow-800',
    'archived': 'bg-gray-100 text-gray-800'
  };

  return (
    <Card className={featured ? 'lg:col-span-1' : ''}>
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
          <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[project.status as keyof typeof statusColors] || statusColors.planning}`}>
            {project.status.replace('-', ' ')}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{project.description}</p>

        {/* Highlights */}
        {project.highlights.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-900">Key Features:</h4>
            <ul className="space-y-1">
              {project.highlights.slice(0, 3).map((highlight, index) => (
                <li key={index} className="flex items-start space-x-2 text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((tech) => (
              <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                +{project.technologies.length - 6} more
              </span>
            )}
          </div>
        </div>

        {/* Date */}
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>
            {new Date(project.startDate).getFullYear()}
            {project.endDate && project.endDate !== project.startDate && 
              ` - ${new Date(project.endDate).getFullYear()}`
            }
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-4 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}