import React from 'react';
import Header from '../components/Header';
import Image from 'next/image'
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/react';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
const stripePromise = loadStripe(process.env.stripe_public_key)


export default function Checkout() {
    const items = useSelector(selectItems)
    const total = useSelector(selectTotal)
    const session = useSession()

    async function createCheckoutSession() {
        const stripe = await stripePromise

        // Call backend to create session
        const data = { items: items, email: session.data.user.email }
        const checkoutSession = await axios.post('/api/create-checkout-session', data)
        const result = await stripe.redirectToCheckout({ sessionId: checkoutSession.data.id })

        if (result.error) {
            alert(result.error.message)
        }
    }

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
                <div className='flex flex-col bg-white p-10 shadow-md'>
                    {items.length > 0 &&
                        <>
                            <h2 className='whitespace-nowrap'>Subtotal ({items.length > 1 ? items.length + ' items' : items.length + ' item'})
                                <span className='font-bold'>
                                    <Currency quantity={total} currency="EUR" />
                                </span>
                            </h2>

                            <button
                                // Stripe
                                role='link'
                                onClick={createCheckoutSession}
                                // disable if not connected
                                disabled={session.status === 'unauthenticated'}
                                className={`button mt-2 ${session.status === 'unauthenticated' && 'bg-gray-300 border-grey-200 cursor-not-allowed hover:bg-gray-300'}`}>
                                {session.status === 'unauthenticated' ? 'Sign in to checkout' : 'Proceed to checkout'}
                            </button>
                        </>
                    }
                </div>
            </main>
        </div>
    );
}
