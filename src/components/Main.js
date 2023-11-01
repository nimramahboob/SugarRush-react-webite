import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
    return (
        <main className='w-full main mt-12 mb-14 flex justify-center items-center md:w-5/6 md:m-auto md:mt-12 md:mb-20 lg:mb-32'>

            <div className='absolute bg-very-light-pink top-0 bottom-0 left-0 right-0 mix-blend-soft-light'></div>
            <div className='absolute bg-very-light-pink top-0 bottom-0 left-0 right-0 mix-blend-soft-light opacity-50'></div>

            <div className='w-4/5 text-center my-8 md:w-3/4 lg:w-2/4 z-30'>
                <h2 className='font-cinzel text-2xl mb-4 md:text-3xl lg:text-4xl'>ultimate destination for all your sweet cravings.</h2>
                <p className='text-sm mb-6 md:text-base'>Get ready to embark on a delightful journey as we bring you an
                    array of delectable treats that will satisfy your sweet tooth like never before.</p>
                <Link to='recipes' className='font-quattrocento bg-pink text-sm inline-block text-white py-3 px-7 rounded-full border border-pink transition-all hover:bg-transparent hover:text-pink hover:border-pink md:text-base'>Checkout</Link>
            </div>
            
        </main>
    )
}

export default Main