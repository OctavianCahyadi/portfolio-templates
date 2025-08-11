import Link from 'next/link';
import { Card } from '../components/Card';
import { Layout } from '../components/Layout';
import { PROFILE_DATA } from '@/lib/constants';
import { Calendar, MapPin, GraduationCap, Award, ArrowLeft } from 'lucide-react';

interface AboutPageData {
  name: string;
  role: string;
  description: string;
  location?: string;
  profileImage?: string;
  email?: string;
  website?: string;
  extendedDescription?: string;
  education?: Array<{
    degree: string;
    university: string;
    graduationDate: string;
    gpa?: string;
    location: string;
    description?: string;
  }>;
  interests?: Array<{
    title: string;
    description: string;
  }>;
  metaTitle?: string;
  metaDescription?: string;
  showExtendedInfo?: boolean;
}

interface AboutPageProps {
  aboutData: AboutPageData;
}

export const AboutPage = ({ aboutData }: AboutPageProps) => {
  return (
    <Layout>
      <div className="py-12">
        {/* Header */}
        <div className="mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  I'm <span className="font-semibold text-gray-900">{aboutData.name}</span>, a {aboutData.role.toLowerCase()}.
                </p>
                <p>{aboutData.description}</p>
                {aboutData.location && (
                  <p>
                    Based in <span className="text-blue-600 font-medium">{aboutData.location}</span>.
                  </p>
                )}
                {aboutData.extendedDescription && (
                  <p>{aboutData.extendedDescription}</p>
                )}
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img 
                  src={aboutData.profileImage || "/profile.png"}
                  alt={`${aboutData.name} - ${aboutData.role}`}
                  className="w-64 h-64 rounded-2xl object-cover shadow-lg"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Section */}
        {aboutData.education && aboutData.education.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
            <div className="space-y-6">
              {aboutData.education.map((edu, index) => (
                <Card key={index}>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium text-lg">{edu.university}</p>
                      <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mt-3">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>Graduated {edu.graduationDate}</span>
                        </div>
                        {edu.gpa && (
                          <div className="flex items-center space-x-2">
                            <Award className="w-4 h-4" />
                            <span>CGPA: {edu.gpa}</span>
                          </div>
                        )}
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      {edu.description && (
                        <p className="text-gray-600 mt-4 leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Programming Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {PROFILE_DATA.skills.languages.map((lang) => (
                      <span key={lang} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Frameworks & APIs</h3>
                  <div className="flex flex-wrap gap-3">
                    {PROFILE_DATA.skills.frameworks.map((framework) => (
                      <span key={framework} className="px-4 py-2 bg-purple-50 text-purple-700 rounded-lg text-sm font-medium">
                        {framework}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
            
            <Card>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {PROFILE_DATA.skills.tools.map((tool) => (
                      <span key={tool} className="px-4 py-2 bg-green-50 text-green-700 rounded-lg text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Databases</h3>
                  <div className="flex flex-wrap gap-3">
                    {PROFILE_DATA.skills.databases.map((db) => (
                      <span key={db} className="px-4 py-2 bg-orange-50 text-orange-700 rounded-lg text-sm font-medium">
                        {db}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Interests Section */}
        {aboutData.interests && aboutData.interests.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Personal Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aboutData.interests.map((interest, index) => (
                <Card key={index}>
                  <h3 className="font-semibold text-gray-900 text-lg mb-3">{interest.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {interest.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Ready to collaborate?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                I'm always open to discussing interesting projects, sharing knowledge, 
                or exploring new opportunities in backend development and DevOps.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  View My Projects
                </Link>
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