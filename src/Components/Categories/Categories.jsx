import React from 'react'
import { Link } from 'react-router-dom'
import './Categories.css'

const Categories = () => {

    const categories = ["All", "Funds", "Investing", "Transport", "Test"]

    return (
        <div className="categories-component-container">
            <h2>Categories</h2>
            <div className="categories-item-container">
                {
                    categories.map(category =>
                        <Link to="/" className="categories-item">
                            <span >{category}</span>
                        </Link>
                    )}
            </div>
        </div>
    )
}

export default Categories