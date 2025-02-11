import { useState } from 'react';
import styled from 'styled-components';

// Estilos
const CalculatorContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CircuitContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  padding: 20px;
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 2rem 0;

  input {
    padding: 0.8rem;
    border: 2px solid #007bff;
    border-radius: 8px;
    font-size: 1rem;
    text-align: center;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
    font-weight: 500;
  }
`;

const ResistorGroup = styled.g`
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const resistorColorCode = {
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
};

const VoltageDivider = () => {
  const [vin, setVin] = useState(12);
  const [r1, setR1] = useState(1000);
  const [r2, setR2] = useState(2000);

  const calculateBands = (value) => {
    try {
      const absValue = Math.max(1, Math.abs(value));
      const digits = absValue.toExponential(1).split('e')[0].replace('.', '').split('').slice(0, 2);
      const exponent = Math.floor(Math.log10(absValue));
      
      return [
        resistorColorCode[digits[0]] || '#654321',
        resistorColorCode[digits[1]] || '#654321',
        resistorColorCode[exponent] || '#654321',
        resistorColorCode['gold'],
      ];
    } catch {
      return ['#654321', '#654321', '#654321', '#FFD700'];
    }
  };

  const vout = ((vin * r2) / (r1 + r2)).toFixed(2);

  return (
    <CalculatorContainer>
      <h1>Calculadora de Divisor de Voltaje</h1>
      
      <CircuitContainer>
        <svg viewBox="0 0 400 200" style={{ width: '100%', height: 'auto' }}>
          {/* Línea principal del circuito */}
          <path d="M50 100 H350" stroke="#333" strokeWidth="2" fill="none" />
          
          {/* Resistencia R1 */}
          <ResistorGroup transform="translate(80, 60)">
            <rect x="0" y="0" width="80" height="40" fill="#d3d3d3" rx="4" />
            {calculateBands(r1).map((color, i) => (
              <rect key={`r1-${i}`} x={15 + i * 16} y="0" width="16" height="40" fill={color} />
            ))}
            <text x="40" y="60" textAnchor="middle" fill="#333" fontSize="14">R1: {r1}Ω</text>
          </ResistorGroup>

          {/* Resistencia R2 */}
          <ResistorGroup transform="translate(240, 60)">
            <rect x="0" y="0" width="80" height="40" fill="#d3d3d3" rx="4" />
            {calculateBands(r2).map((color, i) => (
              <rect key={`r2-${i}`} x={15 + i * 16} y="0" width="16" height="40" fill={color} />
            ))}
            <text x="40" y="60" textAnchor="middle" fill="#333" fontSize="14">R2: {r2}Ω</text>
          </ResistorGroup>

          {/* Conexiones y etiquetas */}
          <circle cx="200" cy="100" r="4" fill="#333" />
          <path d="M200 100 V140" stroke="#333" strokeWidth="2" fill="none" />
          <path d="M200 140 H350" stroke="#333" strokeWidth="2" fill="none" />
          
          {/* Etiquetas de voltaje */}
          <text x="50" y="40" fill="#007bff" fontSize="14" fontWeight="500">Vin: {vin}V</text>
          <text x="200" y="160" fill="#28a745" fontSize="14" fontWeight="500">Vout: {vout}V</text>
          <text x="350" y="180" fill="#666" fontSize="12" fontWeight="500">GND</text>
          
          {/* Flechas de corriente */}
          <path d="M100 100 H50" stroke="#007bff" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          <path d="M350 100 H300" stroke="#28a745" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
          
          <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
              <path d="M0,0 L0,6 L9,3 z" fill="#333" />
            </marker>
          </defs>
        </svg>
      </CircuitContainer>

      <InputGroup>
        <div>
          <label>Voltaje de Entrada (V):</label>
          <input
            type="number"
            value={vin}
            onChange={(e) => setVin(Math.max(0, parseFloat(e.target.value) || 0))}
            min="0"
            step="0.1"
          />
        </div>
        <div>
          <label>Resistencia R1 (Ω):</label>
          <input
            type="number"
            value={r1}
            onChange={(e) => setR1(Math.max(1, parseFloat(e.target.value) || 1))}
            min="1"
          />
        </div>
        <div>
          <label>Resistencia R2 (Ω):</label>
          <input
            type="number"
            value={r2}
            onChange={(e) => setR2(Math.max(1, parseFloat(e.target.value) || 1))}
            min="1"
          />
        </div>
      </InputGroup>
    </CalculatorContainer>
  );
};

export default VoltageDivider;