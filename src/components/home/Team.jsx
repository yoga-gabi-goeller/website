import React, { Component } from 'react';
import styled from 'styled-components';
import { SectionHeader } from '../styled/Base';
import { breakpoint } from '../styled/Mixins';
import { p, mt } from 'styled-components-spacing';

const TrainerDescription = styled.div`
  ${p(3)};
  background: #f6f5f2;
`;

const TrainerName = styled.h3`
  text-align: center;
  font-weight: ${props => props.theme.weights.normal};
  margin: 0;
`;

const TrainerStatus = TrainerName.withComponent('h4').extend`
  color: #929191;
`;

const Trainer = styled.div`
  ${breakpoint('sm')} {
    & + & {
      ${mt(1)};
    }
  }
`;

export default class Team extends Component {
  render() {
    const { trainers } = this.props;

    return (
      <div id={this.props.id} className="container-fluid">
        <SectionHeader>UNSER TEAM</SectionHeader>
        <div className="row">
          {trainers.map((trainer, index) => {
            const fullname = `${trainer.firstname} ${trainer.lastname}`;
            const image = trainer.photo.file.url;
            return (
              <Trainer key={index} className="col-sm-12 col-md-4">
                <img src={image} alt={`Foto ${fullname}`} />
                <TrainerDescription>
                  <TrainerName>{fullname}</TrainerName>
                  <TrainerStatus>{trainer.level}</TrainerStatus>
                </TrainerDescription>
              </Trainer>
            );
          })}
        </div>
        <div className="row mt-1 mt-md-2">
          <div className="col-12">
            <img src="images/iyengar.jpg" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
