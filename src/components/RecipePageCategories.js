import React, { useState } from 'react'
import { categoriesData } from '../assets/data/categoriesData'
import closeIcon from '../assets/images/clear.svg'

function Categories({ setSearchParams, filterType }) {
    const [categriesList, setCategriesList] = useState(categoriesData)

    return (
        <div className='w-5/6 m-auto mb-20 flex items-center justify-center md:mb-28 lg:mb-32'>

            <div className='flex items-center justify-center flex-wrap gap-3 md:gap-4 lg:gap-6'>
                {categriesList.map(item => (

                    <div
                        key={item.id}
                        className={`py-3 px-6 flex justify-center items-center rounded-full cursor-pointer transition-all hover:bg-soft-pink md:py-3 md:px-6 md:gap-4 lg:py-3 lg:px-6 lg:gap-4 ${filterType === item.type ? 'bg-very-light-pink' : 'bg-light-pink'}`}
                        onClick={() => setSearchParams({ type: item.type })}
                    >
                        <img
                            src={item.image}
                            className='hidden md:block md:w-7 lg:w-8 order-2 fill-pink'
                        />
                        <p className='text-xs md:text-sm'>{item.name}</p>
                    </div>

                ))}

                {filterType &&
                    <div className='w-8 h-8 flex items-center justify-center bg-pink rounded-full transition-all hover:opacity-50 md:w-10 md:h-10'>
                        <img
                            src={closeIcon}
                            className='w-4 cursor-pointer md:w-6'
                            onClick={() => setSearchParams({})}
                        />
                    </div>}
            </div>

        </div>
    )
}

export default Categories