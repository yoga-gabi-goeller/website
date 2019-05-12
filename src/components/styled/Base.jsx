import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';
import { py, px, mx } from 'styled-components-spacing';
import { margin, flexCenter } from './Mixins';
import { FlexContainer, StretchContainer } from './Layout';

export const PrimaryBackground = styled.div`
  background: ${props => props.theme.colors.primary};
`;

export const AccentBackground = styled.div`
  background: ${props => props.theme.colors.accent};
`;

export const OpaquePrimaryBackground = styled(PrimaryBackground)`
  opacity: 0.9;
`;

export const BackgroundImage = styled.div`
  position: relative;
  background: url("${props => withPrefix(props.background)}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: ${props => (!!props.height ? props.height + 'px' : 100 + '%')};
  width: 100%;
`;

export const Quote = styled.span`
  padding: ${props => props.theme.spacing[5]};
  max-width: 400px;

  @media only screen and (max-width: ${props => props.theme.screenSizes.sm}) {
    font-size: 1rem;
  }
`;

export const QuoteWrapper = styled(StretchContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 24px;
  font-weight: 100;
  background: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.accentContrast};
`;

export const QuoteBackgroundPattern = styled.img`
  position: absolute;
  max-width: ${props => (!!props.width ? props.width : '120')}px;
  bottom: ${props => (!!props.bottom ? props.bottom : '30')}px;
  right: ${props => (!!props.right ? props.right : '100')}px;

  @media only screen and (max-width: ${props => props.theme.screenSizes.lg}) {
    max-width: 50px;
    right: 50px;
  }
`;

export const QuoteAuthor = styled.div`
  font-size: 14px;
  text-transform: uppercase;

  &:before {
    content: '\u2014';
    margin-right: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 30px;
  line-height: 30px;
  font-weight: 500;
  text-align: ${props => (!!props['text-align'] ? props['text-align'] : 'left')};
  ${props => margin(props.mt, props.mr, props.mb, props.ml)};
`;

export const SectionHeader = styled(FlexContainer)`
  ${flexCenter()};
  padding: 130px 0 30px;
  color: #333333;
  font-size: 30px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 100px;
    width: 80px;
    height: 1px;
    background: #333333;
  }
`;

export const ToolbarChildren = styled.div`
  margin-left: auto;
`;

export const ToolbarBase = props => {
  return (
    <div {...props}>
      <img src="images/logo_horizontal_bright.svg" alt="Iyengar Logo" />
      <span className="d-none d-md-block">Zertifizierte Iyengar® Yoga Schule</span>
      <ToolbarChildren>{props.children}</ToolbarChildren>
    </div>
  );
};

export const Toolbar = styled(ToolbarBase)`
  background: ${props => props.theme.colors.primary};
  opacity: 0.9;
  position: ${props => (props.sticky === true || typeof props.sticky === 'undefined' ? 'sticky' : 'relative')};
  top: 0;
  z-index: 3;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${py(2)};
  ${px(4)};
  ${mx(1)};

  img {
    height: 25px;
    width: auto;
  }

  span {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    font-weight: 100;
    color: ${props => props.theme.colors.white};
  }
`;

export const PrimaryButton = styled.button`
  border: 2px solid ${props => props.theme.colors.primary};
  background: transparent;
  padding: 0.25rem 0.5rem 0.1rem 0.5rem;
  font-weight: 300;
  cursor: pointer;

  &:disabled {
    opacity: 0.2;
    cursor: initial;
  }

  &:hover:not(:disabled) {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

export const PrimaryButtonInvert = styled(PrimaryButton)`
  border-color: white;
  color: white;

  &:hover:not(:disabled) {
    background: white;
    color: black;
  }
`;

export const MenuButton = styled.button`
  font-size: 0.9rem;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-right: ${props => `calc(10px + ${props.theme.spacing[1]})`};
  background: ${props => props.theme.colors.white};
  opacity: 0.6;
  border: 0;
  z-index: 4;
  width: 29px;
  height: 29px;
  color: ${props => props.theme.colors.black};
`;

export const FullWidthImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const BackgroundTile = styled.div`
  padding: ${props => props.theme.spacing[5]};
  background: #f6f5f2;
`;

export const Logo = styled.img`
  height: 50px;
`;
