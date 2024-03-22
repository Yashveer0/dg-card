import React from 'react'
import {Card }from './Card.jsx'
import card5001 from '../assets/Enge_img/5001.jpeg'

export function Engagement(props) {
    

    return (
        <>  
        
            <Card
            img_src={card5001}
            h1="5001 Rs Pay from your heart"
            seeCard="https://demo-5001.netlify.app/"
            orderCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Order%20Card%20No%205001."
            />
        </>
    )
}
