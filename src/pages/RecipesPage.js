import React from 'react'
import RecipePageCategories from '../components/RecipePageCategories'
import Recipes from '../components/RecipesList'
import { useSearchParams } from 'react-router-dom'

function RecipesPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filterType = searchParams.get('type')

  return (
    <section className='w-5/6 m-auto mt-12'>
       <h3 className='font-cinzel text-xl text-center mb-8 md:text-3xl lg:text-4xl'>Explore our recipes</h3>
      <RecipePageCategories 
      setSearchParams={setSearchParams}
      filterType={filterType}
      />
      <Recipes 
      filterType={filterType}
      searchParams={searchParams}
      />
    </section>
  )
}

export default RecipesPage