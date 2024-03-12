import React from 'react'
import ads_video from '../assets/ads_Video.mp4'

import img1 from '../assets/Demo_img/page2.jpeg'
import img2 from '../assets/Demo_img/page1.jpeg'
import img3 from '../assets/Demo_img/page3.jpeg'
import img4 from '../assets/Demo_img/page4.jpeg'

export function Service(props) {
    

    return (
        <>
            <div className='flex text-[12px] md:text-xl lg:text-xl flex-col mt-2 items-center justify-center text-center'>
                <h >We are making your wedding invitation card special in 24 hours.</h>
                <video className='mt-2 mb-2' width={300} src={ads_video} controls ></video>

                <h1 className='mt-2 text-red-500 text-xl animate-bounce font-mono'>Features</h1>
                <ul className='mt-2 text-[12px] md:text-xl lg:text-xl mb-4'>
                    
                    <li>Every card have one background song you can change it.</li>
                    <li>Every card shows your guest's name.</li>
                    <li>Image can be added to any card.</li>
                    <li>Most importantly, include your wedding venue on this card.</li>
                    <li>We are including your wedding location as a Google Map.</li>
                    <li>Every card looks like a 3D card.</li>
                    <li>Every card is a digital card, so you can use it for an unlimited time.</li>
                    <li>Every card is vailed minimum of two months.</li>
                    <li>In just one day, we will personalize your wedding invitation card.</li>


                </ul>
                <h1 className='mt-2 text-xl text-red-500  animate-bounce font-mono'>See this</h1>
                 
                <div className='mt-2 mb-2'>
                    <h1 className='text-2xl mb-2 '>Song and Guest's Name</h1>
                    <img width={300} src={img1} alt="" />
                </div>

                <div className='mt-2 mb-2'>
                    <h1 className='text-2xl mb-2 '>Song and Guest's Name</h1>
                    <img width={300} src={img2} alt="" />
                </div>

                <div className='mt-2 mb-2'>
                    <h1 className='text-2xl mb-2 '>images and 3d animation</h1>
                    <img width={300} src={img3} alt="" />
                </div>

                <div className='mt-2 mb-2'>
                    <h1 className='text-2xl mb-2 '>wedding Location Map</h1>
                    <img width={300} src={img4} alt="" />
                </div>
            </div>
        </>
    )
}
