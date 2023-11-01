import React from 'react'

function Recipe({ item }) {
  return (
    <div key={item.id}
      className='relative shadow-lg rounded-2xl cursor-pointer transition-all hover:scale-105 bg-white mb-6 sm:mb-0'>
      <img
        src={item.image}
        className='object-cover w-full h-60 rounded-t-2xl'
      />
      <div className='pt-4 pb-6 px-6 '>
        <div>
          <h5 className='text-base font-quattrocento font-bold capitalize mb-2'>{item.name}</h5>
          <p className='text-sm text-gray-500 mb-20 '>{item.description}</p>
        </div>
        <button
          className='absolute bottom-6 left-6 font-quattrocento capitalize bg-pink text-sm inline-block text-white py-[7px] px-4 rounded-full border border-pink transition-all hover:bg-transparent hover:text-pink hover:border-pink md:text-base'
        >
          View recipe
        </button>
      </div>
    </div>
  )
}

export default Recipe