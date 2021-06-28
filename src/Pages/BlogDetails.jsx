import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Blog from '../Components/Blog/Blog';
import Categories from '../Components/Categories/Categories';
import SearchBox from '../Components/Form/SearchBox';

import './Styles/BlogDetails.css'

const BlogDetails = () => {

    const param = useParams();

    const Blogs = useSelector(state => state.blogs)

    const [currentBlog, setCurrentBlog] = useState(null);
    const [paragraphs, setParagraphs] = useState([]);

    useEffect(() => {
        var cBlog = Blogs.find(blog => blog.title.toLowerCase().replace(/ /g, "-") === param.slug);

        setCurrentBlog(cBlog);

        let ps = cBlog.text.split("\n");

        setParagraphs(ps);


    }, [Blogs, param.slug, paragraphs]);

    return (
        <>
            {
                currentBlog
                &&
                <div style={{ marginTop: "20px" }}>
                    <div className="blogpage-content-container">
                        <div className="blog-items-container blogdetails-item-container">

                            <p style={{ color: "#959da5" }}>Index/Blog</p>

                            <h1 style={{
                                fontSize: "1.4em",
                                textAlign: "center",
                                fontFamily: "Rubik, sans-serif",
                                letterSpacing: "0.8px"
                            }}>{currentBlog.title}</h1>

                            <div className="blogdetails-image-container">
                                <img src={currentBlog.image} alt="" width="100%" />
                            </div>

                            <div>
                                <span style={{ color: "var(--theme-green)" }}>{currentBlog.category.toUpperCase()}</span> - <span style={{ color: "#959da5" }}>{currentBlog.date}</span> by <span style={{ fontWeight: "bold" }}>{currentBlog.author}</span>
                            </div>

                            <div style={{ padding: "5px" }}>
                                {
                                    paragraphs.map(paragraph =>
                                        <p style={{ lineHeight: "200%", marginBottom: "20px" }}>{paragraph}</p>)
                                }
                            </div>
                        </div>

                        <div className="search-and-categories-container">
                            <SearchBox />
                            <Categories />
                        </div>
                    </div>


                    <div className="related-post-container">
                        <h3>Related Posts</h3>
                        <Blog count={4} title={currentBlog.title} />
                    </div>

                </div>
            }


        </>
    )
}

export default BlogDetails;