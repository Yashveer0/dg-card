import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

import fb from '../assets/facebook_icon.png'
import insta from '../assets/insta_icon.png'
import wts from '../assets/wts_icon.png'


export function Footer(props) {
    

    return (
        <>
            <div className='flex items-center justify-evenly bg-blue-300'>
                
            
                <img width={180} src={Logo} alt="Logo" />
               
                <ul className='  py-2 sm:font-thin sm:text-xs md:text-xl lg:text-xl text-black text-center '>
                    
                    <Link to="/home">
                    <li className='hover:font-bold hover:text-red-600'>Home</li>
                    </Link>
                    
                    <Link to="/service">
                    <li className='hover:font-bold hover:text-red-600' >Service</li>
                    </Link>

                    <Link to="/contact">
                    <li className='hover:font-bold hover:text-red-600' >Contact Us</li>                   
                    </Link>
                    <ul className=' flex justify-evenly '>
                    
                    <a target="_blank" href='https://www.facebook.com/yashmoriyavines/'>
                    <li><img className=' lg:w-[100px] md:w-[100px]' src={fb} alt="" /></li>
                    </a>
                    
                    <a target="_blank" href="https://www.instagram.com/digital_3d_card?igsh=MWo5dHNjdjNhdnR1eA==">
                    <li><img className=' lg:w-[100px] md:w-[100px]' src={insta} alt="" /></li>
                    </a>
                    <a target='_blank' href="https://api.whatsapp.com/send?phone=7701832064&text=Hello%20there!">
                    <li><img className=' lg:w-[100px] md:w-[100px]' src={wts} alt="" /></li>
                    </a>


                    </ul>
                </ul>
                
                
            </div>

            <div className='flex bg-black  text-white items-center justify-center'>
                <p className='text-[12px] p-1 font-thin'>Copyright © 2024 Digital  invatiton card . All rights reserved.</p>
                </div>
        </>
    )
}
