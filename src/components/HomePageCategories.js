import React, { useState } from 'react'
import { categoriesData } from '../assets/data/categoriesData'

function Categories() {
    const [categriesList, setCategriesList] = useState(categoriesData)

    return (
        <div className='w-5/6 m-auto mb-20 flex flex-col items-center md:mb-28 lg:mb-32'>
            <h3 className='font-cinzel text-xl mb-8 md:text-3xl lg:text-4xl'>Categories</h3>

            <div className='flex items-center justify-center flex-wrap gap-3 md:gap-4 lg:gap-6'>
                {categriesList.map(item => (
                    <div key={item.id}
                        className='flex flex-col items-center'>
                        <div className='w-14 h-14 bg-light-pink flex justify-center items-center rounded-full mb-4 md:w-16 md:h-16 lg:w-20 lg:h-20'>
                            <img
                                src={item.image}
                                className='text-black w-7 md:w-8 lg:w-9'
                            />
                        </div>
                        <p className='text-xs md:text-sm'>{item.name}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Categories