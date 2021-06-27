import React from 'react'
import Blog from '../Components/Blog/Blog';
import MiniHero from '../Components/Hero/MiniHero';

import blogHeaderImg from '../Images/blogheader.jpg'

const BlogPage = () => {

    return (
        <div >
            <MiniHero img={blogHeaderImg} text="OUR BLOG" />

            <div style={{ marginTop: "30px" }}>

                <Blog />
            </div>
        </div>
    )
}

export default BlogPage;