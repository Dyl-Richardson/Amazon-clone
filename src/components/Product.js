import React from 'react';
import Image from 'next/image';
import Rating from './Rating';
import '@fortawesome/fontawesome-free/js/all.js'
import Currency from 'react-currency-formatter';

export default function Product({ id, title, price, description, category, image, rating }) {
    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <Image src={image} height={200} width={200} objectFit='contain' />
            <h4 className='my-3'>{title}</h4>
            {Rating(rating.rate)}
            <p className='text-xs my-2 line-clamp-2'>{description}</p>
            <div className='mb-5'>
                <Currency quantity={price} currency="GBP" />
            </div>
            {rating.rate < 3 ?
                <div className='flex items-center space-x-2 -mt5'>
                    <img src="https://m.media-amazon.com/images/G/01/prime/marketing/slashPrime/amazon-prime-delivery-checkmark._CB659998231_.png" alt="prime" className='w-14' />
                    <p className='text-xs text-gray-500'>FREE Next-day delivery</p>
                </div>
                : null}
            <button className='mt-auto button'>Add to basket</button>
        </div>
    );
}
