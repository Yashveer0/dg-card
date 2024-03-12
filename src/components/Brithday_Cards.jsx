import React from 'react'
import img_scr from '../assets/Bday_img/7001.jpeg'
import { Card } from './Card'

export function BrithdayCards(props) {
    

    return (
        <>
            <Card 
            img_src={img_scr}
            h1="7001 Just Rs 999/-"
            seeCard="https://b-day-demo-no-7001.netlify.app/"
            orderCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Order%20Card%20No%207001."
            

            />
        </>
    )
}
