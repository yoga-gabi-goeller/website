import React, { Component } from 'react';
import { StretchContainer, FlexContainer } from '../styled/Layout';
import { PrimaryButtonInvert, SectionHeader } from '../styled/Base';
import { breakpoint } from '../styled/Mixins';
import styled from 'styled-components';
import { Padding, Margin } from 'styled-components-spacing';
import { Link } from 'gatsby';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { animateScroll as scroll } from 'react-scroll';

const LargeText = styled.span`
  font-size: 24px;
`;

const FooterWrapper = styled(StretchContainer)`
  position: relative;
  background: #333333;
  color: ${props => props.theme.colors.white};
`;

const CompanyInformationContainer = styled(FlexContainer)`
  justify-content: space-between;
  margin-top: -15px;

  ${breakpoint('sm')} {
    flex-direction: column;
  }
`;

const CompanyInformation = styled.div`
  font-weight: 100;
  margin-top: 15px;
`;

const Imprint = styled(FlexContainer)`
  margin-top: ${props => props.theme.spacing[3]};

  a + a {
    margin-left: ${props => props.theme.spacing[3]};
  }
`;

const BackToTop = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  text-transform: uppercase;

  button {
    margin-left: ${props => props.theme.spacing[2]};
  }
`;

export default class Footer extends Component {
  scrollToTop() {
    scroll.scrollToTop({ duration: 400 });
  }

  render() {
    return (
      <div id="contact" className="container-fluid mt-1 mt-md-2">
        <SectionHeader>KONTAKT</SectionHeader>
        <img src="images/map.jpg" alt="Karte" />
        <FooterWrapper>
          <BackToTop>
            <PrimaryButtonInvert onClick={this.scrollToTop}>
              <FontAwesomeIcon icon="arrow-up" />
            </PrimaryButtonInvert>
          </BackToTop>
          <Padding top="7" bottom="3" horizontal={{ xs: '4', md: '6', lg: '8' }}>
            <LargeText>
              Iyengar Yoga <br /> Gabi Göller
            </LargeText>
            <Margin top="2">
              <CompanyInformationContainer>
                <CompanyInformation>
                  Mönchstraße 17a <br />
                  33378 Rheda-Wiedenbück
                </CompanyInformation>
                <CompanyInformation>
                  Email: <br />
                  info@gabigoeller.de
                </CompanyInformation>
                <CompanyInformation>
                  Bürozeiten: <br />
                  Mittwochs 10:00 - 12:00 Uhr
                </CompanyInformation>
                <CompanyInformation>
                  Mobil: <br />
                  <LargeText>0173 9029421</LargeText>
                </CompanyInformation>
              </CompanyInformationContainer>
            </Margin>
            <Imprint horizontalAlign="flex-end">
              <Link to="/privacy">
                <PrimaryButtonInvert>Datenschutz</PrimaryButtonInvert>
              </Link>
              <Link to="/imprint">
                <PrimaryButtonInvert>Impressum</PrimaryButtonInvert>
              </Link>
            </Imprint>
          </Padding>
        </FooterWrapper>
      </div>
    );
  }
}
