import React, { useEffect, useState } from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
import { Products } from './Product/all-product';
import { SimpleGrid } from '@mantine/core';
import { getAllProducts } from '../services/product'

export function Component() {
    interface Product {
        _id: string;
        category: string;
        color: string[]; // You might need to adjust the type based on your actual data structure
        createdAt: string;
        name: string;
        price: number;
        rating: number;
        updatedAt: string;
    }
    const [product, setProduct] = useState<Product[]>([]);
    const images = [
        { url: '/images/amazon_slide.jpg' },
        { url: '/images/amazon_slide.jpg' },
        { url: '/images/amazon_slide.jpg' },
        { url: '/images/amazon_slide.jpg' },
    ];

    useEffect(() => {
        async function getProducts() {
            const response = await getAllProducts();
            setProduct(response.data)
            console.log(response.data);
        }
        getProducts()
    }, [])
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
            <SimpleGrid cols={3}>
                {product.map((item): JSX.Element => (
                    <Products key={item._id} product={item} />
                ))}
            </SimpleGrid>
        </>
    );
}
