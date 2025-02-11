
import styled from 'styled-components';
import FloatingTrianglesBackground from './FloatingTrianglesBackground';

// Estilos para el contenido de la página de inicio
const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  text-align: center;
`;

// Componente de la página de inicio
const Inicio = () => {
  return (
    <>
      {/* Fondo con triángulos flotantes */}
      <FloatingTrianglesBackground />

      {/* Contenido de la página de inicio */}
      <Content>
        <h1>Bienvenido a la Calculadora para electronica</h1>
        <p>Todo lo que necesitas a la mano.</p>
      </Content>
    </>
  );
};

export default Inicio;