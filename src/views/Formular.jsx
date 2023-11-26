import { Formik } from "formik";
import styled from "styled-components";

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;

const Heading = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
`;

const Message = styled.p`
  margin-top: 8px;
`;

function ContactForm() {
  return (
    <FormContainer>
      <Heading>Contact Form</Heading>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values);
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ handleChange, handleSubmit, isSubmitting, values, submitForm }) => (
          <StyledForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name:</Label>
              <Input
                id="name"
                name="name"
                onChange={handleChange}
                type="text"
                value={values.name}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email:</Label>
              <Input
                id="email"
                name="email"
                onChange={handleChange}
                type="email"
                value={values.email}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message:</Label>
              <TextArea
                id="message"
                name="message"
                onChange={handleChange}
                value={values.message}
              />
            </FormGroup>
            {isSubmitting ? (
              <Message>Sending message...</Message>
            ) : (
              <>
                <Button type="submit" onClick={submitForm}>
                  Send Message
                </Button>
                {values.name && values.email && values.message && (
                  <Message>Please fill in all fields.</Message>
                )}
              </>
            )}
          </StyledForm>
        )}
      </Formik>
    </FormContainer>
  );
}

export default ContactForm;
