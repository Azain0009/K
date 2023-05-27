import React from 'react'

const Footer = () => {
  return (
    // <div style={{backgroundColor:"#4716BA"}}>
    //     <div className="flex justify-between p-5 max-w-8xl text-white">
    //         <p>&copy; Kozo2022</p>
    //         <div className="flex  gap-5">
    //             <p>Privacy Policy</p>
    //             <p>Terms & Conditions</p>
    //         </div>
    //     </div>
        
    // </div>

<div style={{backgroundColor:"#4716BA"}}>
<div className="flex flex-col md:flex-row justify-between p-5 max-w-8xl text-white">
  <p className="mb-4 md:mb-0">&copy; Kozo2022</p>
  <div className="flex  gap-5">
    <p>Privacy Policy</p>
    <p>Terms & Conditions</p>
  </div>
</div>
</div>

  )
}

export default Footer