import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { FullWidthImage, SectionHeader } from '../styled/Base';
import { extractNodes } from '../../utils';

export default () => (
  <StaticQuery
    query={graphql`
      fragment assetFields on ContentfulAsset {
        title
        file {
          url
        }
      }

      query Gallery {
        allContentfulGallery(filter: { active: { eq: true } }) {
          edges {
            node {
              image_1 {
                ...assetFields
              }
              image_2 {
                ...assetFields
              }
              image_3 {
                ...assetFields
              }
              image_4 {
                ...assetFields
              }
              image_5 {
                ...assetFields
              }
            }
          }
        }
      }
    `}
    render={({ allContentfulGallery }) => {
      const nodes = extractNodes(allContentfulGallery);
      const activeGallery = nodes[0];

      const gallery = Object.keys(activeGallery).reduce((acc, prop) => {
        acc[prop] = {
          url: activeGallery[prop].file.url,
          alt: activeGallery[prop].title
        };

        return acc;
      }, {});

      return (
        <div id="gallery" className="container-fluid mt-1 mt-md-2">
          <SectionHeader>GALERIE</SectionHeader>
          <div className="row">
            <div className="col-12">
              <FullWidthImage src={gallery.image_1.url} alt={gallery.image_1.alt} />
            </div>
            <div className="col-sm-12 col-md-8 mt-1 mt-md-2">
              <FullWidthImage src={gallery.image_2.url} alt={gallery.image_2.alt} />
            </div>
            <div className="col-sm-12 col-md-4 mt-1 mt-md-2">
              <FullWidthImage src={gallery.image_3.url} alt={gallery.image_3.alt} />
            </div>
            <div className="col-sm-12 col-md-4 mt-1 mt-md-2">
              <FullWidthImage src={gallery.image_4.url} alt={gallery.image_4.alt} />
            </div>
            <div className="col-sm-12 col-md-8 mt-1 mt-md-2">
              <FullWidthImage src={gallery.image_5.url} alt={gallery.image_5.alt} />
            </div>
          </div>
        </div>
      );
    }}
  />
);
