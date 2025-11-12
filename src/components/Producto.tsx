import React, { useState } from "react";

interface Props {
  precio: number;
}

export const Producto = ({ precio }: Props) => {
  const [valor, setValor] = useState(precio);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nuevoValor = e.target.value;
    setValor(Number(nuevoValor));
    console.log(nuevoValor);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md">
      <form className="flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium text-slate-700 mb-1">
            Precio:
          </span>
          <input
            type="number"
            placeholder="Ingresa un Producto"
            value={valor} // input controlado
            onChange={handleChange} // manejador de cambio
            className="w-full px-4 py-2 border border-slate-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
        </label>
      </form>
    </div>
  );
};

export default Producto;
