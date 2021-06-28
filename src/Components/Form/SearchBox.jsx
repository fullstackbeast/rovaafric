import React from 'react'
import { FaSearch } from 'react-icons/fa';
import './SearchBox.css'


const SearchBox = () => {
    return (
        <div className="searchbox-container">
            <h2>Search</h2>
            <form className="searchbox-input-container">
                <input type="search" id="blog-search" placeholder="Enter your search term"/>
                <button type="submit">
                    <FaSearch />
                </button>
            </form>

        </div>
    )
}

export default SearchBox;