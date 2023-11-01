import React, { useState } from 'react'
import { testimonialsData } from '../assets/data/testimonailsData'
import previousArrow from '../assets/images/previous-arrow.svg'
import nextArrow from '../assets/images/next-arrow.svg'

function Testimonials() {
    const [testimonialsList, setSetTestimonialsList] = useState(testimonialsData)
    const [testimonyId, setTestimonyId] = useState(1)

    const paragraphCharacter = 250
    const [paragraphLength, setParagraphLength] = useState(paragraphCharacter)

    const nextHandler = () => {
        if (testimonyId > testimonialsList.length - 1) {
            setTestimonyId(1)
        }

        else if (testimonyId < testimonialsList.length) {
            setTestimonyId(testimonyId + 1)
        }
    }

    const previousHandler = () => {
        if (testimonyId === 1) {
            setTestimonyId(testimonialsList.length)
        }

        else if (testimonyId <= testimonialsList.length) {
            setTestimonyId(testimonyId - 1)
        }
    }

    return (
        <div className='w-5/6 m-auto mb-20 text-center flex flex-col items-center md:mb-28 lg:mb-32'>
            <h3 className='font-cinzel text-xl mb-8 md:text-3xl lg:text-4xl md:mb-12 lg:mb-14'>Testimonials</h3>

            <div className='flex flex-col items-center md:relative'>

                <div className='md:m-auto md:w-3/4 lg:w-2/3 '>
                {
                    testimonialsList.filter(item => item.id === testimonyId).map(item => (
                        <div key={item.id} className='flex flex-col items-center mb-8 md:mx-10'>
                            <img
                                src={item.image}
                                className='w-12 h-12 rounded-full object-cover mb-4'
                            />
                            <h5 className='font-quattrocento text-sm font-bold capitalize mb-4 md:text-base'>{item.name}</h5>
                            <p className='text-sm md:text-base'>{item.review.substring(0, paragraphLength)}
                                {item.review.length > paragraphCharacter && paragraphLength === paragraphCharacter ? <span>...</span> : ''}
                                {item.review.length > paragraphCharacter && paragraphLength === paragraphCharacter ?
                                    <span
                                        className='text-pink cursor-pointer hover:opacity-50'
                                        onClick={() => setParagraphLength(item.review.length)}
                                    >Read More
                                    </span> :
                                    ''
                                }
                                {
                                    item.review.length > paragraphCharacter && paragraphLength !== paragraphCharacter ?
                                        <span
                                            className='text-pink cursor-pointer hover:opacity-50'
                                            onClick={() => setParagraphLength(paragraphCharacter)}
                                        >Read Less
                                        </span> :
                                        ''
                                }
                            </p>
                        </div>
                    ))
                }
                </div>

                <div className='w-[70px] flex items-center justify-between'>
                    <div
                        className='w-8 h-8 bg-pink flex items-center justify-center rounded-full cursor-pointer transition-all hover:opacity-50 md:absolute md:w-10 md:h-10  md:top-1/2 md:left-0 md:-translate-y-1/2'
                        onClick={previousHandler}>
                        <img
                            src={previousArrow}
                            className='w-6 mr-[1px]'
                        />
                    </div>
                    <div
                        className='w-8 h-8 bg-pink flex items-center justify-center rounded-full cursor-pointer transition-all hover:opacity-50 md:absolute md:w-10 md:h-10 md:top-1/2 md:right-0 md:-translate-y-1/2'
                        onClick={nextHandler}>
                        <img
                            src={nextArrow}
                            className='w-6 ml-[1px]'
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Testimonials