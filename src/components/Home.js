import React from "react";
import styled from "styled-components";
import Welcome from "./Welcome";
import { AiOutlineArrowDown } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
`;

const Header = styled.div`
  background-color: #fff;
  color: #ffffff;
  padding: 5rem;
  width: 100%;
  text-align: center;
`;

const TitleText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #000000;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
`;

const Section = styled.div`
  margin: 1rem;
  padding: 2rem;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  text-align: center;
  min-width: 200px;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  color: #000000;
  font-weight: bold;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: #000000;
`;

export default function Home() {
  const blurb =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  return (
    <Container>
      <Welcome />
      <Header>
        <TitleText>About Me</TitleText>
      </Header>
      <Content>
        <Section>
          <Title>My Story</Title>
          <p>{blurb}</p>
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
            <ListItem>Reading</ListItem>
            <ListItem>Hiking</ListItem>
            <ListItem>Playing guitar</ListItem>
            <ListItem>Watching movies</ListItem>
          </List>
        </Section>
      </Content>
    </Container>
  );
}
