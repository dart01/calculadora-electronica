import { Link } from 'react-router-dom';
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

const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FooterLinkItem = styled.li`
  a {
    text-decoration: none;
    color: #fff;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
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
        <FooterLinks>
          <FooterLinkItem><Link to="/">Home</Link></FooterLinkItem>
          <FooterLinkItem><Link to="/resistance-calculator">Calculadora de Resistencia</Link></FooterLinkItem>
          <FooterLinkItem><Link to="/filter-calculator">Calculadora de Filtros</Link></FooterLinkItem>
          <FooterLinkItem><Link to="/about">Acerca de</Link></FooterLinkItem>
          <FooterLinkItem><Link to="/privacy-policy">Política de Privacidad</Link></FooterLinkItem>
          <FooterLinkItem><Link to="/terms-of-service">Términos de Servicio</Link></FooterLinkItem>
        </FooterLinks>
        <Copyright>
          &copy; {new Date().getFullYear()} Calculadoras Electrónicas. Todos los derechos reservados.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;