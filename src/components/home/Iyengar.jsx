import React, { Component } from 'react';
import styled from 'styled-components';
import { PrimaryBackground, Title } from '../styled/Base';
import { flexCenter } from '../styled/Mixins';
import { px, py, pt } from 'styled-components-spacing';

const IyengarDescription = styled(PrimaryBackground)`
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

const IyengarDescriptionText = styled.div`
  ${pt(6)};
  width: 90%;
  max-width: 650px;
  font-weight: ${props => props.theme.weights.light};
`;

export default class Iyengar extends Component {
  render() {
    const { data } = this.props;

    return (
      <div id={this.props.id} className="container-fluid">
        <div className="row mt-1 mt-md-2">
          <div className="col-12">
            <IyengarDescription>
              <Title>IYENGAR YOGA</Title>
              <IyengarDescriptionText dangerouslySetInnerHTML={{ __html: data }} />
            </IyengarDescription>
          </div>
        </div>
      </div>
    );
  }
}
