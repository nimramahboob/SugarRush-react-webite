import React from 'react'
import aboutpageSubImage from '../assets/images/donut-1.jpg'

function About() {
  return (
    <section className='mt-10 md:mt-8'>

      {/* <div className='about-main relative flex justify-center items-center mb-14 md:mb-20 lg:mb-32'>
        <div className='bg-pink absolute top-0 right-0 left-0 bottom-0 opacity-60 -z-10'></div>

        <div className='text-white text-center w-3/4 m-auto'>
          <h2 className='font-cinzel font-bold text-4xl mb-2 sm:text-5xl md:text-6xl lg:text-7xl'>About Sugar Rush</h2>
          <p className='text-base md:text-lg lg:text-xl'>The ultimate destination for all things sweet and indulgent</p>
        </div>
      </div> */}

      <div className='w-5/6 m-auto mt-10 mb-14 md:mb-20  md:mt-16 lg:mt-24 lg:mb-32'>
        <div className='text-black text-center'>
          <h2 className='font-cinzel font-bold text-3xl mb-2 sm:text-4xl md:text-5xl lg:text-6xl'>About Sugar Rush</h2>
          <p className='text-base md:text-lg lg:text-xl'>The ultimate destination for all things sweet and indulgent</p>
        </div>
      </div>

      <div className='w-5/6 m-auto grid gap-6 sm:gap-8 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-14 md:mb-20 lg:mb-32'>

        <div className='bg-light-pink text-center px-8 py-10 sm:px-16 sm:py-14 md:px-10 md:py-10'>
          <h3 className='font-cinzel text-xl text-pink mb-4 md:text-2xl'>You're in for a real sugar rush with Sugar Rush</h3>
          <p className='text-base text-gray-500 opacity-75 leading-7'>Whether you're a baking enthusiast or simply have a sweet tooth, our website is the perfect place to discover new recipes and indulge in mouthwatering desserts.</p>
        </div>

        <div className='bg-light-pink text-center py-10 px-8 sm:px-16 sm:py-14 md:px-10 md:py-10'>
          <h3 className='font-cinzel text-xl text-pink mb-4 md:text-2xl'>Featuring classic favorites and creative creations</h3>
          <p className='text-base text-gray-500 opacity-75 leading-7'>We have recipes for cakes, cookies, pies, pastries, and much more. Each recipe is carefully curated and tested to ensure that you achieve the best results every time you step into the kitchen.</p>
        </div>

        <div className='bg-light-pink text-center py-10 px-8 sm:px-16 sm:py-10 md:px-14 md:py-10'>
          <h3 className='font-cinzel text-xl text-pink mb-4 md:text-2xl'>Made with love and care</h3>
          <p className='text-base text-gray-500 opacity-75 leading-7'>We ensure that every recipe includes detailed step-by-step instructions, along with a list of ingredients and measurements. You can trust that our recipes are accurate and will help you achieve the best results in your own kitchen.</p>
        </div>

      </div>

      <div className='w-5/6 m-auto grid items-center md:grid-cols-2 mb-14 md:mb-20 lg:mb-32 shadow-lg'>
        <div className='px-8 py-8  text-gray-500 order-2 sm:px-10 sm:py-10 lg:px-16 lg:py-12 lg:leading-7'>
          <p>Feel free to explore our website at your own pace. Each recipe is accompanied by beautiful photographs that will make your mouth water. We also encourage you to share your baking successes with us by tagging us on social media or leaving comments on our recipes.</p>
          <br />
          <p>So, what are you waiting for? Let the sweet adventure begin! Start exploring our sweet recipes now and embark on a culinary journey that will delight your taste buds and impress your loved ones. Happy baking!</p>
        </div>

        <div className='h-full md:order-2'>
          <img
            src={aboutpageSubImage}
            className='sm:h-full object-cover'
          />
        </div>
      </div>
    </section>
  )
}

export default About