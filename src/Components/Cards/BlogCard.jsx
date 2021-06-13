import React from 'react'
import './BlogCard.css'

import { Slide, Fade } from 'react-reveal'

const BlogCard = () => {
    return (
        <Slide bottom>
            <div className="blogcard-container">
                <div className="blogcard-image-container" style={{ backgroundImage: "url(https://source.unsplash.com/random)" }}>
                    {/* <img src="" alt="" /> */}
                </div>
                <div className="blog-details">

                    <h5>Category</h5>

                    <h3>Impact of holidays on the forex market</h3>

                    <p>June 13, 2020 by <span>Admin</span> </p>
                </div>
            </div>

        </Slide>
    )
}

export default BlogCard;