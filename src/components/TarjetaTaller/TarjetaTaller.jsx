import { useState } from "react";
import estilos from "./TarjetaTaller.module.css";

export default function TarjetaTaller({ taller }) {
  const { titulo, categoria, cupo, inscriptos, nuevo, descripcion } = taller;
  const [expandida, setExpandida] = useState(false);

  const libres = cupo - inscriptos;
  const porcentaje = Math.round((inscriptos / cupo) * 100);

  //segun datos
  let estado = estilos.disponible;
  if (libres === 0) estado = estilos.completo;
  else if (libres <= 3) estado = estilos.pocos;

  //segun estado
  const clases = [estilos.tarjeta, estado, expandida && estilos.expandida]
    .filter(Boolean)
    .join(" ");

  return (
    <article className={clases}>
      {nuevo && <span className={estilos.etiqueta}>Nuevo</span>}
      <h2>{titulo}</h2>
      <p>{categoria}</p>
      <p>{libres === 0 ? "Completo" : `Cupos libres: ${libres} de ${cupo}`}</p>

      <div className={estilos.barra}>
        <div className={estilos.relleno} style={{ width: `${porcentaje}%` }} />
      </div>

      <button onClick={() => setExpandida(!expandida)}>
        {expandida ? "Ocultar detalles" : "Ver detalles"}
      </button>
      {expandida && <p>{descripcion}</p>}
    </article>
  );
}