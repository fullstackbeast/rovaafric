import React from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'

import carousel1 from '../../Images/carousel1.jpg'
import carousel2 from '../../Images/carousel2.jpg'
import carousel3 from '../../Images/carousel3.jpg'


const Carousel = () => {


    const carouselItems = [
        {
            image: carousel1
        },
        {
            image: carousel2
        },
        {
            image: carousel3
        },
    ]

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000
    };


    return (
        <div className="carousel-container">
            <Slider className="carousel-slider" {...settings}>
                {
                    carouselItems.map(it => <div className="carousel-item" >
                        <div className="carousel-item-content" style={{ backgroundImage: `url(${it.image})` }}>
                            <div className="carousel-blackoverlay">
                                <div className="carousel-content">
                                    <span className="carousel-company-name">ROVA AFRIC GROUP</span>

                                    <h5 className="carousel-content-title">Clear <span style={{ color: "var(--theme-green)" }}>Investing</span> Make Your Money Grow</h5>

                                    <p className="carousel-content-desc">We are here to make your money work for you. Invest with us and earn consistent and stable profit.</p>
                                    
                                    <div className="carousel-content-button">
                                        <button> WORK WITH US </button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>)
                }

            </Slider>
        </div>
    )
}

export default Carousel;