import React, { Component } from 'react';
import Link from 'gatsby-link';
import { ContentContainer, FlexContainer } from '../components/styled/Layout';
import { Toolbar, SectionHeader, PrimaryButton } from '../components/styled/Base';

export default class ThankYou extends Component {
  render() {
    return (
      <ContentContainer>
        <Toolbar />
        <SectionHeader>Vielen Dank für Ihre Anfrage!</SectionHeader>
        <FlexContainer horizontalAlign="center" className="container-fluid">
          <Link to="/">
            <PrimaryButton>Zurück</PrimaryButton>
          </Link>
        </FlexContainer>
      </ContentContainer>
    );
  }
}
