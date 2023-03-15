import React from 'react'
import Form from "../components/Form/Form.js";
import Image from "next/image"

import styles from './contacto.module.css'

const contacto = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <div className={styles.container}  style={{ display: 'flex', justifyContent: 'space-around', alignItems: "center"}}  >
        <Image
          src="/static/images/image01.jpeg"
          alt="Author"
          width={500}
          height={700}
          className={styles.image}
          
          />
        <Form className={styles.form} />
      </div>

    </div>
  )
}

export default contacto
