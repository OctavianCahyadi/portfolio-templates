import React from 'react';
import { Layout } from '../components/Layout';

interface BlogPageProps {
  posts: any[];
}

export const BlogPage = ({ posts }: BlogPageProps) => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Blog</h1>
        <div className="space-y-8">
          {posts?.map((post, index) => (
            <article key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;