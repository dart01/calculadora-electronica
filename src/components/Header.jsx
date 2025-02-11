import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos con styled-components
const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #007bff;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <NavList>
          <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/resistance-calculator">Calculadora de Resistencia</Link></NavItem>
          <NavItem><Link to="/filter-calculator">Calculadora de Filtros</Link></NavItem>
          <NavItem><Link to="/pid-calculator">Calculadora PID</Link></NavItem>
          <NavItem><Link to="/power-calculator">Calculadora de Potencia</Link></NavItem>
          <NavItem><Link to="/voltage-divider">Calculadora de Divisor de Voltaje</Link></NavItem>
          <NavItem><Link to="/capacitor-calculator">Calculadora de Capacitores</Link></NavItem>
          <NavItem><Link to="/about">Acerca de</Link></NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;