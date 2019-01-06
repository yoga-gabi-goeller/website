import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
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

  strong {
    display: block;
    font-weight: 500;
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query IyengarText {
        allContentfulText(filter: { slug: { eq: "iyengar" } }) {
          edges {
            node {
              slug
              text {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { iyengar } = data.allContentfulText.edges
        .map(edge => edge.node)
        .reduce((acc, current) => {
          const { html } = current.text.childMarkdownRemark;
          acc[current.slug] = html;
          return acc;
        }, {});

      return (
        <div id="iyengar-yoga" className="container-fluid">
          <div className="row mt-1 mt-md-2">
            <div className="col-12">
              <IyengarDescription>
                <Title>IYENGAR YOGA</Title>
                <IyengarDescriptionText dangerouslySetInnerHTML={{ __html: iyengar }} />
              </IyengarDescription>
            </div>
          </div>
        </div>
      );
    }}
  />
);
