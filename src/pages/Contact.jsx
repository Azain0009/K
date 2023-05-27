import React from 'react'

const Contact = () => {
  return (
    <div className='p-24 md:p-36  mx-auto' style={{backgroundColor:"#4716BA"}}>
        <div className="flex text-white font-semibold justify-center">
            <h1 className='text-3xl md:text-5xl mb-7 mx-auto'>Ready To Simplify Your Finances?</h1>
        </div> 
        <div className="flex flex-col items-center  text-white gap-3 sm:flex-row sm:justify-left md:justify-between">
     <p className="text-center ">hello@gmail.com</p>
     <p className="text-center">9182948901</p>
  </div>
    </div>
  )
}

export default Contact