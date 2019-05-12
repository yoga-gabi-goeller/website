import React, { Component } from 'react';
import { FullWidthImage, Quote, QuoteWrapper, QuoteAuthor, QuoteBackgroundPattern } from '../styled/Base';
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
          <div className="col-sm-12 col-md-6">
            <FullWidthImage src="images/image_1.jpg" alt="" />
          </div>
          <div className="col-sm-12 col-md-6 mt-1 mt-md-0">
            <QuoteWrapper>
              <Quote>
                Wunschlos die Sinne, <br />
                die Strömungen der Gedanken und Gefühle angehalten, <br />
                das Herz voll Frieden, <br /> dies ist der allerhöchste Stand, Yoga wird er genannt.
                <QuoteAuthor>Kata-Upanishad</QuoteAuthor>
                <QuoteBackgroundPattern right="40" bottom="30" src="images/quotes.svg" />
              </Quote>
            </QuoteWrapper>
          </div>
        </div>
      </Margin>
    );
  }
}
