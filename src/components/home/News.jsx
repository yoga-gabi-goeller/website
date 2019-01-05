import React, { Component } from 'react';
import { Title, Quote, QuoteWrapper, QuoteBackgroundPattern } from '../styled/Base';
import { FlexContainer, StretchContainer } from '../styled/Layout';
import styled from 'styled-components';
import { Margin } from 'styled-components-spacing';

const NewsContentWrapper = styled(StretchContainer)`
  padding: 60px 40px;
  background: #f6f5f2;
`;

const NewsContent = styled.div`
  font-size: 18px;
  font-weight: 100;
  color: #202739;
`;

const NewsDate = styled(FlexContainer)`
  justify-content: flex-end;
  font-size: 14px;
  color: #929191;
  margin-top: 1px;
`;

const NewsItemContainer = styled.div`
  & + & {
    margin-top: 1.8em;
  }
`;

class NewsItem extends Component {
  render() {
    return (
      <NewsItemContainer>
        <NewsContent>{this.props.data.body}</NewsContent>
        <NewsDate>{this.props.data.date}</NewsDate>
      </NewsItemContainer>
    );
  }
}

export default class News extends Component {
  render() {
    const { news } = this.props;

    return (
      <div id={this.props.id} className="container-fluid">
        <div className="row mt-1 mt-md-2">
          <div className="col-md-12 col-lg-6">
            <NewsContentWrapper>
              <Title mb="4">NEWS</Title>
              {news.map((item, index) => (
                <NewsItem data={item} key={index} />
              ))}
            </NewsContentWrapper>
          </div>
          <div className="col-lg-6 d-none d-lg-block d-xl-block">
            <Margin top={{ md: '1', lg: '0' }}>
              <img src="images/news_1.jpg" alt="" />
            </Margin>
          </div>
        </div>
        <div className="row mt-1 mt-md-2">
          <div className="col-sm-12 col-md-4">
            <img src="images/news_2.jpg" alt="" />
          </div>
          <div className="col-sm-12 col-md-8 mt-1 mt-md-0">
            <QuoteWrapper>
              <Quote>
                Yoga ist der Weg zu <br /> Gesundheit und Harmonie.
                <QuoteBackgroundPattern src="images/quotes.svg" />
              </Quote>
            </QuoteWrapper>
          </div>
        </div>
      </div>
    );
  }
}
