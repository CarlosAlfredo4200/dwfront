import React from 'react'

const RecibeActualizaciones = () => {
  return (
     <div className="newsletter">
        <div className="contenido-newsletter contenedor">
            <div className="texto-newsletter">
                <h2>Recibe Actualizaciones</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam molestiae architecto repellat rerum corporis porro vero exercitationem magni voluptate hic accusantium ipsum, fuga tenetur, velit unde? Mollitia autem totam suscipit.</p>

               <form  className='formulario'>
                    <div className="input">
                        <input type="text" placeholder='Tu email' />
                    </div>

                    <input type="submit" value="Inscribirme" />
               </form>
            </div>

        </div>
     </div>
  )
}

export default RecibeActualizaciones