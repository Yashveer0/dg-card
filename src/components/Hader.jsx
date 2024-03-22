import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import Logo from '../assets/logo.png'

import '../App.css'
export function Hader(props) {
    

    return (
        <>
            <div className=' sticky top-0 z-20'>
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
            

            <div className='bg-green-500  flex  items-center justify-end text-xl  fixed text-white top-[7rem] z-20 w-[2rem] px-1 rounded-r-[0.5rem] transform-w duration-300 hover:w-[5rem] h-[2rem]'>
             <a href="https://api.whatsapp.com/send?phone=7701832064&text=Hello%20there!"><  FaWhatsapp /></a>  
            </div>

            {/* insta */}
            <div className='bg-red-500  flex  items-center justify-end text-xl  fixed text-white top-[10rem] z-20 w-[2rem] px-1 rounded-r-[0.5rem] transform-w duration-300 hover:w-[5rem] h-[2rem]'>
             <a href="https://www.instagram.com/digital_3d_card?igsh=MWo5dHNjdjNhdnR1eA=="><  FaInstagram /></a>  
            </div>

            {/* fb */}
            <div className='bg-blue-500  flex  items-center justify-end text-xl  fixed text-white top-[13rem] z-20 w-[2rem] px-1 rounded-r-[0.5rem] transform-w duration-300 hover:w-[5rem] h-[2rem]'>
             <a href="https://www.facebook.com/yashmoriyavines/"><  CiFacebook /></a>  
            </div>
        </>
    )
}
