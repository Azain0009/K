import React from 'react'

const Management = () => {
  return (
<div className='flex flex-col-reverse  md:flex-row mb-16 md:mb-32 mx-auto max-w-7xl justify-between p-5'>
  <div className="my-auto">
    <img src="./images/ban.svg" alt="" />
  </div>
  <div className="flex flex-col justify-center mb-8 md:text-left text-center">
    <h1 className='text-3xl md:text-5xl font-black mb-8 max-w-lg leading-relaxed'>Simplified Expense Management</h1>
    <p className='max-w-lg text-left mb:text-center mb-5 text-gray-700'>Kozo is an expense tracking app that will untangle all your financial woes and empower you to be your own accountant. Moreover, at Kozo, we are industry agnostic. This means that we welcome anyone from any industry to use this expense management solution. We have designed it so that Kozo can fit into any business model.</p>
    <div className="flex flex-col gap-3 text-left mb:text-center">
      <div className="flex gap-2 ">
        <div><img src="./images/check.png" alt="" /></div>
        <p className='max-w-lg'>Streamline your budgeting, expenses and billing all on one platform.</p>
      </div>
      <div className="flex gap-2">
        <div><img src="./images/check.png" alt="" /></div>
        <p className='max-w-lg'>Streamline your budgeting, expenses and billing all on one platform.</p>
      </div>
      <div className="flex gap-2">
        <div><img src="./images/check.png" alt="" /></div>
        <p className='max-w-lg'>Streamline your budgeting, expenses and billing all on one platform.</p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Management