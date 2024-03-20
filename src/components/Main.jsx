import React from 'react'
import { Link } from 'react-router-dom'
export  function Main(props) {
    

    return (
        <>
        <div className=' gap-4 flex-col h-[70vh] flex items-center justify-center'>
      
        <Link to="/engagement">
     <button
      className="bg-blue-500 w-56 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transform transition-transform duration-300 shadow-md"
    > Engagement Card </button>
    </Link>

      <Link to="/hinduCard">
     <button
      className="bg-blue-500 w-56 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transform transition-transform duration-300 shadow-md"
    > Hindu Wedding Card </button>
    </Link>


      <Link to="/buddhist">
     <button 
      className="bg-blue-500 w-56 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transform transition-transform duration-300 shadow-md"
    > Buddhist Wedding Card </button>
    </Link>

    <Link to="/muslim">
<button
      className="bg-blue-500 w-56 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transform transition-transform duration-300 shadow-md"
    > Muslim Wedding Card </button>
 </Link>

 <Link to="/birthday">
<button
      className="bg-blue-500 w-56 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transform transition-transform duration-300 shadow-md"
    > Birthday Card </button>
   </Link>
</div>
        </>
    )
}
