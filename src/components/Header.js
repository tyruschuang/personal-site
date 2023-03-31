import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1.5rem;
  font-size: 1.2rem;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    margin-top: 1rem;
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
  color: ${(props) => (props.active ? "#0077c2" : "#333")};
  text-decoration: none;
  position: relative;
  padding-bottom: 3px;
  transition: color 0.1s ease-in-out;
  
  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background-color: #0077c2;
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
    props.active &&
    `
    &:after {
      width: 100%;
    }
  `}
`;

export default function Header() {
  const [activeLink, setActiveLink] = useState("Home");

  const handleLinkClick = (event) => {
    setActiveLink(event.target.textContent);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Ul>
          <Li>
            <NavLink
              to="/"
              onClick={handleLinkClick}
              active={activeLink === "Home"}
            >
              Home
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/skills"
              onClick={handleLinkClick}
              active={activeLink === "Skills"}
            >
              Skills
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/projects"
              onClick={handleLinkClick}
              active={activeLink === "Projects"}
            >
              Projects
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/resume"
              onClick={handleLinkClick}
              active={activeLink === "Resume"}
            >
              Resume
            </NavLink>
          </Li>
          <Li>
            <NavLink
              to="/contact"
              onClick={handleLinkClick}
              active={activeLink === "Contact"}
            >
              Contact
            </NavLink>
          </Li>
        </Ul>
      </Nav>
    </HeaderContainer>
  );
}
