import React from 'react'
import facebookIcon from '../assets/images/facebook-icon.svg'
import instagramIcon from '../assets/images/instagram-icon.svg'
import twitterIcon from '../assets/images/twitter-icon.svg'

function Footer() {
    return (
        <div className='bg-pink'>
            <div className='w-5/6 m-auto flex items-center justify-center py-8 sm:py-9 md:justify-between md:py-10'>
                <p className='hidden md:block text-white font-cinzel md:text-3xl lg:text-4xl'>Sugar Rush</p>

                <div className='flex gap-4'>
                    <img
                        src={facebookIcon}
                        className='cursor-pointer hover:opacity-70 w-6 sm:w-7 md:w-8'
                    />
                    <img
                        src={instagramIcon}
                        className='cursor-pointer hover:opacity-70 w-6 sm:w-7 md:w-8'
                    /><img
                        src={twitterIcon}
                        className='cursor-pointer hover:opacity-70 w-6 sm:w-7 md:w-8'
                    />
                </div>
            </div>
        </div>
    )
}

export default Footer