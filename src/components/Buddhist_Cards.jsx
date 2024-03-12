import React from 'react'
import { Card } from './Card'

import card6001 from '../assets/bhudda_img/card6001.jpeg'
export function BuddhistCards(props) {
    

    return (
        <>
            <Card 
            img_src={card6001}
            h1="8001 Just Rs 999/-"
            seeCard="https://wedding-card-demo-no-6001.netlify.app/"
            orderCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Order%20Card%20No%206001."
            />
        </>
    )
}
