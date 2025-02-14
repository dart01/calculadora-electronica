import { useState } from "react";
import styled from "styled-components";
import Particles from "../pages/Particles";

// Estilos para el componente
const ResistorContainer = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgb(52, 52, 53);
  border-radius: 12px;
  color: #ffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
`;

const ResistorBody = styled.div`
  position: relative;
  width: 400px;
  height: 100px;
  margin: 2rem auto;
  background: rgb(165, 115, 115);
  border-radius: 8px;
`;

const ResistorBand = styled.div`
  position: absolute;
  height: 100%;
  width: 8%;
  background: ${(props) => props.color || "#654321"};
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

// Contenedor para los fondos animados
const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

const colorCode = {
  0: "#000000",
  1: "#964B00",
  2: "#FF0000",
  3: "#FFA500",
  4: "#FFFF00",
  5: "#008000",
  6: "#0000FF",
  7: "#800080",
  8: "#808080",
  9: "#FFFFFF",
  gold: "#FFD700",
  silver: "#C0C0C0",
};

const ResistanceCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [resistance, setResistance] = useState(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Nueva validación con regex mejorado
    const match = value.match(/^([\d.]+)([kKmM]?)$/);
    if (!match) {
      setResistance(null);
      return;
    }

    const [, numericStr, multiplierChar] = match;
    const numericValue = parseFloat(numericStr);

    if (isNaN(numericValue)) {
      setResistance(null);
      return;
    }

    const multiplier =
      {
        k: 1000,
        m: 1000000,
      }[multiplierChar?.toLowerCase()] || 1;

    setResistance(numericValue * multiplier);
  };

  const getBands = () => {
    if (!resistance || resistance === 0) return Array(5).fill("#d3d3d3");

    let value = resistance;
    let exponent = 0;

    // Normalización a dos dígitos significativos
    if (value >= 100) {
      while (value >= 100) {
        value /= 10;
        exponent++;
      }
    } else if (value < 10) {
      while (value < 10) {
        value *= 10;
        exponent--;
      }
    }

    const firstDigit = Math.floor(value / 10);
    const secondDigit = Math.floor(value % 10);

    return [
      colorCode[firstDigit],
      colorCode[secondDigit],
      colorCode[exponent],
      colorCode["gold"],
      "#d3d3d3",
    ];
  };

  const bands = getBands();

  return (
    <>
      <BackgroundContainer>
        <Particles
          particleCount={600}
          particleSpread={10}
          speed={0.5}
          particleBaseSize={150}
          sizeRandomness={2}
        />
      </BackgroundContainer>
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
            Ingresa el valor de la resistencia (ej: 4700, 1k, 2.2M)
            <br />
            Valor actual: {resistance ? `${resistance}Ω` : "---"}
          </p>
        </InputContainer>
      </ResistorContainer>
    </>
  );
};

export default ResistanceCalculator;
