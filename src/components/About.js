import React from "react";
import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJs,
  FaNodeJs,
  FaReact,
  FaPython,
  FaSwift,
} from "react-icons/fa";
import {
  SiIntellijidea,
  SiVisualstudiocode,
  SiMongodb,
  SiBlender,
  SiAdobephotoshop,
  SiGithub,
} from "react-icons/si";
import styled from "styled-components";

const skills = [
  { name: "Java", icon: FaJava, proficiency: 95 },
  { name: "HTML", icon: FaHtml5, proficiency: 90 },
  { name: "CSS", icon: FaCss3Alt, proficiency: 80 },
  { name: "JS", icon: FaJs, proficiency: 85 },
  { name: "React", icon: FaReact, proficiency: 80 },
  { name: "Node.js", icon: FaNodeJs, proficiency: 70 },
  { name: "Python", icon: FaPython, proficiency: 50 },
  { name: "Swift", icon: FaSwift, proficiency: 20 },
];

const applications = [
  { name: "IJ Idea", icon: SiIntellijidea, proficiency: 100 },
  { name: "VS Code", icon: SiVisualstudiocode, proficiency: 95 },
  { name: "Github", icon: SiGithub, proficiency: 90 },
  { name: "MongoDB", icon: SiMongodb, proficiency: 80 },
  { name: "Photoshop", icon: SiAdobephotoshop, proficiency: 45 },
  { name: "Blender", icon: SiBlender, proficiency: 45 },
];

const interests = ["programming", "gaming", "anime", "design"];
const accomplishments = ["published research paper", "robotics captain", "club president", "150+ service hours"];
const values = ["curiosity", "critical thinking", "collaboration", "responsibility"]

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
  padding: 50px;
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
  padding: 50px;

  @media screen and (max-width: 768px) {
    padding: 30px 10px;
  }
`;

const Header = styled.h1`
  color: ${(props) => props.theme.secondary[1]};
  font-size: 48px;
  margin-bottom: 30px;
  position: relative;
  display: inline-block;
  text-decoration: none;

  &:after {
    content: "";
    position: absolute;
    bottom: 3px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${(props) => props.theme.accent[1]};
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

const Bio = styled.p`
  font-size: 20px;
  text-align: center;
  max-width: 800px;
  margin-bottom: 2rem;
  color: ${(props) => props.theme.secondary[2]}};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0 1.5rem;
`;

const ListItem = styled.li`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.secondary[2]}};

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ListTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.secondary[1]}};
  margin-top: 2rem;
  border-bottom: 2px solid ${(props) => props.theme.accent[1]}};

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SkillTitle = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.3rem;
  color: ${(props) => props.theme.secondary[1]}};
  text-align: center;
  margin-top: 2rem;
`;

const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 0.3rem;
  width: 95%;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 0.5rem;
  }
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 1rem;
  background-color: ${(props) => props.theme.primary[3]};
  border-radius: 5px;
  box-shadow: 0px 4px 4px ${(props) => props.theme.elevation};

  &:hover {
    transition: all 0.2s ease-in-out;
    transform: translateY(-5px);
    box-shadow: 0px 4px 8px ${(props) => props.theme.elevation};
  }
`;

const SkillName = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${(props) => props.theme.secondary[1]}};
`;

const SkillProficiency = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  width: 60%;
  color: ${(props) => props.theme.secondary[1]}};
`;

const SkillBar = styled.div`
  background-color: ${(props) => props.theme.secondary[3]};
  height: 0.5rem;
  width: 100%;
  margin-right: 2rem;
  border-radius: 5px;
`;

const SkillProgress = styled.div`
  background-color: ${(props) => props.theme.accent[1]};
  height: 0.5rem;
  width: ${(props) => props.proficiency}%;
  border-radius: 5px;
`;

const SkillIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  color: ${(props) => props.theme.accent[1]};
`;

export default function About() {
  return (
    <AboutContainer>
      <ContentContainer>
        <Header>About</Header>
        <Bio>
          Hi there! My name is Tyrus Chuang, and I'm a high school student. I'm aspiring to become a software engineer, and I'm currently furthering my skills in various programming languages.
          <br />
          <br />
          In my free time, I enjoy playing video games, at the moment mainly Valorant and Overwatch. I also enjoy create digital art, and I'm currently learning more about using Blender and Adobe Photoshop to create amazing pieces.
          <br />
          <br />
          Thank you for taking the time to learn a little bit about me. I'm excited to connect with others in the industry and see where our paths may cross in the future!
        </Bio>
        <ListContainer>
          <List>
            <ListTitle>interests</ListTitle>
            {interests.map((interest, index) => (
              <ListItem key={index}>{interest}</ListItem>
            ))}
          </List>
          <List>
            <ListTitle>accomplishments</ListTitle>
            {accomplishments.map((acc, index) => (
              <ListItem key={index}>{acc}</ListItem>
            ))}
          </List>
          <List>
            <ListTitle>values</ListTitle>
            {values.map((interest, index) => (
              <ListItem key={index}>{interest}</ListItem>
            ))}
          </List>
        </ListContainer>
        <SkillTitle>skills</SkillTitle>
        <SkillContainer>
          {skills.map((skill) => (
            <Skill key={skill.name}>
              <SkillName>
                <SkillIcon>
                  <skill.icon size={32} />
                </SkillIcon>
                {skill.name}
              </SkillName>
              <SkillProficiency>
                <SkillBar>
                  <SkillProgress proficiency={skill.proficiency} />
                </SkillBar>
                <span>{skill.proficiency}%</span>
              </SkillProficiency>
            </Skill>
          ))}
        </SkillContainer>
        <SkillTitle>apps, programs, dbs, and more</SkillTitle>
        <SkillContainer>
          {applications.map((skill) => (
            <Skill key={skill.name}>
              <SkillName>
                <SkillIcon>
                  <skill.icon size={32} />
                </SkillIcon>
                {skill.name}
              </SkillName>
              <SkillProficiency>
                <SkillBar>
                  <SkillProgress proficiency={skill.proficiency} />
                </SkillBar>
                <span>{skill.proficiency}%</span>
              </SkillProficiency>
            </Skill>
          ))}
        </SkillContainer>
      </ContentContainer>
    </AboutContainer>
  );
}
