import React from 'react'


const CardIcons = ({icon, parrafo, title}) => {

    
  return (
    <div>
         <div className='card-iconos'>
                <img className='img-icon' src={icon} alt="icono-sonido" />
                <h4 className='card-title'>{title}</h4>
                 <p> {parrafo}</p>
        </div>
    </div>
  )
}

export default CardIcons