import React from "react";
import styled from "styled-components";
import { Assets } from "../Assets";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 100px);
  padding: 50px;
  background-color: ${props => props.theme.primary[1]};
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.primary[2]};
  border-radius: 10px;
  box-shadow: 0 4px 8px ${props => props.theme.elevation};
  padding: 50px;
`;

const Header = styled.h1`
  color: ${props => props.theme.secondary[1]};
  font-size: 48px;
  margin-bottom: 20px;
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
    background-color: ${props => props.theme.accent[1]};
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
  color: ${props => props.theme.secondary[2]}};
`;

const Title = styled.h2`
  color: ${props => props.theme.secondary[2]};
  font-size: 24px;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
  text-decoration: none;
  text-align: center;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

// const FormContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// const Form = styled.form`
//   display: inline-flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const FormInput = styled.input`
//   transition: all 0.2s ease-out;
//   padding: 10px;
//   margin: 10px;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   width: 300px;

//   color: ${(props) => props.theme.secondary[2]};
//   background-color: transparent;
//   border: 1px solid ${(props) => props.theme.secondary[3]};

//   &:focus {
//     border-color: ${(props) => props.theme.secondary[1]};
//     outline: none;
//   }
// `;

// const FormMessage = styled.textarea`
//   transition: all 0.2s ease-out;
//   padding: 10px;
//   margin: 10px;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   width: 300px;
//   height: 150px;
//   resize: none;

//   color: ${(props) => props.theme.secondary[2]};
//   background-color: transparent;
//   border: 1px solid ${(props) => props.theme.secondary[3]};

//   &:focus {
//     border-color: ${(props) => props.theme.secondary[1]};
//     outline: none;
//   }
// `;

// const FormError = styled.span`
//   color: ${(props) => props.theme.secondary[3]};
//   font-size: 14px;
//   margin: 5px;
// `;

// const FormSend = styled.button`
//   transition: all 0.3s ease-out;
//   padding: 10px 20px;
//   margin: 10px;
//   border: none;
//   border-radius: 5px;
//   background-color: transparent;
//   color: ${(props) => props.theme.secondary[2]};
//   border: 1px solid ${(props) => props.theme.secondary[3]};
//   font-size: 16px;
//   cursor: pointer;
//   margin-top: 20px;

//   &:hover {
//     border-color: ${(props) => props.theme.secondary[1]};
//     color: ${(props) => props.theme.secondary[1]};
//     transform: translateY(-5px);
//     box-shadow: 0px 6px 8px ${(props) => props.theme.elevation}};
//   }
// `;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const SocialsLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 20px;
`;

const SocialLink = styled.a`
  font-size: 60px;
  color: ${(props) => props.theme.secondary[3]};
  margin: 0 20px;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: ${(props) => props.theme.accent[2]}};
  }
`;

const FinalText = styled.p`
  font-size: 1.25rem;
  text-align: center;
  max-width: 800px;
  margin-top: 3rem;
  color: ${props => props.theme.secondary[2]}};
`;

export default function Contact() {
  // const { register, handleSubmit, formState: { errors } } = useForm();
  
  // const onSubmit = (data) => {
  // };

  return (
    <ContactContainer>
      <ContentContainer>
        <Header>Contact</Header>
        <Blurb>Want to reach me? Use any of the methods below, and I'll get back to you as soon as possible! So, what's your favorite color?</Blurb>
        <OptionsContainer>
          {/* <FormContainer>
            <Title>send a message 📧</Title>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormInput id="name" placeholder="name" {...register('name', { required: true })} />
              {errors.name && <FormError>This field is required</FormError>}
              
              <FormInput id="email" type="email" placeholder="email" {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
              {errors.email && <FormError>Please enter a valid email address</FormError>}
              
              <FormMessage id="message" placeholder="message" {...register('message', { required: true })} />
              {errors.message && <FormError>This field is required</FormError>}
              
              <FormSend type="submit">Send</FormSend>
            </Form>
          </FormContainer> */}
          <SocialsContainer>
            <Title>find me @ my socials 📱</Title>
            <SocialsLinkContainer>
              {Assets.socials.map((social, index) => (
                <SocialLink
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <social.icon />
                </SocialLink>
              ))}
            </SocialsLinkContainer>
          </SocialsContainer>
        </OptionsContainer>
        <FinalText>Thanks for stopping by!</FinalText>
      </ContentContainer>
    </ContactContainer>
  );
};