import React from "react";
import styled, { keyframes } from "styled-components";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { lighten } from "../Utils";

const skills = [
  { name: "HTML", icon: FaHtml5, proficiency: 90 },
  { name: "CSS", icon: FaCss3Alt, proficiency: 80 },
  { name: "JavaScript", icon: FaJs, proficiency: 85 },
  { name: "React", icon: FaReact, proficiency: 80 },
  { name: "Node.js", icon: FaNodeJs, proficiency: 70 },
];

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 1200px;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: linear-gradient(135deg, ${props => lighten(props.theme.colors.gradient1, 0.32)} 0%, ${props => lighten(props.theme.colors.gradient2, 0.32)} 100%);
  background-size: 400% 400%;
  animation: ${gradientAnimation} 10s ease-in-out infinite;
`;

const Skill = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
  padding: 1rem;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 5px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const SkillName = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
`;

const SkillProficiency = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  width: 60%;
`;

const SkillBar = styled.div`
  background-color: ${props => props.theme.skills.barBackground};
  height: 0.5rem;
  width: 100%;
  margin-right: 2rem;
  border-radius: 5px;
`;

const SkillProgress = styled.div`
  background-color: ${props => props.theme.colors.accent};
  height: 0.5rem;
  width: ${(props) => props.proficiency}%;
  border-radius: 5px;
`;

const SkillIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  color: ${props => props.theme.colors.accent};
`;

const Header = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin-top: 3rem;
  color: ${props => props.theme.colors.accent};
`;

const Blurb = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 1rem 0 3rem;
  color: ${props => props.theme.colors.opposite};
`;

const SkillsPage = () => {
  return (
    <>
      <Header>My Skills</Header>
      <Blurb>
        Here's a list of my technical skills and my proficiency in each of them.
      </Blurb>
      <SkillsContainer>
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
      </SkillsContainer>
    </>
  );
};

export default SkillsPage;
