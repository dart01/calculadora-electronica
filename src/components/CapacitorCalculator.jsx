import { useState } from 'react';

const CapacitorCalculator = () => {
  // Estado para almacenar el valor en faradios
  const [faradios, setFaradios] = useState('');
  // Estado para almacenar la referencia del capacitor
  const [referencia, setReferencia] = useState('');

  // Función para manejar el cambio en el input
  const handleInputChange = (event) => {
    const value = event.target.value;
    setFaradios(value);
    calcularReferencia(value);
  };

  // Función para calcular la referencia del capacitor
  const calcularReferencia = (value) => {
    if (value === '') {
      setReferencia('');
      return;
    }

    const faradiosValue = parseFloat(value);

    if (isNaN(faradiosValue)) {
      setReferencia('Valor inválido');
      return;
    }

    // Lógica para determinar la referencia del capacitor
    // Aquí puedes agregar las condiciones para determinar la referencia
    if (faradiosValue >= 1e-12 && faradiosValue < 1e-9) {
      setReferencia('Capacitor de cerámica');
    } else if (faradiosValue >= 1e-9 && faradiosValue < 1e-6) {
      setReferencia('Capacitor de tantalio');
    } else if (faradiosValue >= 1e-6 && faradiosValue < 1e-3) {
      setReferencia('Capacitor electrolítico');
    } else if (faradiosValue >= 1e-3) {
      setReferencia('Supercapacitor');
    } else {
      setReferencia('Valor fuera de rango');
    }
  };

  return (
    <div>
      <h1>Calculadora de Capacitores</h1>
      <p>Bienvenido a la calculadora de capacitores.</p>
      <form>
        <label htmlFor="faradios">Ingrese el valor en Faradios:</label>
        <input
          type="text"
          id="faradios"
          value={faradios}
          onChange={handleInputChange}
          placeholder="Ej. 1e-6"
        />
      </form>
      {referencia && <p>Referencia del capacitor: <strong>{referencia}</strong></p>}
    </div>
  );
};

export default CapacitorCalculator;
