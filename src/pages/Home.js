import React from 'react'
import HomePageCategories from '../components/HomePageCategories'
import Testimonials from '../components/Testimonials'
import Main from '../components/Main'
import PopularRecipes from '../components/PopularRecipes'

function Home() {
    return (
        <section className=''>
            <Main />
            <HomePageCategories />
            <PopularRecipes />
            <Testimonials />
        </section>
    )
}

export default Home