import Link from 'next/link';
import { Card } from '../components/Card';
import { Layout } from '../components/Layout';
import { Mail, Instagram, Linkedin, Github, MessageCircle, Globe, ArrowLeft, Clock, CheckCircle } from 'lucide-react';

interface ContactPageData {
  name: string;
  email?: string;
  website?: string;
  socialLinks: Array<{
    name: string;
    label: string;
    url: string;
    iconName: string;
  }>;
  title: string;
  subtitle?: string;
  interests: Array<{
    text: string;
    icon?: string;
  }>;
  currentFocus: Array<{
    text: string;
    status?: string;
  }>;
  responseTime?: string;
  responseNote?: string;
  closingMessage?: string;
  metaTitle?: string;
  metaDescription?: string;
}

interface ContactPageProps {
  contactData: ContactPageData;
}

export const ContactPage = ({ contactData }: ContactPageProps) => {
  // Map social link names to icons
  const iconMap: Record<string, any> = {
    email: Mail,
    linkedin: Linkedin,
    github: Github,
    instagram: Instagram,
    website: Globe,
    globe: Globe,
    mail: Mail
  };

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
          
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <MessageCircle className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{contactData.title}</h1>
            {contactData.subtitle && (
              <p className="text-xl text-gray-600 leading-relaxed">
                {contactData.subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Interests Section */}
          <Card>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Let's Discuss</h2>
              <p className="text-gray-600">
                I'm always interested in discussing:
              </p>
              <ul className="space-y-4">
                {contactData.interests.map((interest, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{interest.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          {/* Current Focus Section */}
          <Card>
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Current Focus</h2>
              <p className="text-gray-600">
                I'm currently working on:
              </p>
              <ul className="space-y-4">
                {contactData.currentFocus.map((focus, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{focus.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        {/* Social Links Section */}
        <Card className="mb-12">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect With Me</h2>
              <p className="text-gray-600">Choose your preferred platform</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactData.socialLinks.length > 0 ? (
                contactData.socialLinks.map((social, index) => {
                  const IconComponent = iconMap[social.iconName.toLowerCase()] || iconMap[social.name.toLowerCase()] || Globe;
                  const href = social.url.includes('@') && !social.url.includes('mailto:') ? `mailto:${social.url}` : social.url;
                  const isExternal = !social.url.includes('mailto:') && !social.url.includes(contactData.website || '');
                  
                  return (
                    <a
                      key={index}
                      href={href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                    >
                      <div className="p-2 bg-white rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                        <IconComponent className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{social.label}</p>
                        <p className="text-sm text-gray-500">Click to connect</p>
                      </div>
                    </a>
                  );
                })
              ) : (
                <div className="col-span-full text-center py-8 text-gray-500">
                  <p>No social links configured.</p>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Response Time Card */}
        <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200 mb-12">
          <div className="flex items-start space-x-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
              {contactData.responseTime && (
                <p className="text-green-700 font-medium mb-2">
                  Typical response: {contactData.responseTime}
                </p>
              )}
              {contactData.responseNote && (
                <p className="text-gray-700">
                  {contactData.responseNote}
                </p>
              )}
              {!contactData.responseTime && !contactData.responseNote && (
                <p className="text-gray-700">
                  I typically respond to emails within 24-48 hours. For urgent matters, LinkedIn messaging tends to be faster.
                </p>
              )}
            </div>
          </div>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="space-y-6">
              <p className="text-gray-700 text-lg">
                {contactData.closingMessage || "Looking forward to hearing from you!"}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/blog"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Read My Blog
                </Link>
                <Link 
                  href="/projects"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  View Projects
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
};