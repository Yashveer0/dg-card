import React from 'react'
import img9001 from '../assets/muslim_img/9001.jpeg'
import img9002 from '../assets/muslim_img/9002.jpeg'
import { Card } from './Card'

export function MuslimCards(props) {
    

    return (
        <>
            <Card
            img_src={img9001}
            h1="9001 Rs Pay from your heart"
            seeCard="https://m-wedding-card-demo-no-9001.netlify.app/"
            orderCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Order%20Card%20No%209001."
            
            />
            <Card
            img_src={img9002}
            h1="9002 Rs Pay from your heart"
            seeCard="https://m-weedind-card-no-9002.netlify.app/"
            orderCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Order%20Card%20No%209002."
            
            />
        </>
    )
}
