import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div 
                className="w-8 h-8 rounded-lg mr-3 flex items-center justify-center text-white font-bold"
                style={{ backgroundColor: '#3b82f6' }}
              >
                t
              </div>
              <span 
                className="text-xl font-bold"
                style={{ color: '#3b82f6' }}
              >
                Portfolio
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className="text-gray-700 hover:transition-colors duration-200"
                style={{ '--hover-color': '#3b82f6' } as any}
                onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:transition-colors duration-200"
                onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                About
              </Link>
              <Link 
                href="/projects" 
                className="text-gray-700 hover:transition-colors duration-200"
                onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:transition-colors duration-200"
                onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Contact
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:transition-colors duration-200"
                onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                Blog
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
                style={{ '--hover-color': '#3b82f6' } as any}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <div className="flex items-center mb-4">
                <div 
                  className="w-8 h-8 rounded-lg mr-3 flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: '#3b82f6' }}
                >
                  t
                </div>
                <span className="text-xl font-bold text-white">Portfolio</span>
              </div>
              <p className="text-gray-400 text-sm">
                test template2
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projects</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-white font-semibold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-gray-400 hover:text-white transition-colors">All Posts</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tutorials</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-2 text-sm">
                <p className="text-gray-400">Ready to work together?</p>
                <Link 
                  href="/contact"
                  className="inline-block px-4 py-2 text-white font-medium rounded-md transition-all duration-300 hover:shadow-lg"
                  style={{ backgroundColor: '#3b82f6' }}
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} test-template2. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;