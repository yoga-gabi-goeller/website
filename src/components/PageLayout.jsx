import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import { ThemeProvider } from 'styled-components';
import defaultTheme from './styled/Theme';

import fontawesome from '@fortawesome/fontawesome';
import faSolid from '@fortawesome/fontawesome-free-solid';
import faRegular from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(faSolid, faRegular);

export default class PageLayout extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <div>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: data.site.siteMetadata.title },
                { name: 'keywords', content: 'yoga, iyengar' }
              ]}
            />
            <ThemeProvider theme={defaultTheme}>
              <div className="router-outlet">{this.props.children}</div>
            </ThemeProvider>
          </div>
        )}
      />
    );
  }
}
