import React from 'react'
import { Zoom } from 'react-reveal';
import Flip from 'react-reveal/Flip';

function placed() {
  return (
    <div>
        {/* <div className='py-32' style={{display:'flex' ,justifyContent:'center',alignItems:'center' ,fontSize:'64px'}}> */}
        <Zoom top>
        <h1 className="flex items-center my-8">
        <span aria-hidden="true" className="grow bg-gray-200 rounded h-0.5 dark:bg-gray-700/75" />
        <span className="text-lg font-large mx-3 font-72">Your Order Is Placed</span>
        <span className="text-lg font-large mx-3 font-72">We Will Deliver It Shortly</span>
        <span aria-hidden="true" className="grow bg-gray-200 rounded h-0.5 dark:bg-gray-700/75" />
      </h1>
        </Zoom>
        {/* </div> */}
    </div>
  )
}

export default placed