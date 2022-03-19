import axios from 'axios';
import { ErrorMessage as FormikErrorMessage, Field, Formik } from 'formik';
import { push } from 'gatsby';
import qs from 'qs';
import React, { Component } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { PrimaryButton, SectionHeader } from '../styled/Base';

const currentYear = new Date().getFullYear();

const Form = styled.form`
  max-width: 650px;
  margin: auto;
  padding: ${props => props.theme.spacing[2]};
`;

const FormFieldGroup = styled.div`
  label {
    margin-bottom: 0;
    color: #a2a2a2;
    font-size: 14px;
  }
`;

const RadioButtonGroup = styled(FormFieldGroup)`
  display: flex;
`;

const FormActions = styled(FormFieldGroup)`
  display: flex;
  margin-top: ${props => props.theme.spacing[1]};
`;

const FormField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.theme.spacing[2]};
  margin-bottom: 23px;
`;

const RadioButtonRoot = styled.label`
  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .radio__control {
      background: radial-gradient(${props => props.theme.colors.gold} 45%, rgba(255, 0, 0, 0) 45%);
    }
  }

  display: flex;
  align-items: center;

  .radio__input {
    display: flex;
  }

  .radio__control {
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #a2a2a2;
  }

  .radio__label {
    font-size: 16px;
    margin-top: 4px;
    margin-left: ${props => props.theme.spacing[2]};
    line-height: 1;
    color: ${props => props.theme.colors.primary} !important;
  }
`;

const RadioButton = ({ name, label, ...props }) => {
  return (
    <RadioButtonRoot {...props}>
      <span className="radio__input">
        <Field type="radio" name={name} value={label} />
        <span className="radio__control"></span>
      </span>
      <span className="radio__label">{label}</span>
    </RadioButtonRoot>
  );
};

const CheckboxRoot = styled.div`
  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
  }

  .checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid #a2a2a2;
    border-radius: 4px;
    margin-right: ${props => props.theme.spacing[2]};

    &:after {
      content: '';
      position: absolute;
      display: none;
      left: 11px;
      top: 6px;
      width: 6px;
      height: 9px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }

  a {
    font-weight: 500;
    text-decoration: underline;
    color: ${props => props.theme.colors.primary};
  }

  .children {
    margin-top: 3px;
  }

  input {
    display: none;
  }

  input:checked ~ .checkbox:after {
    display: block;
  }

  input:checked ~ .checkbox {
    background: ${props => props.theme.colors.gold};
    border-color: ${props => props.theme.colors.gold};
  }
`;

const Checkbox = ({ name, children }) => {
  return (
    <CheckboxRoot>
      <label htmlFor={name}>
        <Field type="checkbox" id={name} name={name} />
        <div className="checkbox"></div>
        <div className="children">{children}</div>
      </label>
    </CheckboxRoot>
  );
};

const RadioGroup = styled(FormFieldGroup)`
  display: flex;
  flex-direction: column;
`;

const HiddenFormField = styled(FormField)`
  display: none;
`;

const ErrorMessage = styled(FormikErrorMessage)`
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

const InfoText = styled.div`
  font-size: ${({ size = 14 }) => size}px;
  line-height: 1.3;

  a {
    font-weight: 500;
    text-decoration: underline;
    color: ${props => props.theme.colors.primary};
  }
`;

const TextArea = styled(Field)`
  border: 2px solid #a2a2a2;
  outline: 0;
  padding: ${props => props.theme.spacing[2]};
  resize: none;
  line-height: 1.2;
`;

const SignupSchema = Yup.object().shape({
  gender: Yup.string().required('Bitte geben Sie Ihr Geschlecht an'),
  firstname: Yup.string().required('Bitte geben Sie Ihren Vornamen ein'),
  lastname: Yup.string().required('Bitte geben Sie Ihren Nachnamen ein'),
  birthday: Yup.string()
    .test('test-birthday', 'Bitte geben Sie Ihr Geburtsdatum in diesem Format ein: TT.MM.JJJJ', value => {
      if (value == null) {
        return false;
      }

      const parts = value.split('.');

      if (parts.length > 3 || parts.length < 3) {
        return false;
      }

      const [day, month, year] = parts.map(part => parseInt(part));

      if (isNaN(day) || day < 1 || day > 31) {
        return false;
      }

      if (isNaN(month) || month < 1 || month > 12) {
        return false;
      }

      if (isNaN(year) || year <= currentYear - 120 || year > currentYear) {
        return false;
      }

      return true;
    })
    .required('Bitte geben Sie Ihr Geburtsdatum ein'),
  address: Yup.string().required('Bitte geben Sie Ihre Straße und Hausnummer ein'),
  plz: Yup.string()
    .matches(/^[0-9]+$/, { message: 'Keine gültige Postleitzahl' })
    .required('Bitte geben Sie Ihre Postleitzahl ein'),
  city: Yup.string().required('Bitte geben Sie Ihren Wohnort ein'),
  country: Yup.string().required('Bitte geben Sie ein Land ein'),
  email: Yup.string()
    .email('Ungültige E-Mail Adresse')
    .required('Bitte geben Sie eine E-Mail Adresse ein'),
  phone: Yup.string()
    .matches(/^[0-9\s]+$/, { message: 'Keine gültige Telefonnummer' })
    .required('Bitte geben Sie Ihre Telefonnummer ein'),
  message: Yup.string().required('Bitte geben Sie eine Nachricht ein'),
  agb: Yup.boolean()
    .required('Bitte bestätigen Sie die AGB')
    .oneOf([true], 'Bitte bestätigen Sie die AGB')
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
                gender: '',
                firstname: '',
                lastname: '',
                birthday: '',
                address: '',
                plz: '',
                city: '',
                country: '',
                email: '',
                phone: '',
                message: '',
                agb: false
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
                  <FormFieldGroup className="row mb-5">
                    <RadioGroup className="col-sm-12 mb-4">
                      <label className="mb-1">Geschlecht</label>
                      <RadioButtonGroup>
                        <RadioButton name="gender" label="Männlich" />
                        <RadioButton className="ml-4" name="gender" label="Weiblich" />
                      </RadioButtonGroup>
                      <ErrorMessage name="gender" component="div" />
                    </RadioGroup>
                    <FormField className="col-sm-12 col-md-6 pr-md-2">
                      <label htmlFor="firstname">Vorname</label>
                      <Input type="text" name="firstname" />
                      <ErrorMessage name="firstname" component="div" />
                    </FormField>
                    <FormField className="col-sm-12 col-md-6 pr-md-2">
                      <label htmlFor="lastname">Nachname</label>
                      <Input type="text" name="lastname" />
                      <ErrorMessage name="lastname" component="div" />
                    </FormField>
                    <FormField className="col-sm-12 col-md-6 pr-md-2">
                      <label htmlFor="age">Geburtsdatum</label>
                      <Input name="birthday" type="text" placeholder="TT.MM.JJJJ" />
                      <ErrorMessage name="birthday" component="div" />
                    </FormField>
                  </FormFieldGroup>
                  <FormFieldGroup className="row mb-5">
                    <FormField className="col-sm-12">
                      <label htmlFor="address">Straße und Hausnummer</label>
                      <Input name="address" type="text" />
                      <ErrorMessage name="address" component="div" />
                    </FormField>
                    <FormField className="col-sm-12 col-md-6">
                      <label htmlFor="plz">PLZ</label>
                      <Input name="plz" type="text" />
                      <ErrorMessage name="plz" component="div" />
                    </FormField>
                    <FormField className="col-sm-12 col-md-6">
                      <label htmlFor="city">Ort</label>
                      <Input name="city" type="text" />
                      <ErrorMessage name="city" component="div" />
                    </FormField>
                    <FormField className="col-sm-12 col-md-6">
                      <label htmlFor="country">Land</label>
                      <Input name="country" type="text" />
                      <ErrorMessage name="country" component="div" />
                    </FormField>
                  </FormFieldGroup>
                  <FormFieldGroup className="row mb-5">
                    <FormField className="col-12">
                      <label htmlFor="email">E-Mail</label>
                      <Input name="email" type="email" />
                      <ErrorMessage name="email" component="div" />
                    </FormField>
                    <FormField className="col-12">
                      <label htmlFor="phone">Telefon</label>
                      <Input name="phone" type="text" />
                      <ErrorMessage name="phone" component="div" />
                    </FormField>
                  </FormFieldGroup>
                  <FormFieldGroup className="row">
                    <FormField className="col-12">
                      <label className="mb-2" htmlFor="message">
                        Nachricht
                      </label>
                      <InfoText className="mb-2">
                        Bei Teilnahme an einem Schwangerschafts-Yoga-Kurs gib uns bitte Deinen voraussichtlichen
                        Entbindungstermin an.
                      </InfoText>
                      <TextArea component="textarea" name="message" rows="7" />
                      <ErrorMessage name="message" component="div" />
                    </FormField>
                  </FormFieldGroup>
                  <InfoText className="mt-5">
                    Die abgesendeten Daten werden nur zum Zweck der Bearbeitung Deines Anliegens verarbeitet. Weitere
                    Informationen findest Du in unserer <a href="/privacy">Datenschutzerklärung</a>.
                  </InfoText>
                  <FormFieldGroup className="row">
                    <FormField className="col-12">
                      <Checkbox name="agb">
                        Ich habe die&nbsp;
                        <a href="/agb">AGB</a>
                        &nbsp;gelesen und akzeptiere diese.
                      </Checkbox>
                      <ErrorMessage name="agb" component="div" />
                    </FormField>
                  </FormFieldGroup>
                  <FormActions className="mt-4">
                    <PrimaryButton type="submit">Absenden</PrimaryButton>
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
