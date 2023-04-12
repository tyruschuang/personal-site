import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";

import './Hamburger.js';
import Hamburger from "./Hamburger.js";

const HeaderContainer = styled.header`
  transition: all 0.4s ease-in-out;
  background-color: ${props => props.theme.primary[2]};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  font-size: 1.2rem;

  @media screen and (max-width: 850px) {
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: column;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const Li = styled.li`
  margin: 0 3rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;

  @media screen and (max-width: 850px) {
    margin: 0;
    padding: 0.5rem 0;
  }
`;

const NavLink = styled(Link)`
  color: ${(props) => (props.active === 'true' ? props.theme.accent[1] : props.theme.secondary[2])};
  text-decoration: none;
  position: relative;
  padding-bottom: 3px;
  transition: color 0.1s ease-in-out;

  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background-color: ${props => (props.underline !== 'false' ? props.theme.accent[1] : "transparent")};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.2s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }

  ${(props) =>
    props.active === 'true' &&
    `
    &:after {
      width: 100%;
    }
  `}
`;

const HamburgerLink = styled(Link)`
  color: ${(props) => (props.active === 'true' ? props.theme.accent[2] : props.theme.secondary[2])};
  text-decoration: ${(props) => (props.active === 'true' ? "underline" : "none")};
  text-underline-offset: 6px;
  text-decoration-thickness: 2px;
  font-size: 18px;
  padding: 15px;
  display: block;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid;
  border-color: ${props => props.theme.secondary[3]};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.accent[2]};
  }
`;

export default function Header({ modeOnClick }) {

  const theme = useTheme();
  
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (name) => {
    setActiveLink(name);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Hamburger>
          <HamburgerLink
            to="/"
            onClick={() => handleLinkClick("Home")}
            active={`${activeLink === "Home"}`}
          >
            Home
          </HamburgerLink>
          <HamburgerLink
            to="/about"
            onClick={() => handleLinkClick("About")}
            active={`${activeLink === "About"}`}
          >
            About
          </HamburgerLink>
          <HamburgerLink
            to="/portfolio"
            onClick={() => handleLinkClick("Portfolio")}
            active={`${activeLink === "Portfolio"}`}
          >
            Portfolio
          </HamburgerLink>
          <HamburgerLink
            to="/contact"
            onClick={() => handleLinkClick("Contact")}
            active={`${activeLink === "Contact"}`}
          >
            Contact
          </HamburgerLink>
          <HamburgerLink
            onClick={modeOnClick}
            underline="false"
          >
            {theme.type === "light" ? "🌙" : "☀️"}
          </HamburgerLink>
        </Hamburger>
        <Ul>
          <Li>
            <NavLink
              to="/"
              onClick={() => handleLinkClick("Home")}
              active={`${activeLink === "Home"}`}
            >
              Home
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/about"
              onClick={() => handleLinkClick("About")}
              active={`${activeLink === "About"}`}
            >
              About
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/portfolio"
              onClick={() => handleLinkClick("Portfolio")}
              active={`${activeLink === "Portfolio"}`}
            >
              Portfolio
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/contact"
              onClick={() => handleLinkClick("Contact")}
              active={`${activeLink === "Contact"}`}
            >
              Contact
            </NavLink>
          </Li>
          <Li>
            <NavLink
              onClick={modeOnClick}
              underline="false"
            >
              {theme.type === "light" ? "🌙" : "☀️"}
            </NavLink>
          </Li>
        </Ul>
      </Nav>
    </HeaderContainer>
  );
}
