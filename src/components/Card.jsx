import React from 'react'

const Card = ({name,post}) => {
  return (
 
  <div className="flex flex-col md:flex-row gap-6 items-center">
  <img src="./images/v.jpg" className="rounded-full w-24 h-24 mx-auto md:mx-0" style={{ objectFit: "cover" }} alt="" />
  <div className="">
    <h2 className="font-semibold text-lg text-center md:text-left">{name}</h2>
    <p className="text-base text-center md:text-left" style={{ color: '#5E596C' }}>{post}</p>
  </div>
</div>

  )
}

export default Card