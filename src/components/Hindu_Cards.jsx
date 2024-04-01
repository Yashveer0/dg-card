import React from 'react'
import { Card } from './Card'
import card8001 from '../assets/hinduCard_img/8001.jpeg'
import card8002 from '../assets/hinduCard_img/8002.jpeg'
import card8003 from '../assets/hinduCard_img/8003.jpeg'
export function HinduCards(props) {
    

    return (
        <>

            <Card 
            img_src={card8001}
            h1="8001 Rs 699"
            seeCard="https://wedding-card-demo-no-8001.netlify.app/"
            orderCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Order%20Card%20No%208001."
            />

            {/* card 2 */}
            <hr />
            <Card 
            img_src={card8002}
            h1="8002 Rs 699"
            seeCard="https://wedding-card-demo-no-8002.netlify.app/"
            orderCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Order%20Card%20No%208002."
            />
            <hr />

            {/* card 3 */}
            <Card 
            img_src={card8003}
            h1="8003 Rs 699"
            seeCard="https://wedding-card-demo-no-8003.netlify.app/"
            orderCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Order%20Card%20No%208003."
            />
        </>
    )
}
