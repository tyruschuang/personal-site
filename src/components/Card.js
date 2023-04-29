import React from "react";
import styled from "styled-components";

const Card = styled.a`
  background-color: ${(props) => props.theme.primary[1]};
  box-shadow: 0 4px 4px ${(props) => props.theme.elevation}};
  width: 18rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  max-height: 400px;
  min-height: 400px;

  &:hover {
    transform: translateY(-5px);
    transition: all 0.3s ease-in-out;
    box-shadow: 0 4px 8px ${(props) => props.theme.elevation}};
  }
`;

const Image = styled.img`
  max-width: 100%;
  min-height: 200px;
  max-height: 200px;
  height: 200px;
  display: block;
  border-radius: 4px 4px 0 0;
  object-fit: cover;
`;

const CardTitle = styled.h5`
  padding: 1rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.secondary[1]};
`;

const CardDescription = styled.p`
  padding: 1rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  min-height: 80px;
  max-height: 80px;
  color: ${(props) => props.theme.secondary[2]};
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0rem 1rem 1rem 1rem;
`;

const Tag = styled.span`
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  margin-right: 0.5rem;
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.secondary[2]};

  &:before {
    content: "#";
  }
`;

export default function DisplayedCard({ image, title, description, tags, onClick }) {
  return (
    <Card onClick={onClick}>
      <Image src={image} alt="Project Image" />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <TagContainer>
        {tags.map((tag, index) => (
          <Tag key={index} color={tag.color}>
            {tag.text}
          </Tag>
        ))}
      </TagContainer>
    </Card>
  );
}
