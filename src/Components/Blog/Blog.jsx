import React from 'react'
import './Blog.css'
import BlogCard from '../Cards/BlogCard';
import { useSelector } from 'react-redux';

const Blog = ({ count, title }) => {

    let blogCount = count;

    const Blogs = useSelector(state => state.blogs);


    if (blogCount === undefined || blogCount > Blogs.length) blogCount = Blogs.length;

    return (
        <div className="blog-section-container">
            {
                
                Blogs.map((blog, index) =>
                index < blogCount && blog.title!==title ? <BlogCard blog={blog} /> : null
            )
            }
        </div>
    )

}

export default Blog;