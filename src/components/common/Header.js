import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import logo from '../../images/logo.png';
import './Hamburger.js';
import Hamburger from "./Hamburger.js";

const HeaderContainer = styled.header`
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  font-size: 1.2rem;
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Li = styled.li`
  margin: 0 1rem;

  @media only screen and (max-width: 600px) {
    margin: 0;
    padding: 0.5rem 0;
  }
`;

const NavLink = styled(Link)`
  color: ${(props) => (props.active === 'true' ? props.theme.colors.accent : props.theme.colors.opposite)};
  text-decoration: none;
  position: relative;
  padding-bottom: 3px;
  transition: color 0.1s ease-in-out;

  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background-color: ${props => props.theme.colors.accent};
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
  color: ${(props) => (props.active === 'true' ? props.theme.colors.accent : props.theme.colors.opposite)};
  text-decoration: ${(props) => (props.active === 'true' ? "underline" : "none")};
  text-underline-offset: 6px;
  text-decoration-thickness: 2px;
  font-size: 18px;
  padding: 10px;
  display: block;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${props => props.theme.home.burger};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

export default function Header() {
  
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
            to="/skills"
            onClick={() => handleLinkClick("Skills")}
            active={`${activeLink === "Skills"}`}
          >
            Skills
          </HamburgerLink>
          <HamburgerLink
            to="/projects"
            onClick={() => handleLinkClick("Projects")}
            active={`${activeLink === "Projects"}`}
          >
            Projects
          </HamburgerLink>
          <HamburgerLink
            to="/resume"
            onClick={() => handleLinkClick("Resume")}
            active={`${activeLink === "Resume"}`}
          >
            Resume
          </HamburgerLink>
          <HamburgerLink
            to="/contact"
            onClick={() => handleLinkClick("Contact")}
            active={`${activeLink === "Contact"}`}
          >
            Contact
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
              to="/skills"
              onClick={() => handleLinkClick("Skills")}
              active={`${activeLink === "Skills"}`}
            >
              Skills
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/projects"
              onClick={() => handleLinkClick("Projects")}
              active={`${activeLink === "Projects"}`}
            >
              Projects
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/resume"
              onClick={() => handleLinkClick("Resume")}
              active={`${activeLink === "Resume"}`}
            >
              Resume
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
        </Ul>
      </Nav>
    </HeaderContainer>
  );
}
