import React from 'react'
import { Vcard } from './Vcard'
import v7001 from '../video/bday_video/v7001.mp4'

export  function V_Brithday(props) {
    

    return (
        <>
            <Vcard v_src={v7001} 
             h1="7001 Rs Pay from your heart"
             seeCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Know%20More%20Card%20No%20v7001"
             orderCard="https://api.whatsapp.com/send?phone=7701832064&text=I%20want%20to%20Order%20Card%20No%20v7001."
             
             />
        </>
    )
}
