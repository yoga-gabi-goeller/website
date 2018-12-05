import React, { Component } from 'react';
import { FullWidthImage, Quote, QuoteWrapper, QuoteBackgroundPattern } from '../styled/Base';
import { Margin } from 'styled-components-spacing';

export default class ImageSection extends Component {
  render() {
    return (
      <Margin
        top={this.props.mt || 0}
        bottom={this.props.mb || 0}
        horizontal={this.props.my || 0}
        vertical={this.props.mx || 0}
        className="container-fluid"
      >
        <div className="row">
          <div className="col-sm-12 col-md-8">
            <FullWidthImage src="images/image_1.jpg" alt="" />
          </div>
          <div className="col-sm-12 col-md-4 mt-1 mt-md-0">
            <QuoteWrapper>
              <Quote>
                Das Leben ist wie Fahrrad fahren. Um die Ballance zu halten, musst du in Bewegung bleiben!
                <QuoteBackgroundPattern right="40" bottom="30" src="images/quotes.svg" />
              </Quote>
            </QuoteWrapper>
          </div>
        </div>
      </Margin>
    );
  }
}
