import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16' >
        <div>
          1
        </div>
        <div>
          <ul className='mb-3'>
            <h1 className=' mb-4 font-extrabold text-xl'>Delivery Time</h1>
            <li className=' text-gray-200 font-bold' >Sunday - Monday</li>
            <li className=' text-gray-400 text-sm' >10.00 AM - 10.00 PM</li>
          </ul>
          <ul className='mb-0'>
            <li className=' text-gray-200 font-bold' >Sunday - Monday</li>
            <li className=' text-gray-400 text-sm' >10.00 AM - 10.00 PM</li>

          </ul>
        </div>
        <div>
          <ul className='mb-0'>
            <h1 className=' mb-2 font-extrabold text-xl'>Contact</h1>
            <li className=' text-gray-200 font-bold' >Location</li>
            <li className=' text-gray-400 text-sm' >10.00 AM - 10.00 PM</li>
          </ul>
          <ul className='mb-0'>
            <li className=' text-gray-200 font-bold' >Phone</li>
            <li className=' text-gray-400 text-sm' >10.00 AM - 10.00 PM</li>

          </ul>
          <ul className='mb-0'>
            <li className=' text-gray-200 font-bold' >Email</li>
            <li className=' text-gray-400 text-sm' >10.00 AM - 10.00 PM</li>

          </ul>
        </div>
        <div>
          <ul className='mb-5'>
            <h1 className=' mb-2 font-extrabold text-xl'>Newsletter</h1>
            <li className=' text-gray-400 text-sm' >Subscribe our newsletter</li>
          </ul>
          <div className=''>
            <input type="email" placeholder='Enter your email' className=' text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-5 focus:outline-none' />
            <button className=' sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mt-3 bg-teal-400 hover:bg-teal-400 duration-300 px-5 py-2.5 font-[Poppins rounded-md text-white'>Subscribe</button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer