import { display } from '@mui/system'
import React from 'react'

const Footer = () => {
  return (
    <div style={{ position:'fixed', bottom: '0', width: '100%', textAlign: 'center', paddingTop: '20px', paddingBottom: '10px' }}>
      <hr style={{borderWidth: '2px', borderColor: '#000'}}/>
      <p style={{ fontSize: '16px', marginBottom: '0px' }}>PérezDiseño ©</p>
      <div style={{ fontSize: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <a style={{ textDecoration: 'none', color: 'inherit', marginLeft: '10px', marginRight: '10px' }} href="mailto:info@perezdiseno.com">info@perezdiseno.com</a>
        <p>|</p>
        <a style={{ textDecoration: 'none', color: 'inherit', marginLeft: '10px', marginRight: '10px' }} href="tel:+50767101331">+(507) 6710-1331</a>
      </div>
    </div>
  )
}

export default Footer
