import React from 'react'
import ImgHeaderGt from '../img/drums.jpg';

const Header = () => {
  return (
      <div className='contenido contenido-header'>
          
          <div className='imagen-header'>
          <img src={ImgHeaderGt} alt="imgHeader"  />
          </div>

          <div className='texto-header'>
              <p className='tagline-producto'>The music site</p>
              <h1 className='nombre-producto degradado-verde'>DW Drums</h1>
              <p className='descripcion-producto'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab, quidem natus voluptates, voluptas velit suscipit eum non unde illo consectetur obcaecati labore beatae quae iusto rerum aspernatur sed animi?
              </p>
               <p className="precio-producto">Desde <span>$299</span></p>
          </div>
    </div>
  )
}

export default Header