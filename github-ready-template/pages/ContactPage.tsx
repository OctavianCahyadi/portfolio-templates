import React from 'react';
import { Layout } from '../components/Layout';

interface ContactPageProps {
  contactData: any;
}

export const ContactPage = ({ contactData }: ContactPageProps) => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Contact Me</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-6">
              Feel free to reach out for collaborations or just to say hello!
            </p>
            {contactData?.email && (
              <p className="text-gray-600">
                Email: <a href={`mailto:${contactData.email}`} className="text-blue-600 hover:underline">{contactData.email}</a>
              </p>
            )}
          </div>
          <div>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg"></textarea>
              </div>
              <button type="submit" className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;