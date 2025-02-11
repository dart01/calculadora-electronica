import styled, { keyframes } from "styled-components";

// Animación para los triángulos
const float = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(180deg);
  }
  100% {
    transform: translateY(0) rotate(360deg);
  }
`;

// Estilos para el contenedor de fondo
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, #f25c05, #2a5298); /* Fondo degradado */
`;

// Estilos para los triángulos
const Triangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 40px solid rgba(255, 255, 255, 0.3); /* Color del triángulo */
  animation: ${float} 10s infinite ease-in-out;

  /* Posiciones y tamaños aleatorios para los triángulos */
  &:nth-child(1) {
    top: 10%;
    left: 20%;
    animation-duration: 8s;
  }

  &:nth-child(2) {
    top: 30%;
    left: 50%;
    animation-duration: 12s;
  }

  &:nth-child(3) {
    top: 50%;
    left: 80%;
    animation-duration: 10s;
  }

  &:nth-child(4) {
    top: 70%;
    left: 10%;
    animation-duration: 14s;
  }

  &:nth-child(5) {
    top: 90%;
    left: 60%;
    animation-duration: 9s;
  }
  &:nth-child(6) {
    top: 90%;
    left: 60%;
    animation-duration: 9s;
  }
`;

// Componente de fondo con triángulos flotantes
const FloatingTrianglesBackground = () => {
  return (
    <Container>
      <Triangle />
      <Triangle />
      <Triangle />
      <Triangle />
      <Triangle />
      <Triangle />
    </Container>
  );
};

export default FloatingTrianglesBackground;
