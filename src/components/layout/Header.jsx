import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  color: #fff;
  background-color: #000;
`;
const Logo = styled.a`
  font-size: 2rem;
  font-weight: 700;
  transition: 0.5s;
  &:hover {
    background-color: #fff;
    color: #000;
    padding-right: 0.5rem;
    transition: 0.5s;
  }
  &:hover > span {
    background-color: #000;
    color: #fff;
    transition: 0.5s;
  }
`;

const LogoFirst = styled.span`
  background-color: #fff;
  color: #000;
  padding: 0rem 0.5rem;
`;
const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;
const NavItem = styled.a`
  font-size: 1.8rem;
  padding: 0 0.5rem;
  transition: 0.5s;
  &:hover {
    background-color: #fff;
    color: #000;
    transition: 0.5s;
    border-radius: 0.5rem;
  }
`;
function Header() {
  return (
    <StyledHeader>
      <Logo href="/">
        <LogoFirst>LUKAS</LogoFirst> PORTFOLIO
      </Logo>
      <Nav>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/">About</NavItem>
        <NavItem href="/">Works</NavItem>
        <NavItem href="/">Contact</NavItem>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
