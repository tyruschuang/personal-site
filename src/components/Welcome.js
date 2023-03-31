import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  background-image: url("https://www.example.com/dark-image.jpg");
  background-size: cover;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const Text = styled.h1`
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
  color: #00bfff;
  overflow: hidden;
  border-right: 0.15em solid #00bfff;
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
      border-color: #00bfff;
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

export default function Welcome() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(100);
  const words = ["a high school student", "a web developer", "a programmer", "a gamer", "a student", "a robotics kid"];

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
  }, [delay, isDeleting, text, words]);

  return (
    <Container>
      <Text>
        Hey! My name is Tyrus. I'm...
        <TypewriterText>
          <Typewriter>{text}</Typewriter>
        </TypewriterText>
      </Text>
    </Container>
  );
};
