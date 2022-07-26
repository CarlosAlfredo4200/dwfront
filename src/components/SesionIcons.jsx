import React from "react";

import IconoSonido from "../img/icono-sonido.svg";
import IconoGarantia from "../img/icono-garantia.svg";
import IconoBateria from "../img/icono-bateria.svg";
import CardIcons from "./CardIcons";

const parrafo = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis numquam labore tempore veniam porro minus itaque temporibus."
const SesionIcons = () => {
  return (
    <div className="contenedor-iconos">
      <CardIcons
        icon={IconoSonido}
        title="GRAN SONIDO"
        parrafo={parrafo}
      />

      <CardIcons
        icon={IconoGarantia}
        title="GARANTÍA DE POR VIDA"
        parrafo={parrafo}
      />

      <CardIcons
        icon={IconoBateria}
        title="CALIDAD TOTAL"
        parrafo={parrafo}
      />
    </div>
  );
};

export default SesionIcons;
