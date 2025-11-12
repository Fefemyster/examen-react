import React, { useState } from "react";

interface Props {
  precio: number;
  setPrecio: (valor: number) => void; // Función para actualizar precio en el padre
}

export const Producto = ({ precio, setPrecio }: Props) => {
  const [valor, setValor] = useState(precio);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoValor = Number(e.target.value);
    setValor(nuevoValor); // Actualizamos el estado local
    setPrecio(nuevoValor); // Actualizamos el estado en el padre
  };

  return (
    <div className="flex flex-col gap-4">
      <label className="flex flex-col">
        <span className="text-sm font-medium text-slate-700 mb-1">Precio:</span>
        <input
          type="number"
          placeholder="Ingresa un Producto"
          value={valor} // input controlado
          onChange={handleChange} // manejador de cambio
          className="w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
        />
      </label>
    </div>
  );
};

export default Producto;
