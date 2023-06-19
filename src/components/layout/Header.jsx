import { useState } from "react";
import styled from "styled-components";
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  color: #fff;
  background-color: #000;
  position: fixed;
  z-index: 1;
  width: 100%;
  i {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.open &&
      `
    justify-content: center;
  `}
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
  @media only screen and (max-width: 768px) {
    ${(props) =>
      props.open &&
      `
    display: none;
  `}
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
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    background-color: #000;
    justify-content: center;
    align-items: center;
  }
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
    ${(props) =>
      props.open &&
      `
    display: block;
  `}
  }
`;
function Header() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <StyledHeader open={open}>
      <Logo open={open} href="/">
        <LogoFirst>LUKAS</LogoFirst> PORTFOLIO
      </Logo>
      <Nav>
        <i
          className={!open ? "fa-solid fa-bars fa-2xl" : "fa-solid fa-x fa-2xl"}
          onClick={() => setOpen(!open)}
        />
        <NavItem open={open} href="#hero">
          Home
        </NavItem>
        <NavItem open={open} href="#about">
          About
        </NavItem>
        <NavItem open={open} href="#works">
          Works
        </NavItem>
        <NavItem open={open} href="#contact">
          Contact
        </NavItem>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
