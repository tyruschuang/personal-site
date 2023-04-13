import React from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactInput = styled.input`
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
  &:focus {
    outline: none;
  }
`;

const ContactTextArea = styled.textarea`
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  width: 300px;
  height: 150px;
  &:focus {
    outline: none;
  }
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting me!");
  };

  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <ContactForm onSubmit={handleSubmit}>
        <ContactInput type="text" placeholder="Name" required />
        <ContactInput type="email" placeholder="Email" required />
        <ContactTextArea placeholder="Message" required />
        <ContactButton type="submit">Send</ContactButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default Contact;
