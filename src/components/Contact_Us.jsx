import React from 'react'
import fb from '../assets/facebook_icon.png'
import insta from '../assets/insta_icon.png'
import wts from '../assets/wts_icon.png'

export function ContactUs(props) {
    

    return (
        <>
    <div className="h-[70vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <div className="mb-4">
          <p className="text-gray-600">
            Feel free to reach out to us with any questions or inquiries. We'd love to hear from you!
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">
            Email: <a href="mailto:your.email@example.com">dg3dcard@gmail.com</a>
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">
            Phone: <a href="tel:7701832064">7701832064</a>
          </p>
        </div>
        <div className="mb-4">
          <p className="text-gray-600">
            Address: New Ashok Nagar 110096, Delhi, india
          </p>
        </div>
        <div className="flex space-x-4">
          
            <a target="_blank" href='https://www.facebook.com/yashmoriyavines/'>
            <img width={60} className=' lg:w-[100px] md:w-[100px]' src={fb} alt="" />
                 </a>
         
          
          <a target="_blank" href="https://www.instagram.com/digital_3d_card?igsh=MWo5dHNjdjNhdnR1eA==">
                    <img width={60} className=' lg:w-[100px] md:w-[100px]' src={insta} alt="" />
                    </a>

                    <a target='_blank' href="https://api.whatsapp.com/send?phone=7701832064&text=Hello%20there!">
                    <img width={60} className=' lg:w-[100px] md:w-[100px]' src={wts} alt="" />
                    </a>
        </div>
      </div>
    </div>
        </>
    )
}
