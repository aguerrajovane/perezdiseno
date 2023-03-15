import React from 'react'
import Form from "./components/Form/Form.js";
import Image from "next/image"

const contacto = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Image
          src="/static/images/image01.jpeg"
          alt="Author"
          width={500}
          height={650}
          style={{objectFit: 'cover'}}
          />
        <Form />
      </div>

      <style>{`
        Image {
          margin-right: 15px;
          display: block;
          max-width: 100%;
        }
        Form {
          margin-left: 15px;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (max-width: 600px) {
          .container {
            flex-direction: column;
            max-width: 100%;
          }
          Form, Image {
            margin-left: 0px;
            margin-right: 0px;
          }
          Image {
            max-height: 200px;
          }
        }
      `}</style>

    </div>
  )
}

export default contacto
