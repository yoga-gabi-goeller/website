import React, { Component } from 'react';
import Helmet from 'react-helmet';

import { ThemeProvider } from 'styled-components';
import defaultTheme from '../components/styled/Theme';

import fontawesome from '@fortawesome/fontawesome';
import faSolid from '@fortawesome/fontawesome-free-solid';
import faRegular from '@fortawesome/fontawesome-free-regular';

fontawesome.library.add(faSolid, faRegular);

import './index.scss';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={this.props.data.site.siteMetadata.title}
          meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'yoga, iyengar' }]}
        />
        <ThemeProvider theme={defaultTheme}>
          <div className="router-outlet">{this.props.children({ ...this.props, ...this.state })}</div>
        </ThemeProvider>
      </div>
    );
  }
}

export const metadataQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
