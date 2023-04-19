import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { AiOutlineTwitter, AiOutlineGithub, AiTwotoneMail } from "react-icons/ai";

const Container = styled.div`
  transition: all 0.4s ease-in-out;
  height: 100vh;
  background-color: ${props => props.theme.primary[1]}};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  transition: all 0.4s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -25vh;
  box-shadow: 0 8px 10px 0 ${props => props.theme.elevation};
  background-color: ${props => props.theme.primary[2]};
  border-radius: 10px;
  padding: 5% 10%;
  
  @media screen and (max-width: 450px) {
    width: 90%;
  }
`;

const Title = styled.h1`
  color: ${props => props.theme.secondary[1]};
  font-size: 48px;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
  position: relative;
  display: inline-block;
  text-decoration: none;
  
  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.accent[1]};
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.3s ease-in-out;
  }
  
  &:hover::after {
    transform: scaleX(1);
  }

  @media screen and (max-width: 450px) {
    font-size: 32px;
    margin-bottom: 10px;
  }
`;

const Subtitle = styled.h2`
  color: ${props => props.theme.secondary[2]};
  font-size: 24px;
  margin-bottom: 30px;

  @media screen and (max-width: 450px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

const SocialList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const Social = styled.a`
  display: inline-block;
  font-size: 38px;
  color: ${props => props.theme.secondary[3]};
  cursor: pointer;
  margin-right: 10px;

  @media screen and (max-width: 450px) {
    font-size: 30px;
  }
`;

const Typewriter = styled.span`
  overflow: hidden;
  border-right: 0.15em solid;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation: typing 1.5s steps(30, end), blink-caret 0.75s step-end infinite;
  border-color: ${props => props.theme.secondary[2]};
  margin-left: 5px;

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: ${props => props.theme.secondary[2]};
    }
  }
`;

const words = ["high school student", "front end developer", "gamer", "programmer", "minecraft server maker", "robotics kid"];

export default function Landing() {

  const [text, setText] = useState("");
  const [, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(100);

  useEffect(() => {
    let raf;
    let then = performance.now();
    const step = (now) => {
      const deltaTime = now - then;
      if (deltaTime > delay) {
        setIndex((prevIndex) => {
          const wordLength = words[prevIndex].length;
          const textLength = text.length;
          if (textLength === 0 && isDeleting) {
            setDelay(2500);
            setIsDeleting(false);
            return (prevIndex + 1) % words.length;
          }
          if (textLength === wordLength && !isDeleting) {
            setDelay(2500);
            setIsDeleting(true);
          } else if (isDeleting) {
            setDelay(100);
            setText(text.slice(0, textLength - 1));
          } else {
            setDelay(100);
            setText(words[prevIndex].slice(0, textLength + 1));
          }
          return prevIndex;
        });
        then = now;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [delay, isDeleting, text]);

  return (
    <Container>
      <TextContainer>
        <Title>Tyrus Chuang</Title>
        <Subtitle>
          <Typewriter>{text}</Typewriter>
        </Subtitle>
        <SocialList>
          <Social href="https://github.com/omegaladon" target="_blank" rel="noreferrer">
            <AiOutlineGithub />
          </Social>
          <Social href="https://twitter.com/omgabuilds" target="_blank" rel="noreferrer">
            <AiOutlineTwitter />
          </Social>
          <Social href="mailto:businessomga@gmail.com">
            <AiTwotoneMail />
          </Social>
        </SocialList>
      </TextContainer>
    </Container>
  );
}
