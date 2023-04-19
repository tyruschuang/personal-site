import React from "react";
import styled, { css } from "styled-components";

const transition = css`
  transition: all 0.4s ease-in-out;
`;

const Container = styled.div`
  ${transition}
  background-color: ${props => props.theme.primary[1]};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  padding: 50px;
`;

const TextContainer = styled.div`
  ${transition}
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: ${props => props.theme.primary[2]};
  border-radius: 10px;
  box-shadow: 0 8px 10px 0 ${props => props.theme.elevation};
`;

const Header = styled.h1`
  ${transition}
  font-size: 36px;
  margin-bottom: 20px;
  color: ${props => props.theme.secondary[2]};
  text-align: center;
  padding-bottom: 50px;
`;

const Subheader = styled.h2`
  ${transition}
  font-size: 24px;
  margin-bottom: 20px;
  color: ${props => props.theme.secondary[1]};
  border-bottom: 2px solid ${props => props.theme.secondary[1]};
  padding-bottom: 10px;
  text-align: center;
  letter-spacing: 2px;
`;

const Paragraph = styled.p`
  ${transition}
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
  color: ${props => props.theme.secondary[2]};
  text-align: justify;
`;

const List = styled.ul`
  font-size: 18px;
  list-style: none;
  margin-bottom: 20px;
  color: ${props => props.theme.secondary[2]};
  text-align: justify;
`;

const ListItem = styled.li`
  ${transition}
  transition: all 0.4s ease-in-out;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;

  &::before {
    ${transition}
    content: "<";
    font-weight: bold;
    color: ${props => props.theme.accent[1]};
    font-size: 15px;
    margin-right: 6px;
  }
  
  &::after {
    ${transition}
    content: "/>";
    font-weight: bold;
    color: ${props => props.theme.accent[1]};
    font-size: 15px;
    margin-left: 6px;
  }
`;

const ResumeLink = styled.a`
  transition: all 0.4s ease-in-out;
  display: inline-block;
  font-size: 18px;
  margin-top: 40px;
  color: #0077c0;
  text-align: center;
  text-decoration: none;
  &:hover {
    color: #005d9f;
  }
`;

export default function About() {
  return (
    <Container>
      <TextContainer>
        <Header>About</Header>
        <Subheader>who i am</Subheader>
        <Paragraph>
          hi, im a person
        </Paragraph>
        <Subheader>what i do</Subheader>
        <Paragraph>
          im a student
        </Paragraph>
        <Subheader>my experience</Subheader>
        <List>
          <ListItem>experience 1</ListItem>
        </List>
        <Subheader>my interests</Subheader>
        <List>
          <ListItem>interest 1</ListItem>
        </List>
        <ResumeLink href="/resume.pdf" target="_blank">
          ↓ resume
        </ResumeLink>
      </TextContainer>
    </Container>
  );
};
