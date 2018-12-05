import React, { Component } from 'react';
import styled from 'styled-components';
import { p, py, px, mb } from 'styled-components-spacing';
import { SectionHeader, AccentBackground } from '../styled/Base';
import { StretchContainer } from '../styled/Layout';
import { flexCenter, breakpoint } from '../styled/Mixins';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const CourseInfos = styled(AccentBackground)`
  height: 325px;
  color: ${props => props.theme.colors.white};
  ${flexCenter()};
`;

const CourseInfoList = styled.ul`
  font-size: 24px;
  margin: 0;
  padding: 0;
  list-style: none;

  ${breakpoint('sm')} {
    font-size: 20px;
    ${p(1)};
  }
`;

const PriceContainer = styled.div`
  height: 325px;
  background: #f6f5f2;
  padding: 10px;
`;

const PriceCard = styled(StretchContainer)`
  color: ${props => props.theme.colors[props.color || 'bronze']};
  border: 2px solid ${props => props.theme.colors[props.color || 'bronze']};
  ${py(6)};
  ${px(4)};
`;

const PriceCardHeader = styled.h1`
  text-align: center;
  margin: 0;
  font-size: 38px;
  line-height: 1em;
  ${mb(1)};
`;

const PriceHardSubheader = styled.h3`
  font-weight: 300;
  color: #929191;
  text-align: center;
  margin: 0;
`;

const Price = styled.div`
  color: black;
  text-align: center;
  font-size: 5em;
  position: absolute;
  bottom: 40px;
  left: 0;
  right: 0;

  &:after {
    content: '€';
    font-size: 0.4em;
  }
`;

class CourseInfoListItem extends Component {
  render() {
    return (
      <li style={{ lineHeight: '1.8em', fontWeight: 300 }}>
        <FontAwesomeIcon className="mr-3" icon="check" size="sm" />
        {this.props.children}
      </li>
    );
  }
}

export default class Prices extends Component {
  render() {
    const { prices, ...rest } = this.props;
    return (
      <div {...rest} className="container-fluid">
        <SectionHeader>PREISE</SectionHeader>
        <div className="row">
          {prices.map((card, cardIndex) => {
            const isLast = cardIndex === prices.length - 1;
            return (
              <div key={cardIndex} className={`col-md-4 mt-1 ${!isLast ? 'mt-md-0' : 'mt-md-2'}`}>
                <PriceContainer>
                  <PriceCard color={card.color}>
                    <PriceCardHeader>{card.name}</PriceCardHeader>
                    <PriceHardSubheader>{card.validity}</PriceHardSubheader>
                    <Price>{card.price}</Price>
                  </PriceCard>
                </PriceContainer>
              </div>
            );
          })}
          <div className="col-md-8 mt-1 mt-md-2">
            <CourseInfos>
              <CourseInfoList>
                <CourseInfoListItem>90 min pro Unterrichtseinheit</CourseInfoListItem>
                <CourseInfoListItem>Schühlerermäßigung 50%</CourseInfoListItem>
                <CourseInfoListItem>Einzelunterricht auf Anfrage</CourseInfoListItem>
                <CourseInfoListItem>Individueller Stundenplan</CourseInfoListItem>
                <CourseInfoListItem>Krankenkassen anerkannt</CourseInfoListItem>
                <CourseInfoListItem>Probestunde jederzeit möglich</CourseInfoListItem>
              </CourseInfoList>
            </CourseInfos>
          </div>
        </div>
      </div>
    );
  }
}
