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
                    carouselItems.map(it => <div className="carousel-item">
                        <img src={it.image} alt="" />
                    </div>)
                }
            </Slider>
        </div>
    )
}

export default Carousel;