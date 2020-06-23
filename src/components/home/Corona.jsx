import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { graphql, StaticQuery } from 'gatsby';
import React, { Component } from 'react';
import styled from 'styled-components';
import TextSection from './TextSection';

const VirusBig = styled.img`
  user-select: none;
  position: absolute;
  top: 60px;
  right: 60px;
  width: 260px;
`;

const VirusDots = styled.img`
  user-select: none;
  position: absolute;
  bottom: 50px;
  left: 80px;
  width: 50px;
`;

const SubHeadline = styled.strong`
  margin-bottom: 4px;
`;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>
  },
  renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text])
};

export default class Covid extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query CoronaQuery {
            allContentfulCorona {
              edges {
                node {
                  headline
                  text {
                    json
                  }
                }
              }
            }
          }
        `}
        render={({ allContentfulCorona }) => {
          const { headline, text } = allContentfulCorona.edges[0].node;

          return (
            <TextSection id="covid" title={headline.toUpperCase()}>
              <VirusBig src="images/virus_big.svg" />
              <VirusDots src="images/virus_dots.svg" />
              <div>{documentToReactComponents(text.json, options)}</div>
            </TextSection>
          );
        }}
      />
    );
  }
}
