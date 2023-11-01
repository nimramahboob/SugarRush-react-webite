import React, { useState } from 'react'
import { recipesData } from '../assets/data/recipesData'
import { Link } from 'react-router-dom'

function PopularRecipes() {
    const [recipesList, setRecipesList] = useState(recipesData)

    return (
        <div className='w-5/6 m-auto flex flex-col items-center mb-20 md:mb-28 lg:mb-32'>
            <h3 className='font-cinzel text-xl mb-8 md:text-3xl lg:text-4xl'>Popular Recipes</h3>

            <div className='gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 w-full'>
                {recipesList.slice(0, 6).map(item => (
                    <div key={item.id}
                    className='shadow-lg rounded-2xl cursor-pointer transition-all hover:scale-105'>
                        <img 
                        src={item.image}
                        className='object-cover w-full h-60 rounded-t-2xl'
                        />
                        <p className='text-sm font-quattrocento capitalize text-center py-6 mb-8 sm:mb-0 md:text-base'>{item.name}</p>
                    </div>
                ))}
            </div>

            <Link 
            to='/recipes' 
            className='font-quattrocento text-sm bg-pink py-3 px-12 rounded-full text-white border border-pink 
            transition-all hover:bg-white hover:text-pink sm:mt-8 md:mt-12 md:text-base md:px-14 md:py-4'
            >
                View more
            </Link>
        </div>
    )
}

export default PopularRecipes