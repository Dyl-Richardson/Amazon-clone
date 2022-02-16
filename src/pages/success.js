import React from 'react'
import Header from '../components/Header'
import { CheckCircleIcon } from '@heroicons/react/solid'
import { useRouter } from 'next/router'


export default function success() {
    const router = useRouter()
    return (
        <div className='bg-gray-100 h-screen'>
            <Header />

            <main className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col p-10 bg-white'>
                    <div className='flex items-center space-x-2 mb-5'>
                        <CheckCircleIcon className='h-10 text-green-600' />
                        <h1 className='text-3xl'>
                            Thank you, your order has been confirmed
                        </h1>
                    </div>
                    <p>
                        Thank you for your order.
                        We will let you know by email when the items in your order have been dispatched.
                        Your estimated delivery date is listed below. You can track the status of your order in Your Orders on amazon-clone-dyl-richardson.vercel.app or by clicking the link bellow.
                    </p>
                    <button onClick={() => router.push('/orders')} className='button mt-8'>
                        Go to my order
                    </button>
                </div>
            </main>
        </div>
    )
}
