import React from 'react'
import {Vcard} from '../components/Vcard.jsx'

import v9001 from '../video/muslim_video/v9001.mp4'

export function Vmuslim(props) {
    

    return (
        <>
            <Vcard v_src={v9001} 
             h1="v9001 Rs Pay from your heart"
             seeCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Know%20More%20Card%20No%20v9001"
             orderCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Order%20Card%20No%20v9001."
             
             />
        </>
    )
}
