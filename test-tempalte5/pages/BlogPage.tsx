import React from 'react';
import Link from 'next/link';
import { Layout } from '../components/Layout';

interface BlogPageProps {
  posts: any[];
  categories: any[];
}

export const BlogPage = ({ posts, categories }: BlogPageProps) => {

  return (
    <Layout>
      <div className="py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
          >
            <span>←</span>
            <span>Back to Home</span>
          </Link>
          
          <div className="max-w-3xl mx-auto">
            <h1 
              className="text-4xl font-bold mb-4"
              style={{ color: '#3b82f6' }}
            >
              Blog
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Thoughts, tutorials, and insights about development and technology
            </p>
          </div>
        </div>

        {/* Categories */}
        {categories && categories.length > 0 && (
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Browse by Category</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  category && category.slug ? (
                    <Link 
                      key={category.id}
                      href={`/blog/category/${category.slug}`}
                      className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-sm font-medium transition-colors"
                    >
                      {category.name}
                    </Link>
                  ) : null
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Recent Posts ({posts.length})
            </h2>
          </div>
          
          {posts.length > 0 ? (
            <div className="space-y-8">
              {posts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                >
                  <div className="space-y-4">
                    {/* Category Badge & Meta */}
                    <div className="flex items-center justify-between">
                      <span 
                        className="px-3 py-1 rounded-full text-sm font-medium"
                        style={{ 
                          backgroundColor: '#f59e0b20',
                          color: '#f59e0b'
                        }}
                      >
                        {post.category}
                      </span>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>

                    {/* Title & Content */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        <Link 
                          href={`/blog/${post.slug}`}
                          className="hover:text-blue-600 transition-colors"
                          style={{ color: '#3b82f6' }}
                        >
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Read More */}
                    <div className="pt-2">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center space-x-2 font-medium transition-colors"
                        style={{ color: '#3b82f6' }}
                      >
                        <span>Read more</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
              <h3 className="text-xl text-gray-500 mb-2">No posts yet</h3>
              <p className="text-gray-400">Check back soon for new articles!</p>
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 
              className="text-2xl font-bold mb-4"
              style={{ color: '#3b82f6' }}
            >
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new articles about development and technology.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center space-x-2 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              style={{ backgroundColor: '#3b82f6' }}
            >
              <span>Get In Touch</span>
              <span>→</span>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default BlogPage;