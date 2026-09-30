import estilos from "./Boton.module.css";

export default function Boton({ variante = "primario", activo = false, children, ...props }) {
  const clases = [estilos.boton, estilos[variante], activo && estilos.activo]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={clases} aria-pressed={activo} {...props}>
      {children}
    </button>
  );
}