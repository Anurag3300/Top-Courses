import React from 'react';
import './Sipnner.css';

function Sipnner() {
  return (
    <div className="flex flex-col justify-center items-center space-y-2">
        <div className="spinner"></div>
        <p className='text-bgDark text-lg font-semibold'>Loading....</p>
    </div>
  )
}
export default Sipnner;

