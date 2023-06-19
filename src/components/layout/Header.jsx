import { useState } from "react";
import styled from "styled-components";
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  color: #fff;
  background-color: #000;
  i {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    i {
      display: block;
      :hover {
        cursor: pointer;
      }
    }
  }
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
  align-items: center;
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
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
function Header() {
  const [open, setOpen] = useState(false);
  console.log(open);
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
      <i
        className={!open ? "fa-solid fa-bars fa-2xl" : "fa-solid fa-x fa-2xl"}
        onClick={() => setOpen(!open)}
      />
    </StyledHeader>
  );
}

export default Header;
