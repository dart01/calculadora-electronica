import { useState } from 'react';
import styled from 'styled-components';

// Estilos para el componente
const ResistorContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ResistorBody = styled.div`
  position: relative;
  width: 400px;
  height: 100px;
  margin: 2rem auto;
  background: #d3d3d3;
  border-radius: 8px;
`;

const ResistorBand = styled.div`
  position: absolute;
  height: 100%;
  width: 8%;
  background: ${props => props.color || '#654321'};
  border-radius: 4px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-top: 2rem;

  input {
    padding: 0.8rem;
    font-size: 1.2rem;
    border: 2px solid #007bff;
    border-radius: 8px;
    width: 200px;
    text-align: center;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

// Mapeo de colores para las bandas
const colorCode = {
  0: '#000000',   // Negro
  1: '#964B00',   // Marrón
  2: '#FF0000',   // Rojo
  3: '#FFA500',   // Naranja
  4: '#FFFF00',   // Amarillo
  5: '#008000',   // Verde
  6: '#0000FF',   // Azul
  7: '#800080',   // Violeta
  8: '#808080',   // Gris
  9: '#FFFFFF',   // Blanco
  gold: '#FFD700', // Dorado
  silver: '#C0C0C0' // Plateado
};

const ResistanceCalculator = () => {
  const [inputValue, setInputValue] = useState('');
  const [resistance, setResistance] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Convertir valores como 1k -> 1000, 2M -> 2000000
    const multiplier = {
      'k': 1000,
      'M': 1000000
    }[value.slice(-1)] || 1;
    
    const numericValue = parseFloat(value) * multiplier;
    setResistance(numericValue);
  };

  // Función para determinar los colores de las bandas
  const getBands = () => {
    if (!resistance) return Array(5).fill('#d3d3d3');
    
    const digits = resistance.toString().split('').map(Number);
    const firstDigit = digits[0];
    const secondDigit = digits[1] || 0;
    const multiplier = Math.floor(Math.log10(resistance) - 1);
    const tolerance = 'gold'; // 5% de tolerancia
    
    return [
      colorCode[firstDigit],
      colorCode[secondDigit],
      colorCode[multiplier],
      colorCode[tolerance],
      '#d3d3d3' // Banda vacía
    ];
  };

  const bands = getBands();

  return (
    <ResistorContainer>
      <h1>Calculadora de Código de Colores para Resistencias</h1>
      
      <ResistorBody>
        {bands.map((color, index) => (
          <ResistorBand
            key={index}
            color={color}
            style={{ left: `${10 + index * 18}%` }}
          />
        ))}
      </ResistorBody>

      <InputContainer>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ej: 4700, 1k, 2.2M"
        />
        <p>
          Ingresa el valor de la resistencia (ej: 4700, 1k, 2.2M)<br/>
          Valor actual: {resistance ? `${resistance}Ω` : '---'}
        </p>
      </InputContainer>
    </ResistorContainer>
  );
};

export default ResistanceCalculator;