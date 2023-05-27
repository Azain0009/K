import React from 'react'
import Feature from '../components/Feature'

const Features = () => {
  return (
    <> 
    <div className="mb-16 md:mb-32 p-5">
    <h1 className='text-3xl md:text-5xl mb-8 font-semibold text-center  p-5 mx-auto'>Tons Of Features</h1>
    <div className="flex flex-col md:flex-row gap-5 max-w-7xl mx-auto">

    <div className="flex gap-5 flex-col mx-auto">
    <div className='flex gap-4 flex-row-reverse md:flex-row items-top md:items-center'>
        <div className="flex gap-2 flex-col text-left md:text-right leading-3 md:leading-6">
        <h1 className='font-semibold text-base'>Build Multiple Pro</h1>
        <p className='max-w-xs text-base' style={{color:'#5E596C'}}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
        <img src='./images/IconHolder.png' alt="" />
        </div>
    </div>
    <div className='flex gap-4 flex-row-reverse md:flex-row items-top md:items-center'>
        <div className="flex gap-2 flex-col text-left md:text-right leading-3 md:leading-6">
        <h1 className='font-semibold text-base'>Invoice Scan & Auto-Import</h1>
        <p className='max-w-xs text-base' style={{color:'#5E596C'}}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
        <img src='./images/approval.png' alt="" />
        </div>
    </div>
    <div className='flex gap-4 flex-row-reverse md:flex-row items-top md:items-center'>
        <div className="flex gap-2 flex-col text-left md:text-right leading-3 md:leading-6">
        <h1 className='font-semibold text-base'>Inventory Tracker</h1>
        <p className='max-w-xs text-base' style={{color:'#5E596C'}}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
        <img src='./images/tracker.png' alt="" />
        </div>
    </div>
    <div className='flex flex-row-reverse md:flex-row gap-4 items-top md:items-center'>
        <div className="flex gap-2 flex-col text-left md:text-right leading-3 md:leading-6">
        <h1 className='font-semibold text-base'>Approval System with Levels</h1>
        <p className='max-w-xs text-base' style={{color:'#5E596C'}}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
        <img src='./images/invoice.png' alt="" />
        </div>
    </div>
    </div>
    
    <div className='hidden md:block'>
        <img src="./images/phone.svg" alt="" />
    </div>
    <div className="flex gap-5 flex-col mx-auto">

    <div className="flex gap-5 flex-col">
    
    <div className='flex gap-4 items-top md:items-center'>
        <div>
        <img src='./images/assign.png' alt="" />
        </div>
        <div className="flex gap-2 flex-col text-left leading-3 md:leading-6">
        <h1 className='font-semibold text-base'>Assign Project Managers</h1>
        <p className='max-w-xs text-base' style={{color:'#5E596C'}}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
    <div className='flex gap-4 items-top md:items-center'>
        <div>
        <img src='./images/dashboard.png' alt="" />
        </div>
        <div className="flex gap-2 flex-col text-left leading-3 md:leading-6">
        <h1 className='font-semibold text-base'>Dashboard</h1>
        <p className='max-w-xs text-base' style={{color:'#5E596C'}}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
    <div className='flex gap-4 items-top md:items-center'>
        <div>
        <img src='./images/duplicate.png' alt="" />
        </div>
        <div className="flex gap-2 flex-col text-left leading-3 md:leading-6">
        <h1 className='font-semibold text-base'>Duplicates Detector</h1>
        <p className='max-w-xs text-base' style={{color:'#5E596C'}}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
    <div className='flex gap-4 items-top md:items-center'>
        <div>
        <img src='./images/3rd.png' alt="" />
        </div>
        <div className="flex gap-2 flex-col text-left leading-3 md:leading-6">
        <h1 className='font-semibold text-base'>Integrations with 3rd Party Tools</h1>
        <p className='max-w-xs text-base' style={{color:'#5E596C'}}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
    </div>
    </div>
       
    </div>
    </div>
    </>
  )
}
  
  
export default Features