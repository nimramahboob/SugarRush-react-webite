import React, { useEffect, useState } from 'react'
import { recipesData } from '../assets/data/recipesData'
import Recipe from './Recipe'

function RecipesList({ filterType, searchParams }) {
    const [recipesList, setRecipesList] = useState(recipesData)
    const [viewNumber, setViewNumber] = useState(6)

    const displayRecipes = filterType ? recipesList.filter(item => item.type === filterType) : recipesList

    useEffect(() => {
        setViewNumber(6)
    }, [searchParams])

    return (
        <div className='w-5/6 m-auto flex flex-col items-center mb-20 md:mb-28 lg:mb-32'>

            {/* recipes list display */}
            <div className='gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 w-full'>
                {displayRecipes.slice(0, viewNumber).map(item => (
                    <Recipe item={item} />
                ))}
            </div>

            {/* view more recipes display */}
            {displayRecipes.length > 6 && viewNumber < displayRecipes.length &&
                <button
                    onClick={() => setViewNumber(viewNumber < displayRecipes.length ? viewNumber + 6 : viewNumber)}
                    className='font-quattrocento text-sm bg-pink py-3 px-12 rounded-full text-white border border-pink 
            transition-all hover:bg-white hover:text-pink sm:mt-8 md:mt-12 md:text-base md:px-14 md:py-4'
                >
                    View more
                </button>
            }
            
            {/* no more recipes display */}
            {displayRecipes.length > 6 && viewNumber > displayRecipes.length &&
                <div
                    onClick={() => setViewNumber(viewNumber < displayRecipes.length ? viewNumber + 6 : viewNumber)}
                    className='font-quattrocento text-sm bg-white py-3 px-12 rounded-full text-pink 
                    border border-pink sm:mt-8 md:mt-12 md:text-base md:px-14 md:py-4'
                >
                    No more recipes
                </div>
            }

        </div>
    )
}

export default RecipesList