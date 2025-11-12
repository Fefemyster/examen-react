import { Producto } from "./Producto";
import { Descuento } from "./Descuento";

export const DescuentoCalculado = () => {
  return (
    <>
      <form className="max-w-md mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md">
        <div>Calculadora Descuentos</div>

        <Producto precio={0} />

        <Descuento />
      </form>
    </>
  );
};
