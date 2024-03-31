import React from 'react'
import { Link } from 'react-router-dom'

export function Hero(props) {
    

    return (
        <>
             <div className=' gap-4 flex-col h-[70vh] flex items-center justify-center'>
      
      <Link to="/main2">
   <button
    className="bg-blue-500 w-56 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transform transition-transform duration-300 shadow-md"
  > Video Invitation Card </button>
  </Link>

    <Link to="/main">
   <button
    className="bg-blue-500 w-56 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transform transition-transform duration-300 shadow-md"
  > Unique Invatiton Card </button>
  </Link>


   

 


</div>
        </>
    )
}
