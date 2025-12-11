import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  gradient: string;
  categoryColor: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in Business Transformation",
    excerpt: "Explore how artificial intelligence is reshaping industries and creating new opportunities for businesses to innovate and grow.",
    category: "AI & Machine Learning",
    date: "Dec 5, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442d019cecf8f80f1d45c72e8c5e6b5c1f0e?w=600&h=400&fit=crop",
    gradient: "from-blue-600 to-blue-700",
    categoryColor: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  },
  {
    id: "2",
    title: "Cloud Migration Best Practices for Enterprises",
    excerpt: "A comprehensive guide to planning and executing successful cloud migration strategies for large-scale organizations.",
    category: "Cloud Computing",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    gradient: "from-emerald-600 to-teal-700",
    categoryColor: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  },
  {
    id: "3",
    title: "Building Scalable Applications with Microservices",
    excerpt: "Learn how microservices architecture can help your business build more flexible, maintainable, and scalable applications.",
    category: "Software Development",
    date: "Nov 20, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    gradient: "from-purple-600 to-indigo-700",
    categoryColor: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  },
];

const BlogSection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-5 animate-pulse" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-24 text-center">
          <div className="inline-block mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 font-bold">
              Insights & Articles
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
            Latest from Our <span className="italic">Blog</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Stay updated with the latest trends, insights, and best practices in technology and digital transformation
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-4 animate-in fade-in slide-in-from-bottom-4"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              {/* Card wrapper */}
              <div className="relative flex flex-col h-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 rounded-2xl overflow-hidden">
                {/* Image container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${post.categoryColor} backdrop-blur-sm`}>
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-8">
                  {/* Meta Information */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="flex justify-center">
          <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 group inline-flex items-center gap-3">
            <span>View All Articles</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
