import React from "react";
import styled, { css } from "styled-components";
import { useForm } from "react-hook-form";

const transition = css`
  transition: all 0.4s ease-in-out;
`;

const Container = styled.div`
  ${transition}
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${(props) => props.theme.primary[1]};
`;

const Header = styled.h1`
  ${transition}
  position: relative;
  font-size: 36px;
  color: ${(props) => props.theme.secondary[2]};
`;

const ContentContainer = styled.div`
  ${transition}
  max-width: 800px;
  margin: 0 auto;
  padding: 50px 200px;
  background-color: ${(props) => props.theme.primary[2]};
  border-radius: 10px;
  box-shadow: 0 8px 10px 0 ${(props) => props.theme.elevation};
  display: flex;
  flex-direction: row;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const FormInput = styled.input`
  transition: all 0.2s ease-out;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;

  color: ${(props) => props.theme.secondary[2]};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.secondary[3]};

  &:focus {
    border-color: ${(props) => props.theme.secondary[1]};
    outline: none;
  }
`;

const FormMessage = styled.textarea`
  transition: all 0.2s ease-out;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
  height: 150px;
  resize: none;

  color: ${(props) => props.theme.secondary[2]};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.secondary[3]};

  &:focus {
    border-color: ${(props) => props.theme.secondary[1]};
    outline: none;
  }
`;

const ContactButton = styled.button`
  transition: all 0.3s ease-out;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  color: ${(props) => props.theme.secondary[2]};
  border: 1px solid ${(props) => props.theme.secondary[3]};
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    border-color: ${(props) => props.theme.secondary[1]};
    color: ${(props) => props.theme.secondary[1]};
    transform: translateY(-5px);
    box-shadow: 0px 6px 8px ${(props) => props.theme.elevation}};
  }
`;


const Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
`;

const OrText = styled.p`
  position: relative;
  top: -1.5rem;
  background-color: white;
  padding: 0 0.5rem;
`;

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    // handle form submission
  };

  return (
    <Container>
      <ContentContainer>
        <FormContainer>
          <Header>Contact</Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormInput id="name" placeholder="name" {...register('name', { required: true })} />
            {errors.name && <span>This field is required</span>}
            
            <FormInput id="email" type="email" placeholder="email" {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })} />
            {errors.email && <span>Please enter a valid email address</span>}
            
            <FormMessage id="message" placeholder="message" {...register('message', { required: true })} />
            {errors.message && <span>This field is required</span>}
            
            <ContactButton type="submit">Send</ContactButton>
          </Form>
        </FormContainer>
        <Socials>
          <OrText>or</OrText>
          <p>Or email us at:</p>
          <a href="mailto:info@example.com">info@example.com</a>
        </Socials>
      </ContentContainer>
    </Container>
  );
};

export default Contact;