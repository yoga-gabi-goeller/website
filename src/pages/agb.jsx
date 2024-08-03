import { Link } from 'gatsby';
import React, { Component } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { StaticQuery, graphql } from 'gatsby';
import PageLayout from '../components/PageLayout';
import { BackgroundTile, PrimaryButtonInvert, SectionHeader, Toolbar } from '../components/styled/Base';
import { Container, ContentContainer } from '../components/styled/Layout';
import { extractNodes } from '../utils';

function renderText(text) {
  return text.split('\n').reduce((children, textSegment, index) => {
    return [...children, index > 0 && <br key={index} />, textSegment];
  }, []);
}

export default class Privacy extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query AGB {
            allContentfulAgb {
              edges {
                node {
                  title
                  childContentfulAgbTextRichTextNode {
                    json
                  }
                }
              }
            }
          }
        `}
        render={({ allContentfulAgb }) => {
          const { title, childContentfulAgbTextRichTextNode } = extractNodes(allContentfulAgb)[0];

          return (
            <PageLayout>
              <ContentContainer>
                <Toolbar>
                  <Link to="/">
                    <PrimaryButtonInvert>Zurück</PrimaryButtonInvert>
                  </Link>
                </Toolbar>
                <SectionHeader>{title}</SectionHeader>
                <Container className="container-fluid">
                  <BackgroundTile>
                    {documentToReactComponents(childContentfulAgbTextRichTextNode.json, { renderText })}
                  </BackgroundTile>
                </Container>
              </ContentContainer>
            </PageLayout>
          );
        }}
      />
    );
  }
}
