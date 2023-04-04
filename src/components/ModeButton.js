import React, { useState } from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";

const Button = styled.button`
  z-index: 1000;
  position: fixed;
  margin: 2rem;
  bottom: 0.5rem;
  right: 1rem;
  background-color: ${(props) => props.theme.buttonBg};
  color: ${(props) => props.theme.buttonColor};
  padding: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-out, color 0.3s ease-out;
  font-size: 1.5rem;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.buttonBgHover};
    color: ${(props) => props.theme.buttonColorHover};
  }
`;

export default function ModeButton() {
  const theme = useTheme();
  return (
    <Button>
      {theme.mode === "light" ? "🌙" : "☀️"}
    </Button>
  );
}
