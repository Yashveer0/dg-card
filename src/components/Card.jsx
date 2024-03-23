import React from 'react'
import { Link } from 'react-router-dom'
import img_8001 from '../assets/hinduCard_img/8001.jpeg'

export function Card({img_src, h1, seeCard, orderCard}) {
    

    return (
        <>
            <div className='m4 bg-black' >
               <h1 className='text-white text-center font-bold text-xl py-2'>Crad No {h1}</h1>
                <div className='flex items-center justify-center rounded-md ' >
                    <a href={seeCard}>
                    <img className='w-[250px] rounded-xl max-h-[400px] m-2' src={img_src} alt="" />
                    </a>
                </div>
                <div className='flex items-center justify-evenly py-2  '>
                    <a target='_blank' href={seeCard}>
                    <button className='bg-blue-400 px-4 p-2 text-xl rounded-lg hover:bg-blue-700' >See Card</button>
                    </a>

                    <a target='_blank' href={orderCard}>
                    <button className='bg-green-400 px-4 text-xl p-2 rounded-lg hover:bg-blue-700' >Order Card</button>
                    </a> 
                    </div>
                 
                {/* <Button>
                    See Card
                </Button>
                

                
                <Button>
                    Order Card
                </Button> */}
                
            </div>
        </>
    )
}
