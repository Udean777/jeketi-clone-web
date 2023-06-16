import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../globals.css"
import React from 'react'
import Image from "next/image";
 
const ImageSlider = ({ images }) => {
 
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,
 
    };
    return (
        <>
            <div className="imgslider">
                <Slider {...settings}>
                    {images.map((item) => (
                        <div key={item.id}>
                            <Image width={679} height={100} src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}
export default ImageSlider;