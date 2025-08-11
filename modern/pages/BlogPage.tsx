import Link from 'next/link';
import { Card } from '../components/Card';
import { Layout } from '../components/Layout';
import { ArrowLeft, BookOpen, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogPageProps {
  posts: Array<{
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    published: boolean;
  }>;
  categories: Array<{
    id: string;
    slug: string;
    name: string;
  }>;
}

export const BlogPage = ({ posts, categories }: BlogPageProps) => {
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
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Blog</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Insights and experiences from backend development, Java Spring Boot, DevOps, and homelab infrastructure.
            </p>
          </div>
        </div>

        {/* Categories */}
        {categories && categories.length > 0 && (
          <section className="mb-12">
            <Card>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Tag className="w-5 h-5 text-gray-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Browse by Category</h2>
                </div>
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
            </Card>
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
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <Card>
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl text-gray-500 mb-2">No posts yet</h3>
                <p className="text-gray-400">Check back soon for new articles!</p>
              </div>
            </Card>
          )}
        </section>

        {/* Newsletter CTA */}
        <section>
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Stay Updated</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Subscribe to get notified when I publish new articles about backend development and DevOps.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

interface BlogPostCardProps {
  post: {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    category: string;
    published: boolean;
  };
}

function BlogPostCard({ post }: BlogPostCardProps) {
  const categoryColors = {
    'backend': 'bg-blue-100 text-blue-700',
    'devops': 'bg-green-100 text-green-700',
    'java': 'bg-orange-100 text-orange-700',
    'spring-boot': 'bg-purple-100 text-purple-700',
    'kubernetes': 'bg-indigo-100 text-indigo-700',
  };

  const categoryColor = categoryColors[post.category as keyof typeof categoryColors] || 'bg-gray-100 text-gray-700';

  return (
    <Card>
      <div className="space-y-4">
        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColor}`}>
            {post.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </span>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} min read</span>
            </div>
          </div>
        </div>

        {/* Title & Content */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            <Link 
              href={`/blog/${post.slug}`}
              className="hover:text-blue-600 transition-colors"
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
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <span>Read more</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </Card>
  );
}