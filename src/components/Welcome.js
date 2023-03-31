import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Waves from "./Waves";

const TextContainer = styled.div`
  background: linear-gradient(60deg, #736EFE 0%, #ABDCFF 100%);
  background-size: cover;
  color: #fff;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const Text = styled.h1`
  z-index: 1;
  font-size: 3rem;
  margin-top: -15rem;
  text-align: center;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-top: -10rem;
  }
`;

const Typewriter = styled.span`
  color: #3677FF;
  overflow: hidden;
  border-right: 0.15em solid #3677FF;
  white-space: nowrap;
  letter-spacing: 0.15em;
  animation: typing 1.5s steps(30, end), blink-caret 0.75s step-end infinite;
  margin-left: 5px;
  font-family: "Popins", sans-serif;

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
      border-color: #3677FF;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const TypewriterText = styled.span`
  position: relative;
  display: block;
`;

const Container = styled.div`
  background-color: #f9f9f9;
  height: 100%;
  width: 100%;
  position: relative;
`;

const words = ["a high school student", "a web developer", "a programmer", "a gamer", "a student", "a robotics kid"];

export default function Welcome() {
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
      <Waves />
      <TextContainer>
        <Text>
          Hey! My name is Tyrus. I'm...
          <TypewriterText>
            <Typewriter>{text}</Typewriter>
          </TypewriterText>
        </Text>
      </TextContainer>
    </Container>
  );
};
