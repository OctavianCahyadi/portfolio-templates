import React from 'react';
import { Layout } from '../components/Layout';

interface ContactPageProps {
  landingPageData: any;
}

export const ContactPage = ({ landingPageData }: ContactPageProps) => {
  // Extract data from landingPageData structure
  const profile = landingPageData.profile || {};
  const socialLinks = landingPageData.socialLinks || [];
  const contactData = {
    title: "Get In Touch",
    subtitle: "Let's work together on something great",
    email: profile.email || "contact@example.com",
    website: profile.website,
    responseTime: "Usually responds within 24 hours",
    currentFocus: ["Web Development", "UI/UX Design"],
    interests: ["React", "TypeScript", "Node.js"]
  };
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
              {contactData.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {contactData.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 
                className="text-2xl font-bold mb-6"
                style={{ color: '#3b82f6' }}
              >
                Get In Touch
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="text-gray-600 hover:underline"
                    style={{ color: '#3b82f6' }}
                  >
                    {contactData.email}
                  </a>
                </div>

                {contactData.website && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Website</h3>
                    <a 
                      href={contactData.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                      style={{ color: '#3b82f6' }}
                    >
                      {contactData.website}
                    </a>
                  </div>
                )}

                {/* Current Focus */}
                {contactData.currentFocus && contactData.currentFocus.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Currently Focused On</h3>
                    <ul className="space-y-2">
                      {contactData.currentFocus.map((focus, index) => (
                        <li key={index} className="flex items-start">
                          <span 
                            className="inline-block w-2 h-2 rounded-full mt-2 mr-3"
                            style={{ backgroundColor: '#f59e0b' }}
                          />
                          <span className="text-gray-600">{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Interests */}
                {contactData.interests && contactData.interests.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                      {contactData.interests.map((interest, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-sm"
                          style={{ 
                            backgroundColor: '#f59e0b20',
                            color: '#f59e0b'
                          }}
                        >
                          {interest}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Response Time */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Response Time</h3>
                  <p className="text-gray-600">{contactData.responseTime}</p>
                  {contactData.responseNote && (
                    <p className="text-sm text-gray-500 mt-2">{contactData.responseNote}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Social Links & Additional Info */}
            <div>
              <h2 
                className="text-2xl font-bold mb-6"
                style={{ color: '#3b82f6' }}
              >
                Connect With Me
              </h2>

              <div className="space-y-6">
                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Social Media</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {socialLinks.filter(link => link.enabled).map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4"
                        style={{ borderLeftColor: '#f59e0b' }}
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{link.name}</h4>
                          <p className="text-sm text-gray-600">{link.label}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Closing Message */}
                {contactData.closingMessage && (
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6">
                    <p className="text-gray-700 italic">
                      "{contactData.closingMessage}"
                    </p>
                  </div>
                )}

                {/* Quick Stats */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 
                    className="text-lg font-semibold mb-4"
                    style={{ color: '#3b82f6' }}
                  >
                    Quick Stats
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div 
                        className="text-2xl font-bold"
                        style={{ color: '#f59e0b' }}
                      >
                        {projects.length}
                      </div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div>
                      <div 
                        className="text-2xl font-bold"
                        style={{ color: '#f59e0b' }}
                      >
                        0
                      </div>
                      <div className="text-sm text-gray-600">Skills</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;