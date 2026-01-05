import { Search, Zap, TrendingUp, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";
import { BlogPost } from "./types";

interface BlogShowcaseProps {
  posts: BlogPost[];
  onBlogClick: (blog: BlogPost) => void;
}

export const BlogShowcase: React.FC<BlogShowcaseProps> = ({ posts, onBlogClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(posts.map(post => post.category)))];
  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = posts.filter(post => post.featured);

  return (
    <>
      {/* Header */}
      <header className="relative z-10 border-b border-border/50 backdrop-blur-xl bg-background/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-30" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/60 backdrop-blur-sm border border-border/50 rounded-full mb-6 text-sm font-medium text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Tech-Driven AdSales & Media Intelligence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient animate-gradient">Insights & Innovation</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
              Explore cutting-edge strategies in <span className="text-foreground font-semibold">AI-powered media planning</span>, seamless omnichannel integration, and data-driven advertising excellence
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-card/50 rounded-lg border border-border/30">Linear TV</span>
              <span className="text-border/50">+</span>
              <span className="px-3 py-1 bg-card/50 rounded-lg border border-border/30">Digital</span>
              <span className="text-border/50">+</span>
              <span className="px-3 py-1 bg-card/50 rounded-lg border border-border/30">CTV</span>
              <span className="text-border/50">+</span>
              <span className="px-3 py-1 bg-card/50 rounded-lg border border-border/30">Addressable</span>
            </div>
          </div>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-16">
          <div className="glass-strong rounded-2xl p-6 border-2 border-border/30">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                <input
                  type="text"
                  placeholder="Search articles, insights, strategies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 bg-background/50 backdrop-blur-xl border-2 border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-4 rounded-xl font-semibold whitespace-nowrap transition-all transform hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-gradient-primary text-navy-deep shadow-glow-teal scale-105'
                        : 'bg-card/80 backdrop-blur-xl border-2 border-border/50 text-foreground hover:bg-card hover:border-secondary/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'All' && !searchQuery && (
          <section className="mb-20">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full"></div>
                  <Zap className="w-8 h-8 text-secondary animate-pulse-slow relative" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-gradient">Featured Insights</h2>
                  <p className="text-muted-foreground text-sm mt-1">Handpicked articles from industry leaders</p>
                </div>
              </div>
              <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-20 h-px bg-gradient-primary"></div>
                <span className="font-medium">Trending Now</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  onClick={() => onBlogClick(post)}
                  className="group glass-strong rounded-3xl overflow-hidden hover:scale-[1.02] transition-all cursor-pointer border-2 border-border/30 hover:border-secondary/50 hover:shadow-glow-teal"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-transparent" />
                    <div className="absolute top-6 right-6 flex gap-2">
                      <span className="px-5 py-2 bg-secondary backdrop-blur-md text-secondary-foreground font-bold rounded-full text-sm shadow-glow-teal flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Featured
                      </span>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-4 py-1.5 bg-card/80 backdrop-blur-sm text-secondary font-bold rounded-lg text-sm border border-secondary/30">
                          {post.category}
                        </span>
                        <span className="text-white/90 text-sm font-medium flex items-center gap-2 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient transition-colors leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-3">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-11 h-11 rounded-full ring-2 ring-secondary/50 shadow-lg"
                        />
                        <div>
                          <div className="font-semibold text-foreground text-sm">{post.author.name}</div>
                          <div className="text-xs text-muted-foreground">{post.author.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-secondary font-semibold text-sm group-hover:gap-3 transition-all">
                        <span>Read More</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts Grid */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-amber/20 blur-xl rounded-full"></div>
                <TrendingUp className="w-8 h-8 text-amber animate-pulse-slow relative" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gradient">
                  {searchQuery ? 'Search Results' : selectedCategory === 'All' ? 'Latest Insights' : `${selectedCategory} Focus`}
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} • Expert perspectives on AdTech & Media
                </p>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="px-4 py-2 bg-card/50 backdrop-blur-xl rounded-xl border border-border/50">
                <span className="text-xs text-muted-foreground font-medium">Sorted by Latest</span>
              </div>
            </div>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 glass-strong rounded-2xl">
              <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  onClick={() => onBlogClick(post)}
                  className="group glass-strong rounded-2xl overflow-hidden hover:scale-[1.03] transition-all cursor-pointer border border-border/30 hover:border-secondary/50 hover:shadow-glow-teal"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent" />
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                      <span className="px-4 py-1.5 bg-card/80 backdrop-blur-sm text-secondary font-bold rounded-lg text-xs border border-secondary/30">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-white/90 text-xs font-medium bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gradient transition-colors line-clamp-2 leading-tight min-h-[3.5rem]">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-5 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center gap-2">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-9 h-9 rounded-full ring-2 ring-secondary/40 shadow-md"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-foreground text-sm truncate">{post.author.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </div>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-2 transition-transform flex-shrink-0" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="mt-24 glass-strong rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border-2 border-border/30">
          <div className="absolute inset-0 bg-gradient-glow opacity-40" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber/20 rounded-full blur-3xl" />
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-primary mb-8 animate-glow shadow-glow-teal">
              <Zap className="w-10 h-10 text-navy-deep" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gradient leading-tight">
              Stay at the Forefront of AdTech
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 10,000+ industry professionals receiving weekly insights on AI-powered media planning, cross-channel strategies, and the future of advertising technology
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 px-7 py-4 bg-background/80 backdrop-blur-xl border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary text-foreground placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="px-10 py-4 bg-gradient-primary text-navy-deep font-bold rounded-xl hover:shadow-glow-amber transition-all hover:-translate-y-1 transform"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-xs text-muted-foreground">
              🔒 No spam. Unsubscribe anytime. Your email is safe with us.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};