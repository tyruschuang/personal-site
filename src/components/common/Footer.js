import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Assets } from "../../Assets";

const FooterWrapper = styled.footer`
  z-index: 500;
  background-color: ${(props) => props.theme.primary[2]};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 -2px 10px ${(props) => props.theme.elevation}};

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
  border-bottom: 2px solid ${(props) => props.theme.accent[2]}};
  color: ${(props) => props.theme.secondary[1]};

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

const SectionContent = styled.div``;

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
  color: ${(props) => props.theme.secondary[2]};
  text-decoration: none;
  position: relative;

  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 0;
    background-color: ${(props) => props.theme.accent[1]};
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
  color: ${(props) => props.theme.secondary[2]};
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
  color: ${(props) => props.theme.secondary[2]};
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${(props) => props.theme.accent[2]}};
  }
`;

const BottomText = styled.div`
  font-size: 16px;
  text-align: center;
  margin-top: 40px;
  color: ${(props) => props.theme.secondary[1]};
`;

const ViewSourceBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border: 1px solid ${(props) => props.theme.secondary[2]};
  color: ${(props) => props.theme.secondary[2]};
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  margin-left: 3rem;
  vertical-align: middle;
  
  &:hover {
    transition: all 0.3s ease;
    color: ${(props) => props.theme.secondary[1]};
    border-color: ${(props) => props.theme.secondary[1]};
    transform: translateY(-5px);
    box-shadow: 0px 6px 8px ${(props) => props.theme.elevation}};
  }
`;

export default function Footer() {
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
          <SectionHeader>Link</SectionHeader>
          <SectionContent>
            <LinksList>
              <LinksListItem>
                <LinkStyled to="/">Home</LinkStyled>
              </LinksListItem>
              <LinksListItem>
                <LinkStyled to="/about">About</LinkStyled>
              </LinksListItem>
              <LinksListItem>
                <LinkStyled to="/portfolio">Portfolio</LinkStyled>
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
              {Assets.socials.map((social, index) => (
                <SocialListItem>
                  <SocialLink
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <social.icon />
                  </SocialLink>
                </SocialListItem>
              ))}
            </SocialList>
          </SectionContent>
        </FooterSection>
      </FooterContent>
      <BottomText>
        Made with ❤️ by Tyrus Chuang
        <ViewSourceBtn
          href="https://github.com/omegaladon/personal-site"
          target="_blank"
          rel="noreferrer"
        >
          View Source
        </ViewSourceBtn>
      </BottomText>
    </FooterWrapper>
  );
}
