import React from 'react';
import styled from 'styled-components';
import { pt, px, py } from 'styled-components-spacing';
import { PrimaryBackground, Title } from '../styled/Base';
import { flexCenter } from '../styled/Mixins';

const ContentWrapper = styled(PrimaryBackground)`
  display: flex;
  flex-direction: column;
  ${px(3)};
  ${py(9)};
  ${flexCenter()};
  color: ${props => props.theme.colors.white};

  @media only screen and (max-width: ${props => props.theme.screenSizes.lg}) {
    ${py(6)};
  }
`;

const TextWrapper = styled.div`
  ${pt(6)};
  width: 90%;
  max-width: 650px;
  font-weight: ${props => props.theme.weights.light};

  strong {
    display: block;
    font-weight: 500;
  }
`;

export default ({ id, title, children }) => (
  <div id={id} className="container-fluid">
    <div className="row mt-1 mt-md-2">
      <div className="col-12">
        <ContentWrapper>
          <Title>{title}</Title>
          <TextWrapper>{children}</TextWrapper>
        </ContentWrapper>
      </div>
    </div>
  </div>
);
