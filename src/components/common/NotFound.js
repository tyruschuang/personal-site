import React from "react";
import styled, { keyframes } from "styled-components";

const glitch = keyframes`
  5%, 95% {
    clip-path: inset(10% 0 10% 0);
  }
  10%, 90% {
    clip-path: inset(20% 0 20% 0);
  }
  15%, 85% {
    clip-path: inset(11% 0 11% 0);
  }
  20%, 80% {
    clip-path: inset(6% 0 6% 0);
  }
  25%, 75% {
    clip-path: inset(25% 0 25% 0);
  }
  30%, 70% {
    clip-path: inset(7% 0 7% 0);
  }
  35%, 65% {
    clip-path: inset(1% 0 1% 0);
  }
  40%, 60% {
    clip-path: inset(32% 0 32% 0);
  }
  45%, 55% {
    clip-path: inset(6% 0 6% 0);
  }
  50% {
    clip-path: inset(10% 0 10% 0);
  }
`;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(10vh - 10px);
  padding: 200px;
  background-color: ${(props) => props.theme.primary[1]};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.primary[2]};
  border-radius: 10px;
  box-shadow: 0 4px 8px ${(props) => props.theme.elevation};
  padding: 50px 150px;
`;

const Header = styled.h1`
  color: ${(props) => props.theme.secondary[1]};
  font-size: 48px;
  font-family: 'Fira Mono', monospace;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  letter-spacing: -0.7px;
  animation: ${glitch} 1s infinite linear alternate-reverse;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    font-family: 'Fira Mono', monospace;
    font-weight: normal;
  }

  &::before {
    left: 2px;
    text-shadow: -1px 0 white;
    clip-path: inset(400% 0 10% 0);
    animation: ${glitch} 1s infinite linear alternate-reverse;
  }

  &::after {
    left: -2px;
    text-shadow: 1px 0 white;
    clip-path: inset(200% 0 200% 0);
    translate: 0.5px;
    animation: ${glitch} 1s infinite linear alternate-reverse;
  }
`;

const Text = styled.p`
  font-size: 1.25rem;
  text-align: center;
  max-width: 800px;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.secondary[2]};
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border: 1px solid ${(props) => props.theme.secondary[2]};
  color: ${(props) => props.theme.secondary[2]};
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  vertical-align: middle;
  
  &:hover {
    transition: all 0.3s ease;
    color: ${(props) => props.theme.secondary[1]};
    border-color: ${(props) => props.theme.secondary[1]};
    transform: translateY(-5px);
    box-shadow: 0px 6px 8px ${(props) => props.theme.elevation}};
  }
`;

function GlitchText({ children }) {
  return (
    <Header data-text={children}>
      {children}
    </Header>
  );
};

export default function NotFound() {
  return (
    <NotFoundContainer>
      <ContentContainer>
        <GlitchText>404</GlitchText>
        <Text>Looks like you glitched out! Why don't we go back?</Text>
        <Button href="/">Yeah, let's go!</Button>
      </ContentContainer>
    </NotFoundContainer>
  );
}
