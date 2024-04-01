import React from 'react'

import dil from '../assets/dil.gif'
import pay from '../assets/pay.jpeg'
export function Pay(props) {
    

    return (
        <>

           <div className='mt-2 flex items-center justify-center flex-col'>
            <h1 className='text-xl font-bold animate-bounce'>Pay Using any Upi App</h1>
            <img width={100} src={dil} alt="" />
            <img width={300} src={pay} alt="" />
            <li className='p-2 mt-2 text-left'>Take screen sort, then pay by any UPI app like Paytm, Phone, Amazon- Pay, G-Pay, Cred, etc.</li>
            <li className='p-2 text-left'>Please check before making a payment. Yash Veer is the payment marchent name.</li>
            <li className='p-2 text-left'>After making the payment, please send the screen shot to our WhatsApp number, 7701832064. It will help to maintain records.</li>
            </div>

           
            
            


        </>
    )
}
