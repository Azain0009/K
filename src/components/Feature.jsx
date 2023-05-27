import React from 'react'

const Feature = ({heading, img}) => {
  return (
    <div className='flex gap-4 align-center'>
        <div className="flex gap-2 flex-col text-right leading-6">
        <h1 className='font-semibold text-base'>{heading}</h1>
        <p className='max-w-xs text-base' style={{color:'#5E596C'}}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
        <img src={img} alt="" />
        </div>
    </div>
  )
}

export default Feature