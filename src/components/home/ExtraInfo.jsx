import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { MARKS } from '@contentful/rich-text-types';
import { StaticQuery, graphql } from 'gatsby';
import React, { Component } from 'react';
import styled from 'styled-components';
import TextSection from './TextSection';

const RichTextContainer = styled.div`
  ol {
    padding-left: 24px;

    li p {
      margin-bottom: 4px;
    }
  }
`;

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>
  },
  renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text])
};

export default class ExtraInfo extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query ExtraInfoQuery {
            allContentfulExtraInfo {
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
        render={({ allContentfulExtraInfo }) => {
          const { headline, text } = allContentfulExtraInfo.edges[0].node;

          return (
            <TextSection id="workshops" title={headline}>
              <RichTextContainer>{documentToReactComponents(text.json, options)}</RichTextContainer>
            </TextSection>
          );
        }}
      />
    );
  }
}
