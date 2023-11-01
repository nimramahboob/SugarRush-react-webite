import React, { useState } from 'react'

function Contact() {
  const [usersArray, setUsersArray] = useState([])
  const [user, setUser] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [empty, setEmpty] = useState(false)

  const onchangeHandler = (e) => {

    setUser(prev => ({...prev, [e.target.name] : e.target.value})) 

  }

  const onsubmitHandler = (e) => {
    e.preventDefault()

    if(user.name === '' || user.email === '') {
      setEmpty(true)
    }
    
    if(user.name !== '' &&  user.email !== '' && user.message !== '') {
      setUsersArray(prev => [...prev, user])
    localStorage.setItem('users', JSON.stringify(usersArray))

    setUser({
      name: '',
      email: '',
      message: ''
    })
    } 
    
  }

  console.log(usersArray)

  return ( 
    <section className='w-5/6 m-auto mt-20 mb-20 md:w-4/6 lg:w-3/6 lg:mb-40'>


      <div className='text-center mb-28 md:mb-32 lg:mb-36'>
        <h3 className='font-cinzel text-xl mb-4 sm:2xl: md:text-3xl lg:text-4xl'>Thank you for visiting our  website!</h3>
        <p className='text-base text-gray-500 leading-6'> If you have any questions, concerns, or feedback, we would love to hear from you. Please feel free to reach out to us using the contact form provided.</p>
      </div>

      <div className='md:bg-very-light-pink md:px-10 md:py-12 md:rounded-lg'>

        <form onSubmit={onsubmitHandler} className=' flex flex-col items-center'>
          <div className='flex flex-col mb-6 w-full'>
            <label htmlFor='name' className='font-quattrocento uppercase mb-2'>username</label>
            <input
              id='name'
              type='text'
              placeholder='Enter your username'
              className='shadow-lg w-full px-6 py-5 rounded-lg mb-2'
              name='name'
              value={user.name}
              onChange={onchangeHandler}
            />
            {empty && user.name === '' ? <p className='text-sm text-pink'>Enter your username</p> : ''}
          </div>

          <div className='flex flex-col mb-6 w-full'>
            <label htmlFor='email' className='font-quattrocento uppercase mb-2'>email</label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email'
              className='shadow-lg w-full px-6 py-5 rounded-md mb-2'
              name='email'
              value={user.email}
              onChange={onchangeHandler}
            />
            {empty && user.email === '' ? <p className='text-sm text-pink'>Enter your email</p> : ''}
          </div>

          <div className='flex flex-col mb-6 w-full'>
            <label htmlFor='message' className='font-quattrocento uppercase mb-2'>message</label>
            <textarea
              id='message'
              type='text'
              rows={5}
              cols={33}
              placeholder='Enter message...'
              className='shadow-lg w-full px-6 py-5 rounded-md mb-2'
              name='message'
              value={user.message}
              onChange={onchangeHandler}
            />
            {empty && user.message === '' ? <p className='text-sm text-pink'>Enter your message</p> : ''}
          </div>

          <button type='submit' className='bg-pink py-4 px-20 rounded-full text-white mt-8'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact