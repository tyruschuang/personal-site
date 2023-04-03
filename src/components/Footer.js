import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";

const FooterWrapper = styled.footer`
  background-color: #fbfbfb;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  bottom: 0;
  width: 100%;
  z-index: 100;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 3rem;
  padding-right: 25%;
  padding-left: 25%;
`;

const FooterSection = styled.div`
  flex-basis: 30%;
  margin-bottom: 2rem;
`;

const SectionHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding-left: 1rem;
  border-left: 4px solid #0077c2;
`;

const SectionContent = styled.div`
  padding-left: 1.3rem;
`;

const SectionText = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LinksListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const LinkStyled = styled(Link)`
  color: #333;
  text-decoration: none;
  position: relative;
  padding-bottom: 3px;
  transition: color 0.1s ease-in-out;

  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background-color: #0077c2;
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

const SocialList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const SocialListItem = styled.li`
  margin-right: 1rem;
`;

const SocialLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 2rem;
  transition: all 0.3s ease;

  &:hover {
    color: #0077c2;
  }
`;

const BottomText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  padding: 1rem;
`;

const ViewSourceBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border: 1px solid #333;
  color: #333;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  margin-left: 3rem;
  vertical-align: middle;
  
  &:hover {
    background-color: #333;
    color: #fff;
    border-color: #333;
  }
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
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
          <SectionHeader>About</SectionHeader>
          <SectionContent>
            <SectionText>
              High school student doing high school things.
            </SectionText>
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
