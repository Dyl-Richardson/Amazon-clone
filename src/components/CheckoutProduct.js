import React from 'react'
import Image from 'next/image'
import Rating from './Rating'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

export default function CheckoutProduct({ id, title, price, description, category, image, rating }) {
    const dispatch = useDispatch()

    // push item to redux
    function addItemToBasket() {
        dispatch(addToBasket({ id, title, price, description, category, image, rating }))
    }

    // push item to redux
    function removeItemFromBasket() {
        dispatch(removeFromBasket({ id }))
    }

    return (
        <div className='grid grid-cols-5'>
            <Image src={image} height={200} width={200} objectFit='contain' />

            {/* desciption */}
            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {Rating(rating.rate)}
                </div>
                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <Currency quantity={price} currency='EUR' />
                {rating.rate < 3 &&
                    <div className='flex items-center space-x-2 mt-'>
                        <img src="https://m.media-amazon.com/images/G/01/prime/marketing/slashPrime/amazon-prime-delivery-checkmark._CB659998231_.png" alt="prime" className='w-14' loading='lazy' />
                        <p className='text-xs text-gray-500'>
                            FREE Next-day delivery
                        </p>
                    </div>
                }
            </div>

            {/* Add/Remove item */}
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button className='button' onClick={() => addItemToBasket()}>
                    Add to basket
                </button>
                <button className='button' onClick={() => removeItemFromBasket()}>
                    Remove from basket
                </button>
            </div>
        </div>
    )
}
