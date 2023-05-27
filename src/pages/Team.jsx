import React from 'react'
import Card from '../components/Card'

const Team = () => {
  return (
    <>
    <div className='py-16 md:py-32 mb-16 md:mb-32 p-5' style={{backgroundColor:"#F8FBFF"}}>

    <div className='flex flex-col md:flex-row  mx-auto max-w-7xl justify-between' >
        <div className="flex flex-col justify-center p-5">
            <h1 className='text-3xl md:text-5xl text-center font-black mb-8 md:mb-32'>Our Teams And Value</h1>
            <p className='max-w-lg mb-4 text-center'  style={{color: '#5E596C'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dapibus odio at varius vestibulum. Nam sollicitudin justo sed nibh viverra, id consectetur lacus semper.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-11 gap-y-24">
            <Card name={'Albert L Morrison'} post={'CEO'}/>
            <Card name={'Saiff I. Steindler'} post={'CFO'}/>
            <Card name={"Lois W. Steindler"} post={'CTO'}/>
            <Card name={"Bruce T Wayne"} post={"Advisor"}/>

        </div>
    </div>
    </div>
    </>
  )
}

export default Team