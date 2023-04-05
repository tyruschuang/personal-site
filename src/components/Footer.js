import React from "react";
import { Link } from "react-router-dom";
import styled, { useTheme } from "styled-components";

import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.footer.background};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);

  @media screen and (min-width: 768px) {
    padding: 60px 0 20px;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    flex-wrap: nowrap;
    width: 80%;
  }

  @media screen and (min-width: 1024px) {
    width: 40%;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
  padding: 0 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    width: 50%;
  }
`;

const SectionHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 7px;
  margin-bottom: 10px;
  border-bottom: 2px solid ${props => props.theme.colors.accent}};

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const SectionContent = styled.div`
`;

const LinksList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const LinksListItem = styled.li`
  margin-bottom: 10px;
`;

const LinkStyled = styled(Link)`
  font-size: 18px;
  color: ${props => props.theme.colors.opposite};
  text-decoration: none;
  position: relative;
  transition: color 0.1s ease-in-out;

  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background-color: ${(props) => props.theme.colors.accent};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.2s ease-in-out;
  }

  &:hover:after {
    width: 100%;
  }
`;

const SectionText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 0;
`;

const SocialList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const SocialListItem = styled.li`
  margin-right: 15px;
`;

const SocialLink = styled.a`
  font-size: 36px;
  color: ${props => props.theme.colors.opposite};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${props => props.theme.colors.accent}};
  }
`;


const BottomText = styled.div`
  font-size: 16px;
  text-align: center;
  margin-top: 40px;
`;

const ViewSourceBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border: 1px solid ${props => props.theme.colors.opposite};
  color: ${props => props.theme.colors.opposite};
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  margin-left: 3rem;
  vertical-align: middle;
  
  &:hover {
    background-color: ${props => props.theme.colors.opposite};
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.opposite};
  }
`;

export default function Footer() {
  const theme = useTheme();
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <SectionHeader>About</SectionHeader>
          <SectionContent>
            <SectionText>
              High school student doing high school things.
            </SectionText>
          </SectionContent>
        </FooterSection>
        <FooterSection>
          <SectionHeader>Links</SectionHeader>
          <SectionContent>
            <LinksList>
              <LinksListItem>
                <LinkStyled to="/">Home</LinkStyled>
              </LinksListItem>
              <LinksListItem>
                <LinkStyled to="/projects">Projects</LinkStyled>
              </LinksListItem>
              <LinksListItem>
                <LinkStyled to="/skills">Skills</LinkStyled>
              </LinksListItem>
              <LinksListItem>
                <LinkStyled to="/resume">Resume</LinkStyled>
              </LinksListItem>
              <LinksListItem>
                <LinkStyled to="/contact">Contact</LinkStyled>
              </LinksListItem>
            </LinksList>
          </SectionContent>
        </FooterSection>
        <FooterSection>
          <SectionHeader>Social</SectionHeader>
          <SectionContent>
            <SocialList>
              <SocialListItem>
                <SocialLink href="https://twitter.com/omgabuilds" target="_blank" rel="noreferrer">
                  <AiOutlineTwitter />
                </SocialLink>
              </SocialListItem>
              <SocialListItem>
                <SocialLink href="https://github.com/omegaladon" target="_blank" rel="noreferrer">
                  <AiOutlineGithub />
                </SocialLink>
              </SocialListItem>
            </SocialList>
          </SectionContent>
        </FooterSection>
      </FooterContent>
      <BottomText>
        &copy; 2023 | Designed by Tyrus Chuang
        <ViewSourceBtn href="https://github.com/omegaladon/personal-site" target="_blank" rel="noreferrer">View Source</ViewSourceBtn>
      </BottomText>
    </FooterWrapper>
  );
}
