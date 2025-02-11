import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2%;
  position: relative;
`;

const MenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;
  padding: 0.5rem;
  z-index: 1001;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 1000;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  list-style: none;
  padding: 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavItem = styled.li`
  a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    padding: 0.5rem 1rem;
    display: block;
    transition: all 0.2s ease;
    border-radius: 4px;

    &:hover {
      background: rgba(0, 123, 255, 0.1);
      color: #007bff;
    }
  }
`;

const DesktopLinks = styled.div`
  display: none;
  
  @media (min-width: 769px) {
    display: flex;
    gap: 2rem;
    margin-left: auto;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <HeaderContainer>
      <Nav>
        <MenuButton 
          ref={buttonRef}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </MenuButton>

        <Logo>Calculadora</Logo>

        <DesktopLinks>
          <NavItem>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">Acerca de</Link>
          </NavItem>
          <NavItem>
            <Link to="/donate">Donar</Link>
          </NavItem>
        </DesktopLinks>

        <DropdownMenu $isOpen={isMenuOpen} ref={dropdownRef}>
          <NavList>
            
            <NavItem>
              <Link to="/resistance-calculator" onClick={() => setIsMenuOpen(false)}>Resistencia</Link>
            </NavItem>
            <NavItem>
              <Link to="/filter-calculator" onClick={() => setIsMenuOpen(false)}>Filtros</Link>
            </NavItem>
            <NavItem>
              <Link to="/pid-calculator" onClick={() => setIsMenuOpen(false)}>PID</Link>
            </NavItem>
            <NavItem>
              <Link to="/power-calculator" onClick={() => setIsMenuOpen(false)}>Potencia</Link>
            </NavItem>
            <NavItem>
              <Link to="/voltage-divider" onClick={() => setIsMenuOpen(false)}>Divisor de Voltaje</Link>
            </NavItem>
            <NavItem>
              <Link to="/capacitor-calculator" onClick={() => setIsMenuOpen(false)}>Capacitores</Link>
            </NavItem>
          </NavList>
        </DropdownMenu>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;