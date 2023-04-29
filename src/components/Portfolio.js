import React from "react";
import styled from "styled-components";
import { Assets } from "../Assets";
import DisplayedCard from "./Card";
import Carousel from "./Carousel";

const PortfolioContainer = styled.div`
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
  margin: 3rem;
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
`;

const Blurb = styled.p`
  font-size: 1.25rem;
  text-align: center;
  max-width: 800px;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.secondary[2]}};
`;

const JumpContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default function Portfolio() {

  return (
    <PortfolioContainer>
      <ContentContainer>
        <Header>Portfolio</Header>
        <Blurb>
          I work on both coding projects, and digital/3d artwork using Blender
          and the block game, Minecraft. View them here on this page!
        </Blurb>
        <JumpContainer>
          <DisplayedCard
            image={
              Assets.portfolio.coding_projects_image
            }
            title={"Code"}
            description={
              "Various coding projects I am working on, or have worked on in the past."
            }
            tags={[]}
            onClick={() => scrollTo("coding-projects")}
          />
          <DisplayedCard
            image={
              Assets.portfolio.artwork_image
            }
            title={"Artwork"}
            description={
              "Digital artwork made using Blender and Minecraft."
            }
            tags={[]}
            onClick={() => scrollTo("artwork-projects")}
          />
        </JumpContainer>
      </ContentContainer>
      <ContentContainer id="coding-projects">
        <Header>Code</Header>
        <Blurb>Any of my previous coding projects. These can range from websites, to Minecraft plugins, to various other random things.</Blurb>
        <Grid>
          {Assets.portfolio.coding_projects.map((project, index) => (
            <DisplayedCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags}
              onClick={() => window.open(project.link, "_blank")}
            />
          ))}
        </Grid>
      </ContentContainer>
      <ContentContainer id="artwork-projects">
        <Header>Artwork</Header>
        <Blurb>Any digital artwork that I've created, whether in Minecraft, Blender, or Photoshop.</Blurb>
        <Carousel images={Assets.portfolio.artwork_projects} />
      </ContentContainer>
    </PortfolioContainer>
  );
}

const scrollTo = (id) => {
  var element = document.getElementById(id);
  var headerOffset = 45;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth"
  });
}
