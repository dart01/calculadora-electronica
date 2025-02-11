import styled from 'styled-components';

// Estilos con styled-components
const AboutContainer = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutTitle = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1.5rem;
`;

const AboutDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const AboutSection = styled.section`
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    color: #007bff;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
  }
`;

const AboutLink = styled.a`
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #0056b3;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>Acerca de</AboutTitle>
      <AboutDescription>
        Esta aplicación fue creada para facilitar el cálculo de valores en circuitos electrónicos, ayudando a ingenieros, estudiantes y entusiastas a resolver problemas de manera rápida y eficiente.
      </AboutDescription>

      <AboutSection>
        <h2>El Proyecto</h2>
        <p>
          La aplicación incluye herramientas para calcular resistencias, filtros, controladores PID, potencia, divisores de voltaje y capacitores. Todas las herramientas están diseñadas para ser intuitivas y fáciles de usar.
        </p>
      </AboutSection>

      <AboutSection>
        <h2>El Desarrollador</h2>
        <p>
          Hola, soy [Tu Nombre], el desarrollador detrás de esta aplicación. Soy un apasionado de la electrónica y la programación, y creé esta herramienta para combinar mis dos pasiones. Si tienes alguna pregunta o sugerencia, no dudes en contactarme.
        </p>
        <p>
          Puedes encontrarme en:{' '}
          <AboutLink href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
            GitHub
          </AboutLink>{' '}
          o enviarme un correo a:{' '}
          <AboutLink href="mailto:tuemail@example.com">tuemail@example.com</AboutLink>.
        </p>
      </AboutSection>

      <AboutSection>
        <h2>Contribuciones</h2>
        <p>
          Este proyecto es de código abierto y está disponible en GitHub. Si deseas contribuir, ¡serás bienvenido! Visita el repositorio en:{' '}
          <AboutLink href="https://github.com/tuusuario/repositorio" target="_blank" rel="noopener noreferrer">
            enlace al repositorio
          </AboutLink>.
        </p>
      </AboutSection>
    </AboutContainer>
  );
};

export default About;