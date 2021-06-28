import React from 'react'
import Blog from '../Components/Blog/Blog';
import Categories from '../Components/Categories/Categories';
import SearchBox from '../Components/Form/SearchBox';
import MiniHero from '../Components/Hero/MiniHero';

import './Styles/Blog.css'

import blogHeaderImg from '../Images/blogheader.jpg'

const BlogPage = () => {

    return (
        <div className="blogpage-container">
            <MiniHero img={blogHeaderImg} text="OUR BLOG" />
            <div className="blogpage-content-container">
                <div className="blog-items-container" style={{ marginTop: "30px" }}>
                    <Blog />
                </div>

                <div className="search-and-categories-container">
                    <SearchBox />
                    <Categories />
                </div>
            </div>


        </div>
    )
}

export default BlogPage;