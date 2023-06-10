import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;
  color: #fff;
  background-color: #000;
`;
const Logo = styled.a``;
const Nav = styled.nav``;
const NavItem = styled.a``;
function Header() {
  return (
    <StyledHeader>
      <Logo href="/">LUKAS PORTFOLIO</Logo>
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
