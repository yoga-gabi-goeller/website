import axios from 'axios';
import { ErrorMessage as FormikErrorMessage, Field, Formik } from 'formik';
import { push } from 'gatsby';
import qs from 'qs';
import React, { Component } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { PrimaryButton, SectionHeader } from '../styled/Base';

const Form = styled.form`
  max-width: 650px;
  margin: auto;
  padding: ${props => props.theme.spacing[2]};
`;

const FormFieldGroup = styled.div``;

const FormActions = styled(FormFieldGroup)`
  display: flex;
  justify-content: flex-end;
  margin-top: ${props => props.theme.spacing[1]};
`;

const FormField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.spacing[2]};
  margin-bottom: 23px;

  label {
    margin-bottom: 0;
    color: #a2a2a2;
    font-size: 14px;
  }
`;

const HiddenFormField = styled(FormField)`
  display: none;
`;

const ErrorMessage = styled(FormikErrorMessage)`
  position: absolute;
  bottom: -23px;
  font-size: 0.8rem;
  padding: 2px 0;
  color: ${props => props.theme.colors.error};
`;

const Input = styled(Field)`
  border: 0;
  border-bottom: 2px solid #a2a2a2;
  outline: 0;
  padding-bottom: ${props => props.theme.spacing[1]};
`;

const TextArea = styled(Field)`
  border: 2px solid #a2a2a2;
  outline: 0;
  padding: ${props => props.theme.spacing[2]};
  resize: none;
  line-height: 1.2;
`;

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Bitte geben Sie Ihren Namen ein'),
  age: Yup.string()
    .matches(/^[0-9]*$/, { message: 'Kein gültiges Alter' })
    .required('Bitte geben Sie Ihr Alter ein'),
  email: Yup.string()
    .email('Ungültige E-Mail Adresse')
    .required('Bitte geben Sie eine E-Mail Adresse ein'),
  message: Yup.string().required('Bitte geben Sie eine Nachricht ein')
});

export default class Signup extends Component {
  submit(values) {
    axios
      .post('/', qs.stringify(values), {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      })
      .then(_ => push('/thank-you'))
      .catch(error => console.error(error));
  }

  render() {
    return (
      <div id="signup" name="signup" className="container-fluid mt-1 mt-md-2">
        <SectionHeader>ANMELDUNG</SectionHeader>
        <div className="row">
          <div className="col-12">
            <Formik
              initialValues={{
                'form-name': 'signup',
                name: '',
                age: '',
                email: ''
              }}
              onSubmit={values => this.submit(values)}
              validationSchema={SignupSchema}
              render={({ isSubmitting, isValid, handleSubmit }) => (
                <Form
                  spellCheck="false"
                  name="signup"
                  onSubmit={handleSubmit}
                  data-netlify-honeypot="bot-field"
                  data-netlify="true"
                >
                  <Input type="hidden" name="form-name" />
                  <HiddenFormField>
                    <Input name="bot-field" />
                  </HiddenFormField>
                  <FormFieldGroup className="row">
                    <FormField className="col-sm-12 col-md-6 pr-md-2">
                      <label htmlFor="name">Name</label>
                      <Input type="text" name="name" />
                      <ErrorMessage name="name" component="div" />
                    </FormField>
                    <FormField className="col-sm-12 col-md-6 pr-md-2">
                      <label htmlFor="age">Alter</label>
                      <Input name="age" type="text" />
                      <ErrorMessage name="age" component="div" />
                    </FormField>
                  </FormFieldGroup>
                  <FormFieldGroup className="row">
                    <FormField className="col-12 pl-md-2">
                      <label htmlFor="email">E-Mail</label>
                      <Input name="email" type="email" />
                      <ErrorMessage name="email" component="div" />
                    </FormField>
                  </FormFieldGroup>
                  <FormFieldGroup className="row">
                    <FormField className="col-12">
                      <label className="mb-2" htmlFor="message">
                        Nachricht
                      </label>
                      <TextArea component="textarea" name="message" rows="7" />
                      <ErrorMessage name="message" component="div" />
                    </FormField>
                  </FormFieldGroup>
                  <FormActions>
                    <PrimaryButton disabled={isSubmitting || !isValid} type="submit">
                      Absenden
                    </PrimaryButton>
                  </FormActions>
                </Form>
              )}
            />
          </div>
        </div>
      </div>
    );
  }
}
