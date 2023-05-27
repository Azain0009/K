import React from 'react'

const Testimonial = () => {
  return (
    <div className='flex flex-col text-center p-3 md:p-5 mb-8 md:mb-16 mx-auto gap-3'>
        <img src="./images/v.jpg" className='rounded-full w-24 h-24 mx-auto' style={{objectFit:"cover"}} alt="" />
        <h2 className='font-semibold' >Lorem</h2>
        <p className="leading" style={{color: '#5E596C'}}>Ceo</p>
        <p className='max-w-xs text-center md:text-left' style={{color: '#5E596C'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio inventore assumenda ipsam laudantium sapiente!</p>
    </div>
  )
}

export default Testimonial