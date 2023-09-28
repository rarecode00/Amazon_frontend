import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';

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
                height={504}
                images={images}
                showNavs={true}
                showBullets={true}
            />
        </>
    );
}
