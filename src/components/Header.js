import React from 'react';
import Image from 'next/image'
import { MenuIcon, SearchIcon, ShoppingCartIcon } from "@heroicons/react/outline"
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

export default function Header() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const items = useSelector(selectItems)

    return (
        <header>
            {/* Top */}
            <div className='flex flex-grow items-center bg-amazon_blue p-1 py-2'>
                <div className='flex flex-grow mt-2 items-center sm:flex-grow-0'>
                    <Image onClick={() => router.push("/")} src='https://d24wuq6o951i2g.cloudfront.net/img/events/id/457/457529905/assets/41a.amazon_logo_RGB_REV.png' width='150' height='40' objectFit='contain' className='cursor-pointer' />
                </div>
                {/* Search bar */}
                <div className='hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer'>
                    <input type="text" className='p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4' />
                    <SearchIcon className='h-12 p-4' />
                </div>

                {/* User section */}
                <div className='flex items-center text-white text-xs space-x-6 mx-6 whitespace-nowrap'>
                    <div className='link' onClick={!session ? () => signIn() : () => signOut()}>
                        <p>{session ? `Hello, ${session.user.name}` : "Sign in"}</p>
                        <p className='font-extrabold md:text-sm'>Account & Lists</p>
                    </div>
                    <div onClick={() => router.push('/orders')}
                        className='link'>
                        <p>Return</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>
                    <div className='link relative flex items-center' onClick={() => router.push("/checkout")}>
                        <span className='absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold'>
                            {items.length}
                        </span>
                        <ShoppingCartIcon className='h-9' />
                        <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                    </div>
                </div>
            </div>

            {/* bottom */}
            <div className='flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-3'>
                <p className='link flex items-center'>
                    <MenuIcon className='h-6 mr-1' />
                    All
                </p>
                <p className='link'>Prime video</p>
                <p className='link'>Amazon Business</p>
                <p className='link'>Today's Deals</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                <p className='link hidden lg:inline-flex'>Prime</p>
                <p className='link hidden lg:inline-flex'>Buy again</p>
                <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                <p className='link hidden lg:inline-flex'>Healt & Personal Care</p>
            </div>
        </header>
    );
}
