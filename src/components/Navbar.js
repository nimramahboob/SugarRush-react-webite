import React, { useState } from 'react'
import menuIcon from '../assets/images/menu.svg'
import MenuModal from './MenuModal'
import { Link } from 'react-router-dom'

function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='w-5/6 m-auto mt-7 md:mt-8'>
            <nav className='flex items-center justify-between md:items-start'>
                <h1 className='text-xl font-cinzel md:text-3xl lg:text-4xl'>sugar rush</h1>
                
                <div className='block cursor-pointer md:hidden md:overflow-hidden'>
                <img
                    src={menuIcon}
                    className='w-7'
                    onClick={() => setToggleMenu(true)}
                />
                </div>

                <div className='hidden md:block'>
                    <ul className='text-base font-quattrocento flex flex-row items-center gap-8 lg:gap-12'>
                        <Link to='/' className='mb-8 cursor-pointer hover:text-pink transition-all'>Discover</Link>
                        <Link to='recipes' className='mb-8 cursor-pointer hover:text-pink transition-all'>Recipes</Link>
                        <Link to='about' className='mb-8 cursor-pointer hover:text-pink transition-all'>About</Link>
                        <Link to='contact' className='mb-8 cursor-pointer bg-pink  py-2 px-6 rounded-full text-white border border-pink hover:text-pink hover:bg-white transition-all'>Contact</Link>
                    </ul>
                </div>

            </nav>

            {toggleMenu &&
                <MenuModal
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                />
            }
        </div>
    )
}

export default Navbar