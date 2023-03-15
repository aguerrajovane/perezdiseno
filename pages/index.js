import React from 'react';
import Carousel from "../components/Carousel/Carousel.js";

const index = () => {
  return (
    <div>
      <Carousel/>
      <div style={{ maxWidth: '600px', margin: 'auto' }}>
        <h2>Servicios de PérezDiseño</h2>
        <p>En PérezDiseño nos especializamos en el desarrollo de marcas gráficas y sistemas de identificación visual con métodos de gestión estratégicos que cumplen con las exigencias que la empresa o institución requiera.</p>
      </div>
    </div>
  )
}

export default index
