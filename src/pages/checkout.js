import React from 'react';
import Header from '../components/Header';
import Image from 'next/image'
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';


export default function Checkout() {
    const items = useSelector(selectItems)

    return (
        <div className='bg-gray-100'>
            <Header />

            <main className='lg:flex max-w-screen-2xl mx-auto'>
                {/* products */}
                <div className='flex-grow m-5 shadow-sm'>
                    <Image src='https://images-na.ssl-images-amazon.com/images/G/01/dex/2019/AmazonDay/DEX_2019_AmazonDay_LP_Hero_Desktop_3000x625.jpg' width={1020} height={250} objectFit='contain' />

                    <div className='flex flex-col p-5 space-y-10 bg-white'>
                        <h1 className='text-3xl border-b pb-4'>
                            {items.length === 0 ? 'Your Amazon Basket is empty' : "Shopping Basket"}
                        </h1>

                        {items.map((item, index) => {
                            return <CheckoutProduct key={index} id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image} rating={item.rating} />
                        })}
                    </div>
                </div>
                {/* price */}
            </main>
        </div>
    );
}
