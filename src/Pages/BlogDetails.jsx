import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Blog from '../Components/Blog/Blog';

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
                <div style={{marginTop:"20px"}}>
                    <div>

                        <p style={{color:"#959da5"}}>Index/Blog</p>

                        <h1 style={{ 
                            fontSize: "1.4em", 
                            textAlign:"center",
                            fontFamily:"Rubik, sans-serif", 
                            letterSpacing:"0.8px" }}>{currentBlog.title}</h1>

                        <div style={{marginBottom:"10px"}}>
                            <img src={currentBlog.image} alt="" width="100%" />
                        </div>

                        <div>
                            <span style={{color:"var(--theme-green)"}}>{currentBlog.category.toUpperCase()}</span> - <span style={{color:"#959da5"}}>{currentBlog.date}</span> by <span style={{fontWeight:"bold"}}>{currentBlog.author}</span>
                            </div>

                        <div style={{ padding: "5px" }}>
                            {
                                paragraphs.map(paragraph =>
                                    <p style={{lineHeight: "200%",marginBottom: "20px"}}>{paragraph}</p>)
                            }
                        </div>
                    </div>
                    
                    <div>
                        <h3>Related Posts</h3>
                        <Blog count={4} title={currentBlog.title}/>
                    </div>

                </div>
            }


        </>
    )
}

export default BlogDetails;