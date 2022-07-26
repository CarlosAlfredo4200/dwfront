import React from "react";

const EligeTusTechPRO = () => {
  return (
    <div className="contenedor-elige modelos">
      <h3 className="text-center ">Elige tus productos <span className="elige-span">DW Drums</span> </h3>

      <div className="listado-modelos">

        <div className="modelo modelo-x">
          <h3>Sets completos</h3>
          <p className="precio">$ 299</p>
        </div>

        <div className="modelo modelo-y">
          <h3 className="percusion">Percusión </h3>
          <p className="precio">$ 399</p>
        </div>

        <div className="modelo modelo-z">
          <h3>Piezas individuales</h3>
          <p className="precio">$ 499</p>
        </div>

      </div>
    </div>
  );
};

export default EligeTusTechPRO;
