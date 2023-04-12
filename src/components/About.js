import React from "react";
import styled from "styled-components";

const Container = styled.div`
  transition: all 0.4s ease-in-out;
  background-color: ${props => props.theme.primary[1]};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 100px);
  padding: 50px;
`;

const TextContainer = styled.div`
  transition: all 0.4s ease-in-out;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background-color: ${props => props.theme.primary[2]};
  border-radius: 10px;
  box-shadow: 0 8px 10px 0 ${props => props.theme.elevation};
`;

const Header = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: ${props => props.theme.secondary[2]};
  text-align: center;
  padding-bottom: 50px;
`;

const Subheader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${props => props.theme.secondary[1]};
  border-bottom: 2px solid ${props => props.theme.secondary[1]};
  padding-bottom: 10px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
  color: ${props => props.theme.secondary[2]};
  text-align: justify;
`;

const List = styled.ul`
  font-size: 18px;
  list-style: none;
  margin-bottom: 20px;\
  color: ${props => props.theme.secondary[2]};
  text-align: justify;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;

  &::before {
    content: "<";
    font-weight: bold;
    color: ${props => props.theme.accent[1]};
    font-size: 15px;
    margin-right: 6px;
  }
  
  &::after {
    content: "/>";
    font-weight: bold;
    color: ${props => props.theme.accent[1]};
    font-size: 15px;
    margin-left: 6px;
  }
`;

const ResumeLink = styled.a`
  display: inline-block;
  font-size: 18px;
  margin-top: 40px;
  color: #0077c0;
  text-align: center;
  text-decoration: none;
  border-bottom: 2px solid #0077c0;
  &:hover {
    color: #005d9f;
    border-bottom: 2px solid #005d9f;
  }
`;

export default function About() {
  return (
    <Container>
      <TextContainer>
        <Header>About Me</Header>
        <Subheader>Who Am I?</Subheader>
        <Paragraph>
          hi, im a person
        </Paragraph>
        <Subheader>What Do I Do?</Subheader>
        <Paragraph>
          im a student
        </Paragraph>
        <Subheader>Experience</Subheader>
        <List>
          <ListItem>experience 1</ListItem>
        </List>
        <Subheader>Interests</Subheader>
        <List>
          <ListItem>interest 1</ListItem>
        </List>
        <ResumeLink href="/resume.pdf" target="_blank">
          Download Resume
        </ResumeLink>
      </TextContainer>
    </Container>
  );
};
