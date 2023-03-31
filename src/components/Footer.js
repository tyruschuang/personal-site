import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  background-color: #fbfbfb;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  bottom: 0;
  width: 100%;
  padding-left: 1rem;
  z-index: 100;
`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem;
`;

const FooterSection = styled.div`
  flex-basis: 30%;
  margin-bottom: 2rem;
`;

const SectionHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
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
  font-size: 1.5rem;
`;

const SocialIcon = styled.i`
  display: inline-block;
  padding: 0.5rem;
  background-color: #fff;
  color: #333;
  border-radius: 50%;
`;

const BottomText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  padding: 1rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <SectionHeader>About</SectionHeader>
          <SectionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SectionText>
        </FooterSection>
        <FooterSection>
          <SectionHeader>Links</SectionHeader>
          <LinksList>
            <LinksListItem>
              <LinkStyled to="/">Home</LinkStyled>
            </LinksListItem>
            <LinksListItem>
              <LinkStyled to="/">Projects</LinkStyled>
            </LinksListItem>
            <LinksListItem>
              <LinkStyled to="/">Skills</LinkStyled>
            </LinksListItem>
            <LinksListItem>
              <LinkStyled to="/">Resume</LinkStyled>
            </LinksListItem>
            <LinksListItem>
              <LinkStyled to="/">Contact</LinkStyled>
            </LinksListItem>
          </LinksList>
        </FooterSection>
        <FooterSection>
          <SectionHeader>Social</SectionHeader>
          <SocialList>
            <SocialListItem>
              <SocialLink href="https://twitter.com/omgabuilds" target="_blank" rel="noreferrer">
                <SocialIcon className="fa fa-twitter"></SocialIcon>
              </SocialLink>
            </SocialListItem>
            <SocialListItem>
              <SocialLink href="https://github.com/omegaladon" target="_blank" rel="noreferrer">
                <SocialIcon className="fa fa-github"></SocialIcon>
              </SocialLink>
            </SocialListItem>
          </SocialList>
        </FooterSection>
      </FooterContent>
      <BottomText>&copy; 2023 Tyrus Chuang | Designed by Tyrus Chuang</BottomText>
    </FooterWrapper>
  );
}
