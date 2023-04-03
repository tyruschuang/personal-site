import React from "react";
import styled from "styled-components";
import Welcome from "./Welcome";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding-bottom: 2rem;
`;

const Header = styled.div`
  background-color: #fff;
  color: #000;
  padding: 5rem;
  width: 100%;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TitleText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #000;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  gap: 2rem;
`;

const Section = styled.div`
  margin: 1rem;
  padding: 2rem;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  text-align: center;
  min-width: 200px;
  max-width: 400px;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  color: #000;
  font-weight: bold;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: #000;
`;

export default function Home() {
  return (
    <Container>
      <Welcome />
      <Header id="about-title">
        <TitleText>About Me</TitleText>
      </Header>
      <Content>
        <Section>
          <Title>My Story</Title>
          <p>lorem ipsum</p>
        </Section>
        <Section>
          <Title>My Skills</Title>
          <List>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>React</ListItem>
          </List>
        </Section>
        <Section>
          <Title>My Hobbies</Title>
          <List>
            <ListItem>gaming</ListItem>
          </List>
        </Section>
      </Content>
    </Container>
  );
}
