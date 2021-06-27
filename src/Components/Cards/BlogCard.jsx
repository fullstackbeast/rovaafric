import React from 'react'
import './BlogCard.css'

import { Slide } from 'react-reveal'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const BlogCard = ({ blog }) => {

    const history = useHistory();

    

    const handleClick = (title) => {
        const slug = title.toLowerCase().replace(/ /g, "-");
        history.push(`/blog/${slug}`);
    }

    return (
        <Slide bottom>
            <div className="blogcard-container" onClick={()=>handleClick(blog.title)}>
                <div className="blogcard-image-container" style={{ backgroundImage: `url(${blog.image})` }}>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className="blog-details">

                    <h5>{blog.category}</h5>

                    <h3>{blog.title}</h3>

                    <p>{blog.date} by <span>{blog.author}</span> </p>
                </div>
            </div>

        </Slide>
    )
}

export default BlogCard;