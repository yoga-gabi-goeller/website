import React, { Component } from 'react';
import { FullWidthImage, SectionHeader } from '../styled/Base';

export default class Gallery extends Component {
  render() {
    let { gallery, ...props } = this.props;

    gallery = Object.keys(gallery).reduce((acc, prop) => {
      acc[prop] = {
        url: gallery[prop].file.url,
        alt: gallery[prop].title
      };

      return acc;
    }, {});

    return (
      <div {...props} className="container-fluid mt-1 mt-md-2">
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
  }
}
