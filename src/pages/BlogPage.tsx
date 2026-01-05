// src/pages/BlogPage.tsx (or wherever your main component is)
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { BlogShowcase } from "@/components/blogs/BlogShowcase";
import { BlogSingle } from "@/components/blogs/BlogSingle";
import { BlogPost } from "@/components/blogs/types";
import blogPosts from "@/components/blogs/blogpost";
const BlogSystem: React.FC = () => {
  const [currentView, setCurrentView] = useState<'showcase' | 'single'>('showcase');
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const handleBlogClick = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setCurrentView('single');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToShowcase = () => {
    setCurrentView('showcase');
    setSelectedBlog(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout>
      {currentView === 'showcase' ? (
        <BlogShowcase posts={blogPosts} onBlogClick={handleBlogClick} />
      ) : selectedBlog ? (
        <BlogSingle 
          post={selectedBlog} 
          allPosts={blogPosts}
          onBackClick={handleBackToShowcase}
          onBlogClick={handleBlogClick}
        />
      ) : null}
    </Layout>
  );
};

export default BlogSystem;