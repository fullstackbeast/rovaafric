import React from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css'


const Carousel = () => {

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

                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random" alt="" />
                </div>
                <div className="carousel-item">
                    <img src="https://source.unsplash.com/random" alt="" />
                </div>
                

            </Slider>
        </div>
    )
}

export default Carousel;