import React from "react";
import styled from "styled-components";
import Welcome from "./Welcome";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  padding-bottom: 2rem;
`;

const Header = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.opposite};
  padding: 5rem;
  width: 100%;
  text-align: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TitleText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.opposite};
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  gap: 2rem;
  color: ${props => props.theme.colors.opposite};
`;

const Section = styled.div`
  margin: 1rem;
  padding: 2rem;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  text-align: center;
  min-width: 200px;
  max-width: 400px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.opposite};
  font-weight: bold;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.opposite};
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
          <SectionTitle>My Story</SectionTitle>
          <p>lorem ipsum</p>
        </Section>
        <Section>
          <SectionTitle>My Skills</SectionTitle>
          <List>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>React</ListItem>
          </List>
        </Section>
        <Section>
          <SectionTitle>My Hobbies</SectionTitle>
          <List>
            <ListItem>gaming</ListItem>
          </List>
        </Section>
      </Content>
    </Container>
  );
}
