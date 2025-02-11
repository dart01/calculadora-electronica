import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos con styled-components
const HomeContainer = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ToolCard = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.5rem;
    color: #007bff;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1.5rem;
  }

  a {
    text-decoration: none;
    color: #fff;
    background-color: #007bff;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Title>Bienvenido a la Aplicación de Calculadoras Electrónicas</Title>
      <Description>
        Explora nuestras herramientas para calcular valores de resistencias, filtros, circuitos PID, potencia, divisores de voltaje y más. Diseñado para ingenieros, estudiantes y entusiastas de la electrónica.
      </Description>

      <ToolsGrid>
        <ToolCard>
          <h3>Calculadora de Resistencia</h3>
          <p>Calcula el valor de resistencias en serie y paralelo.</p>
          <Link to="/resistance-calculator">Ir a la herramienta</Link>
        </ToolCard>

        <ToolCard>
          <h3>Calculadora de Filtros</h3>
          <p>Diseña y analiza filtros electrónicos.</p>
          <Link to="/filter-calculator">Ir a la herramienta</Link>
        </ToolCard>

        <ToolCard>
          <h3>Calculadora PID</h3>
          <p>Calcula parámetros para controladores PID.</p>
          <Link to="/pid-calculator">Ir a la herramienta</Link>
        </ToolCard>

        <ToolCard>
          <h3>Calculadora de Potencia</h3>
          <p>Calcula la potencia en circuitos electrónicos.</p>
          <Link to="/power-calculator">Ir a la herramienta</Link>
        </ToolCard>

        <ToolCard>
          <h3>Divisor de Voltaje</h3>
          <p>Calcula voltajes en divisores resistivos.</p>
          <Link to="/voltage-divider">Ir a la herramienta</Link>
        </ToolCard>

        <ToolCard>
          <h3>Calculadora de Capacitores</h3>
          <p>Calcula valores de capacitores en serie y paralelo.</p>
          <Link to="/capacitor-calculator">Ir a la herramienta</Link>
        </ToolCard>
      </ToolsGrid>
    </HomeContainer>
  );
};

export default Home;