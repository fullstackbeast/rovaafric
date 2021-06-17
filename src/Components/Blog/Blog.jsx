import React from 'react'
import './Blog.css'
import BlogCard from '../Cards/BlogCard';

const Blog = () => {

    return (
        <div className="blog-section-container">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          
        </div>
    )

}

export default Blog;