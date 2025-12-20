import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mockData';

const Blog = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-[#1a0b2e] to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-1/2 w-96 h-96 bg-[#6E44FF] rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Insights from the Field</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technical clarity, field notes, and transparent data from real missions.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#6E44FF] hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={post.hero}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#6E44FF] transition-colors duration-200">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 leading-relaxed">{post.summary}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 bg-[#F5F3FF] text-[#6E44FF] rounded-full text-xs font-medium"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-[#6E44FF] font-semibold hover:text-[#5D35E6] transition-colors duration-200"
                  >
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
