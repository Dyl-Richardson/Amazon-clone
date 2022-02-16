import React from 'react'
import moment from 'moment'
import Currency from 'react-currency-formatter';

export default function Order({ id, amount, amountShipping, items, timestamp, images }) {
    return (
        <div className='relative border rounded-md'>
            <div className='flex items-center space-x-10 p-5 bg-gray-100 text-sm text-gray-500'>
                <div>
                    <p className='font-bold text-xs'>ORDER PLACED</p>
                    <p>{moment.unix(timestamp).format('DD MMM YYYY')}</p>
                </div>

                <div>
                    <p className='text-xs font-bold'>TOTAL</p>
                    <Currency quantity={amount} currency='EUR' /> - Next Day Delivery{" "}
                    <Currency quantity={amountShipping} currency='EUR' />
                </div>

                <p className='text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right text-blue-500'>{items.length} items</p>

                <p className='absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap'>ORDER # {id}</p>
            </div>

            <div className='p-5 sm:p-10'>
                <div className='flex space-x-6 oveflow-x-auto'>
                    {images.map((image, index) =>
                        <img src={image} alt="" key={index} className='h-20 object-contain sm:h-32' />
                    )}
                </div>
            </div>
        </div>
    )
}
