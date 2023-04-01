import React from 'react'
import SocialIcons from '../Social/SocialIcons'

export default function Footer() {
  return (
    <>
        <div style={{ marginTop:'30px'}}>
            <p style={{ fontSize:'26px',fontWeight:'500',textAlign:'center' }}>Let's Work Together</p>
            <address style={{ textAlign:'center',fontSize:'18px',margin:'15px' }}>
                phone <br />
                123-456-789 <br />
                info@gmail.com <br />
                <br />
                Address <br />
                somewehre
            </address>
            <SocialIcons justifyContent="center" marginBottom="40px" marginRight="0"/>
        </div>
    </>
  )
}
