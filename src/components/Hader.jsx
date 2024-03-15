import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/logo.png'

export function Hader(props) {
    

    return (
        <>
            <div className=' sticky top-0'>
                <ul className='flex justify-evenly bg-blue-300 py-2 sm:font-thin sm:text-xs md:text-xl lg:text-xl text-black '>
                    

                    <Link to="/home">
                    <li><img width={80} src={Logo} alt="Logo" /></li>
                    </Link>

                    <Link to="/home">
                    <li className='hover:font-bold hover:text-red-600'>Home</li>
                    </Link>

                    <Link to="/service">
                    <li className='hover:font-bold hover:text-red-600' >Service</li>
                    </Link>

                    <Link to="/pay">
                    <li className='hover:font-bold hover:text-red-600' >Pay <span className='text-red-600'>&#9829;</span></li>  
                    </Link> 

                    <Link to="/contact">
                    <li className='hover:font-bold hover:text-red-600' >Contact</li>  
                    </Link>   

                                  
                </ul>
            </div>
        </>
    )
}
