import React, { Component } from 'react';
import styled from 'styled-components';
import { BackgroundImage, OpaquePrimaryBackground, Logo } from '../styled/Base';

export const HeaderLogo = styled(OpaquePrimaryBackground)`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 258px;
  height: 181px;
  opacity: 0.9;
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderLogoText = styled.div`
  font-weight: 100;
  color: ${props => props.theme.colors.white};
  font-size: 20px;

  &:first-of-type {
    font-size: 24px;
  }

  &:last-of-type {
    margin-top: -${props => props.theme.spacing[1]};
  }
`;

const HeaderContent = styled.div``;

export default class Header extends Component {
  render() {
    return (
      <HeaderContent id="home" className="container-fluid">
        <BackgroundImage height="563" background="images/header.jpg">
          <HeaderLogo>
            <Logo className="mb-3" src="images/logo.svg" alt="Logo" />
            <HeaderLogoText>IYENGAR YOGA</HeaderLogoText>
            <HeaderLogoText>Gabi Göller</HeaderLogoText>
          </HeaderLogo>
        </BackgroundImage>
      </HeaderContent>
    );
  }
}
