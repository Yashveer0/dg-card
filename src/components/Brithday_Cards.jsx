import React from 'react'
import img_scr from '../assets/Bday_img/7001.jpeg'
import img_scr2 from '../assets/Bday_img/7002.jpeg'
import { Card } from './Card'

export function BrithdayCards(props) {
    

    return (
        <>
            <Card 
            img_src={img_scr}
            h1="7001 Rs 699"
            seeCard="https://b-day-demo-no-7001.netlify.app/"
            orderCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Order%20Card%20No%207001."
            

            />
            <Card 
            img_src={img_scr2}
            h1="7002 Rs 699"
            seeCard="https://bday-card-demo-no-7002.netlify.app/"
            orderCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Order%20Card%20No%207002."
            

            />
        </>
    )
}
