import { graphql, StaticQuery } from 'gatsby';
import React from 'react';
import TextSection from './TextSection';

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
        <TextSection id="iyengar-yoga" title="IYENGAR YOGA">
          <div dangerouslySetInnerHTML={{ __html: iyengar }} />
        </TextSection>
      );
    }}
  />
);
