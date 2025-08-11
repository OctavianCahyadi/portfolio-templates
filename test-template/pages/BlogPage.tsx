import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { TemplatePageProps, BlogPost } from '../types';

interface BlogPageProps extends TemplatePageProps {
  posts: BlogPost[];
  categories: Array<{
    id: string;
    name: string;
    slug: string;
    postCount: number;
  }>;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  profileData,
  skillCategories,
  socialLinks,
  projects,
  posts,
  categories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter posts by category
  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category.slug === selectedCategory);

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
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about development and technology
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'text-white shadow-lg'
                  : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
              }`}
              style={selectedCategory === 'all' ? { backgroundColor: '#3b82f6' } : {}}
            >
              All Posts ({posts.length})
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.slug
                    ? 'text-white shadow-lg'
                    : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                }`}
                style={selectedCategory === category.slug ? { backgroundColor: '#3b82f6' } : {}}
              >
                {category.name} ({category.postCount})
              </button>
            ))}
          </div>

          {/* Blog Posts */}
          <div className="space-y-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  {/* Post Meta */}
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <time dateTime={post.publishedAt.toISOString()}>
                      {post.publishedAt.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span>•</span>
                    <span>{post.readTime} min read</span>
                    <span>•</span>
                    <span 
                      className="px-2 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: '#f59e0b20',
                        color: '#f59e0b'
                      }}
                    >
                      {post.category.name}
                    </span>
                  </div>

                  {/* Post Title */}
                  <h2 className="text-2xl font-bold mb-4">
                    <a 
                      href={`/blog/${post.slug}`}
                      className="hover:underline transition-colors"
                      style={{ color: '#3b82f6' }}
                    >
                      {post.title}
                    </a>
                  </h2>

                  {/* Post Excerpt */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center font-medium hover:underline transition-colors"
                    style={{ color: '#3b82f6' }}
                  >
                    Read full article
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
              <p className="text-gray-500">
                {selectedCategory === 'all' 
                  ? "No blog posts have been published yet." 
                  : "No posts found in this category."}
              </p>
            </div>
          )}

          {/* Newsletter Signup CTA */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: '#3b82f6' }}
            >
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6">
              Get notified when I publish new articles about development and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:border-transparent transition-colors"
                style={{ focusRingColor: '#3b82f6' }}
              />
              <button
                className="px-6 py-2 text-white font-medium rounded-md hover:shadow-lg transition-all duration-300"
                style={{ backgroundColor: '#3b82f6' }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;