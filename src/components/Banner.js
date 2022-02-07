import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function Banner() {
    return (
        <div className='relative'>
            <div className='absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20' />
            <Carousel autoPlay ininiteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
                <div>
                    <img loading='lazy' src="https://m.media-amazon.com/images/I/61dAdsgvc+L._SX3000_.jpg" alt="" />
                </div>
                <div>
                    <img loading='lazy' src="https://m.media-amazon.com/images/I/A1C5oIxGgTL._SX3000_.jpg" alt="" />
                </div>
                <div>
                    <img loading='lazy' src="https://m.media-amazon.com/images/I/81moilWl1KL._SX3000_.jpg" alt="" />
                </div>
                <div>
                    <img loading='lazy' src="https://m.media-amazon.com/images/I/61KJFqJqENL._SX3000_.jpg" alt="" />
                </div>
                <div>
                    <img loading='lazy' src="https://m.media-amazon.com/images/I/61pPr3W-YwL._SX3000_.jpg" alt="" />
                </div>
            </Carousel>
        </div>
    );
}
