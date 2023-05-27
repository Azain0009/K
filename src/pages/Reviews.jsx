import React from 'react'
import Testimonial from '../components/Testimonial'


const Reviews = () => {
  return (
    <>

    <div className="p-5 m-8 md:m-16 max-w-8xl mx-auto">
  <h1 className="text-3xl md:text-5xl text-center font-black mb-8 md:mb-16">Read Our Rave Reviews</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    <Testimonial />
    <Testimonial />
    <Testimonial />
  </div>
</div>

    </>
  )
}

export default Reviews