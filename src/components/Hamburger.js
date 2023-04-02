import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const MenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
  }  
`;

const MenuIcon = styled.div`
  z-index: 150;
  width: 30px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: #333;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: ${({ open }) => (open ? '10px' : '0px')};
      width: ${({ open }) => (open ? '0%' : '100%')};
      left: ${({ open }) => (open ? '50%' : '0%')};
    }
    &:nth-child(2) {
      top: 10px;
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0deg)')};
    }
    &:nth-child(3) {
      top: ${({ open }) => (open ? '10px' : '20px')};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0deg)')};
    }
  }
`;

const Menu = styled.div`
  z-index: 125;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: ${({ open }) => (open ? '50px' : '-300px')};
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 24px 16px rgba(0, 0, 0, 0.1);
  transition: all ${({ open }) => (open ? '0.4s cubic-bezier(0.2, 1, 0.265, 1)' : '0.4s ease-out')};
  transform: translateY(${({ open }) => (open ? '0' : '-100%')});
`;

export default function Hamburger({ children }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [menuRef]);

  const toggleMenu = () => setOpen(!open);

  const handleChildClick = (childOnClick) => {
    childOnClick();
    toggleMenu();
  };
  
  return (
    <Container>
      <MenuButton onClick={toggleMenu}>
        <MenuIcon open={open}>
          <span></span>
          <span></span>
          <span></span>
        </MenuIcon>
      </MenuButton>
      <Menu open={open}>
        {React.Children.map(children, (child) =>
          React.cloneElement(child, {
            onClick: () => handleChildClick(child.props.onClick),
            open: open
          })
        )}
      </Menu>
    </Container>
  );  
};