import { ArrowLeft, Bookmark, Share2, Calendar, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { useState } from "react";
import { BlogPost } from "./types";

// BlogSingle Component
interface BlogSingleProps {
  post: BlogPost;
  allPosts: BlogPost[];
  onBackClick: () => void;
  onBlogClick: (blog: BlogPost) => void;
}

export const BlogSingle: React.FC<BlogSingleProps> = ({ post, allPosts, onBackClick, onBlogClick }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const relatedPosts = allPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      {/* Header */}
      <header className="relative z-10 border-b border-border/50 backdrop-blur-xl bg-background/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            <button
              onClick={onBackClick}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group px-4 py-2 rounded-xl hover:bg-card/50"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold">Back to Insights</span>
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-3 rounded-xl transition-all transform hover:scale-110 ${
                  isBookmarked
                    ? 'bg-secondary text-secondary-foreground shadow-glow-teal scale-110'
                    : 'bg-card hover:bg-card/80 text-foreground border border-border/50'
                }`}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>
              <button className="p-3 rounded-xl bg-card hover:bg-card/80 text-foreground border border-border/50 transition-all hover:scale-110 transform">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Badge */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <span className="px-5 py-2 bg-gradient-primary text-navy-deep font-bold rounded-full text-sm shadow-glow-teal">
            {post.category}
          </span>
          <span className="text-muted-foreground text-sm flex items-center gap-2 px-4 py-2 bg-card/50 rounded-lg border border-border/30">
            <Calendar className="w-4 h-4 text-secondary" />
            {new Date(post.publishedAt).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <span className="text-muted-foreground text-sm flex items-center gap-2 px-4 py-2 bg-card/50 rounded-lg border border-border/30">
            <Clock className="w-4 h-4 text-secondary" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
          <span className="text-gradient animate-gradient">
            {post.title}
          </span>
        </h1>

        {/* Author Info */}
        <div className="flex items-center justify-between mb-10 pb-10 border-b-2 border-border/50">
          <div className="flex items-center gap-5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-16 h-16 rounded-full ring-4 ring-secondary/50 shadow-lg"
            />
            <div>
              <div className="font-bold text-foreground text-lg">{post.author.name}</div>
              <div className="text-sm text-muted-foreground mt-1">{post.author.role}</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm">
            <span className="px-4 py-2 bg-card/50 rounded-lg text-muted-foreground border border-border/30">
              Expert Analysis
            </span>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative mb-16 rounded-3xl overflow-hidden shadow-card border-2 border-border/30">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-transparent to-transparent" />
        </div>

        {/* Blog Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          <style>{`
            .prose {
              color: hsl(var(--foreground));
            }
            .prose p {
              margin-bottom: 1.5em;
              line-height: 1.8;
              color: hsl(var(--muted-foreground));
            }
            .prose p.lead {
              font-size: 1.25em;
              font-weight: 400;
              color: hsl(var(--foreground));
              margin-bottom: 2em;
              line-height: 1.6;
            }
            .prose h2 {
              font-size: 2em;
              font-weight: 700;
              margin-top: 2em;
              margin-bottom: 1em;
              color: hsl(var(--foreground));
              background: var(--gradient-primary);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            .prose h3 {
              font-size: 1.5em;
              font-weight: 600;
              margin-top: 1.5em;
              margin-bottom: 0.75em;
              color: hsl(var(--foreground));
            }
            .prose blockquote {
              border-left: 4px solid hsl(var(--secondary));
              padding: 1.5em 2em;
              margin: 2em 0;
              background: hsl(var(--card));
              border-radius: 0.75rem;
              font-style: italic;
              color: hsl(var(--foreground));
            }
            .prose blockquote cite {
              display: block;
              margin-top: 1em;
              font-style: normal;
              font-size: 0.9em;
              color: hsl(var(--muted-foreground));
            }
            .prose blockquote cite::before {
              content: "— ";
            }
            .prose ul {
              margin: 1.5em 0;
            }
            .prose li {
              margin: 0.75em 0;
              color: hsl(var(--muted-foreground));
            }
            .prose strong {
              color: hsl(var(--foreground));
              font-weight: 600;
            }
            .stat-highlight {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              gap: 2rem;
              margin: 3em 0;
              padding: 2.5em;
              background: hsl(var(--card));
              border-radius: 1rem;
              border: 1px solid hsl(var(--border));
            }
            .stat-item {
              text-align: center;
            }
            .stat-number {
              display: block;
              font-size: 3em;
              font-weight: 700;
              background: var(--gradient-primary);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              margin-bottom: 0.25em;
            }
            .stat-label {
              display: block;
              font-size: 0.9em;
              color: hsl(var(--muted-foreground));
              text-transform: uppercase;
              letter-spacing: 0.05em;
            }
            .benefits-list {
              list-style: none;
              padding: 0;
            }
            .benefits-list li {
              padding: 1.25em 1.5em;
              margin: 1em 0;
              background: hsl(var(--card));
              border-radius: 0.75rem;
              border-left: 4px solid hsl(var(--secondary));
              transition: all 0.3s ease;
            }
            .benefits-list li:hover {
              transform: translateX(8px);
              box-shadow: var(--shadow-glow-teal);
            }
            .cta-section {
              margin: 3em 0;
              padding: 3em;
              background: var(--gradient-card);
              border-radius: 1.5rem;
              border: 1px solid hsl(var(--border));
              text-align: center;
            }
            .cta-section h3 {
              margin-top: 0;
              font-size: 2em;
              color: hsl(var(--foreground));
            }
            .cta-section p {
              font-size: 1.1em;
              margin-bottom: 2em;
            }
            .cta-button {
              padding: 1em 2.5em;
              background: var(--gradient-primary);
              color: hsl(var(--navy-deep));
              font-weight: 600;
              font-size: 1.1em;
              border: none;
              border-radius: 0.75rem;
              cursor: pointer;
              transition: all 0.3s ease;
              box-shadow: var(--shadow-glow-teal);
            }
            .cta-button:hover {
              transform: translateY(-2px);
              box-shadow: var(--shadow-glow-amber);
            }
          `}</style>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border/50">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-card hover:bg-card/80 text-foreground rounded-lg text-sm font-medium transition-colors cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-20">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 blur-xl rounded-full"></div>
                  <TrendingUp className="w-8 h-8 text-secondary animate-pulse-slow relative" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gradient">Related Insights</h2>
                  <p className="text-muted-foreground text-sm mt-1">Continue exploring this topic</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost, index) => (
                <article
                  key={index}
                  onClick={() => onBlogClick(relatedPost)}
                  className="group glass-strong rounded-2xl overflow-hidden hover:scale-[1.03] transition-all cursor-pointer border border-border/30 hover:border-secondary/50 hover:shadow-glow-teal"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={relatedPost.coverImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-gradient transition-colors line-clamp-2 leading-tight">
                      {relatedPost.title}
                    </h3>
                    <div className="flex items-center justify-between pt-3 border-t border-border/50">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {relatedPost.readTime}
                      </div>
                      <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
};