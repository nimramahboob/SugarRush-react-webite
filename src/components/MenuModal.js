import React from 'react'
import closeIcon from '../assets/images/close.svg'
import { Link } from 'react-router-dom'

function MenuModal({toggleMenu, setToggleMenu}) {

    return (
        <div className='absolute z-50 top-0 right-0 w-4/5 sm:w-3/5 h-screen bg-white shadow-xl'>

            <img
                src={closeIcon}
                className='w-6 mt-7 mr-8 absolute top-0 right-0 cursor-pointer'
                onClick={() => setToggleMenu(false)}
            />
            <div className='flex justify-center mt-32'>
                <ul className='flex flex-col items-center justify-center text-base font-quattrocento'>
                    <Link to='/' className='mb-8 cursor-pointer hover:text-pink transition-all'>Discover</Link>
                    <Link to='/recipes' className='mb-8 cursor-pointer hover:text-pink transition-all'>Recipes</Link>
                    <Link to='/about' className='mb-8 cursor-pointer hover:text-pink transition-all'>About</Link>
                    <Link to='/contact' className='mb-8 cursor-pointer bg-pink  py-2 px-6 rounded-full text-white border border-pink hover:text-pink hover:bg-white transition-all'>Contact</Link>
                </ul>
            </div>
            
        </div>
    )
}

export default MenuModal