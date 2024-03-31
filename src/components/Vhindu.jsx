import React from 'react'
import { Vcard } from './Vcard'

import v8001 from '../video/bday_video/7001.mp4'

export function Vhindu(props) {
    

    return (
        <>
            <Vcard v_src={v8001} 
             h1="8001 Rs Pay from your heart"
             seeCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Know%20More%Card%20No%20v8001"
             orderCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Order%20Card%20No%20v8001."
             
             />
        </>
    )
}
