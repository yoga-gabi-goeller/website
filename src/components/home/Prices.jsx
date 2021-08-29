import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { mb, px, py } from 'styled-components-spacing';
import { extractNodes } from '../../utils';
import { SectionHeader, Checkmarks, CheckmarkItem } from '../styled/Base';
import { StretchContainer } from '../styled/Layout';

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
  font-size: 4em;
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;

  &:after {
    content: '€';
    font-size: 0.4em;
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query Prices {
        allContentfulCard(sort: { fields: [position], order: ASC }) {
          edges {
            node {
              name
              validity
              color
              price
            }
          }
        }
      }
    `}
    render={({ allContentfulCard }) => {
      const prices = extractNodes(allContentfulCard);

      return (
        <div id="prices" className="container-fluid">
          <SectionHeader>PREISE</SectionHeader>
          <div className="row">
            {prices.map((card, cardIndex) => {
              const isLast = cardIndex === prices.length - 1;
              return (
                <div key={cardIndex} className="col-md-4 mt-1">
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
            <div className="col-md-12 mt-1 mt-md-2">
              <Checkmarks>
                <CheckmarkItem>90 min pro Unterrichtseinheit</CheckmarkItem>
                <CheckmarkItem>Schülerermäßigung 50%</CheckmarkItem>
                <CheckmarkItem>Einzelunterricht auf Anfrage</CheckmarkItem>
                <CheckmarkItem>Individueller Stundenplan</CheckmarkItem>
                <CheckmarkItem>Krankenkassen anerkannt</CheckmarkItem>
                <CheckmarkItem>Probestunde jederzeit möglich</CheckmarkItem>
              </Checkmarks>
            </div>
          </div>
        </div>
      );
    }}
  />
);
