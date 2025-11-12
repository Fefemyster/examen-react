import React, { useState } from "react";
import { Producto } from "./Producto";

export const DescuentoCalculado = () => {
  // Estado para los precios
  const [precios, setPrecios] = useState<number[]>([
    500, 1500, 6000, 9500, 14000,
  ]);

  // Estado para los precios con descuento
  const [descuentos, setDescuentos] = useState<number[]>([0, 0, 0, 0, 0]);

  // Actualizar precio individual
  const handlePrecioChange = (index: number, nuevoValor: number) => {
    const nuevosPrecios = [...precios];
    nuevosPrecios[index] = nuevoValor;
    setPrecios(nuevosPrecios);

    // Calcular automáticamente el descuento para este producto
    const precioConDescuento = calcularDescuento(nuevoValor);
    const nuevosDescuentos = [...descuentos];
    nuevosDescuentos[index] = precioConDescuento;
    setDescuentos(nuevosDescuentos);
  };

  // Función que calcula el precio con descuento según los rangos
  const calcularDescuento = (precio: number): number => {
    let descuento = 0;

    if (precio >= 1000 && precio <= 4999.99) descuento = 0.1;
    else if (precio >= 5000 && precio <= 8999.99) descuento = 0.2;
    else if (precio >= 9000 && precio <= 12999.99) descuento = 0.3;
    else descuento = 0;

    return precio - precio * descuento;
  };

  // Función para recalcular todos los descuentos al presionar el botón
  const aplicarDescuento = () => {
    const preciosConDescuento = precios.map((p) => calcularDescuento(p));
    setDescuentos(preciosConDescuento);
  };

  return (
    <div className="max-w-md mx-auto p-6 flex flex-col gap-4">
      <h2 className="text-lg font-semibold mb-4">Calculadora de Descuentos</h2>

      {precios.map((precio, index) => (
        <div key={index}>
          <Producto
            precio={precio}
            onChange={(nuevoValor) => handlePrecioChange(index, nuevoValor)}
          />
          <div className="mt-2 text-sm text-green-700 font-medium">
            Precio con descuento: L{descuentos[index]?.toFixed(2) || "0.00"}
          </div>
        </div>
      ))}

      <button
        onClick={aplicarDescuento}
        className="px-6 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200 mt-4"
      >
        Aplicar Descuentos
      </button>
    </div>
  );
};

export default DescuentoCalculado;
