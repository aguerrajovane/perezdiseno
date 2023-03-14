import { display } from '@mui/system'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div style={{width: '100%', textAlign: 'center', paddingTop: '20px', paddingBottom: '10px', backgroundColor: '#fff' }}>
      <hr style={{borderWidth: '2px', borderColor: '#000'}}/>
      <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center', marginBottom: '0px' }}>
        <Image 
          edge={"start"}
          color={"inherit"} 
          aria-label={"menu"}
          src={'/static/logoblack.svg'} 
          alt={'logo'} 
          width={100}
          height={20}/>
        
        <p style={{ fontSize: '16px', marginBottom: '0px', marginTop: '0px' }}>©</p> 
      </div>
      <div style={{ fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <a style={{ textDecoration: 'none', color: 'inherit', marginLeft: '10px', marginRight: '10px' }} href="mailto:info@perezdiseno.com">info@perezdiseno.com</a>
        <p>|</p>
        <a style={{ textDecoration: 'none', color: 'inherit', marginLeft: '10px', marginRight: '10px' }} href="tel:+50767101331">+(507) 6710-1331</a>
      </div>
    </div>
  )
}

export default Footer
