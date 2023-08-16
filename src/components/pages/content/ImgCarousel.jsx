import "./ImgCarousel.css"
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images]);

    return (
        <Carousel
            showArrows={false}
            showStatus={false} 
            showIndicators={true}
            showThumbs={false}
            selectedItem={currentSlide}
            onChange={(newSlide) => setCurrentSlide(newSlide)}
            autoPlay={false} // Disable auto-play since we're using custom interval
        >
            {images.map((image, index) => (
                <div key={index}>
                    <img className="img" src={image.url} alt={`Image ${index}`} />
                    {/* <p className="legend">{image.caption}</p> */}
                    <p className="captions">{image.caption}</p>
                </div>
            ))}
        </Carousel>
    );
};

export default ImageCarousel;