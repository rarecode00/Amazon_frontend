import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { Products } from './Product/all-product';

export function Component() {
    const images = [
        { url: '/images/amazon_slide.jpg' },
        { url: '/images/amazon_slide.jpg' },
        { url: '/images/amazon_slide.jpg' },
        { url: '/images/amazon_slide.jpg' },
    ];
    return (
        <>
            {/* <BackgroundImage src='/images/amazon_slide.jpg' className='w-full h-full'>
            </BackgroundImage> */}
            <SimpleImageSlider
                width={1193}
                height={580}
                images={images}
                showNavs={true}
                showBullets={false}
                autoPlay={true}
                autoPlayDelay={7}
            />
            <Products />
        </>
    );
}
