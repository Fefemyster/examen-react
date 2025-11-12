export const Descuento = () => {
  // Función que calcula el precio con descuento según los rangos
  const calcularDescuento = (precio: number): number => {
    let descuento = 0;

    if (precio >= 1000 && precio <= 4999.99) {
      descuento = 0.1; // 10%
    } else if (precio >= 5000 && precio <= 8999.99) {
      descuento = 0.2; // 20%
    } else if (precio >= 9000 && precio <= 12999.99) {
      descuento = 0.3; // 30%
    } else {
      descuento = 0; // 0% para los demás casos
    }

    return precio - precio * descuento;
  };

  const handleClick = () => {
    const precio = 300;
    const precioFinal = calcularDescuento(precio);
    console.log("Precio original:", precio);
    console.log("Precio con descuento:", precioFinal);
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-indigo-700 hover:to-purple-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200"
    >
      Descuento
    </button>
  );
};
