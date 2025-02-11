
import styled from 'styled-components';

// Estilos con styled-components
const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 2rem 1rem;
  text-align: center;
  margin-top: auto; /* Para que el footer se quede abajo si el contenido es corto */
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;



const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #ccc;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Calculadoras Electrónicas. Todos los derechos reservados.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;