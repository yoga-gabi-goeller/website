import React, { Component } from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import { SectionHeader, Title, Quote, QuoteWrapper, QuoteBackgroundPattern, PrimaryButton } from '../styled/Base';
import { flexCenter } from '../styled/Mixins';
import { mt, p } from 'styled-components-spacing';
import { StretchContainer, Container } from '../styled/Layout';
import { breakpoint } from '../styled/Mixins';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Scroll from 'react-scroll';

import { extractNodes } from '../../utils';

const scroll = Scroll.scroller;

const PlaceholderWrapper = styled(StretchContainer)`
  display: flex;
  flex-direction: ${props => (!!props.direction ? props.direction : 'column')};
`;

const Placeholder = styled(QuoteWrapper)`
  position: relative;

  ${breakpoint('md')} {
    height: 247px;
  }

  ${breakpoint('lg-up')} {
    height: 325px;
  }
`;

const CloseButton = styled.div`
  position: absolute;
  cursor: pointer;
  right: 14px;
  top: 14px;
  color: ${props => props.theme.colors.primary};
`;

const CourseImage = styled.img`
  ${breakpoint('md')} {
    height: 247px;
  }

  ${breakpoint('lg-up')} {
    height: 325px;
  }
`;

const Course = styled.div`
  position: relative;
  user-select: none;

  @media only screen and (min-width: ${props => props.theme.screenSizes.md}) {
    &:nth-child(6n),
    &:nth-child(6n - 2),
    &:nth-child(6n - 1) {
      display: flex;
      flex-direction: column-reverse;

      &.active > .image-wrapper:after {
        top: -38px;
        bottom: initial;
        transform-origin: left;
        transform: rotate(180deg) translateX(-50%);
      }
    }
  }

  & > .image-wrapper {
    position: relative;
    cursor: pointer;
    ${mt(2)}

    &:before {
      content: "${props => props.name}";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: ${props => props.theme.colors.primaryOpaque};
      color: ${props => props.theme.colors.white};
      ${flexCenter()};
      font-weight: ${props => props.theme.weights.bold};
      font-size: 40px;
      transition: opacity 0.2s cubic-bezier(0.35, 0, 0.25, 1);

      ${breakpoint('md')} {
        font-size: 30px;
      }
    }

    @media only screen and (max-width: ${props => props.theme.screenSizes.md}) {
      ${mt(1)}
    }
  }

  &.active {
    & > .image-wrapper {
      &:before {
        opacity: 0;
      }

      &:after {
        content: "";
        position: absolute;
        width: 0px;
        height: 0px;
        border-top: 15px solid white;
        border-right: 15px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 15px solid transparent;
        bottom: -38px;
        z-index: 2;
        left: 50%;
        transform: translateX(-50%);

        @media only screen and (max-width: ${props => props.theme.screenSizes.md}) {
          bottom: -34px;
        }
      }
    }
  }
`;

const CoursePreview = styled.div`
  width: calc(100vw - 0.5em);
  background: #f6f5f2;
  z-index: 1;

  left: ${props => {
    let index = props.index || 0;
    index = index % 3;
    return `calc((${index} * -100%) + (${index} * -0.5em))`;
  }};

  ${mt(2)}

  ${breakpoint('sm')} {
    ${mt(1)};
  }

  ${breakpoint('md')} {
    max-width: calc(768px - 0.5em);
  }

  ${breakpoint('md-up')} {
    position: relative;
  }

  ${breakpoint('lg-up')} {
    max-width: calc(1000px - 0.5em);
  }
`;

const CoursePreviewContent = styled(StretchContainer)`
  position: relative;
  user-select: text;
  ${p(5)};
`;

const CourseButtonGroup = styled.div`
  button {
    margin-top: ${props => props.theme.spacing[2]};
  }
`;

export default class Courses extends Component {
  state = {
    selectedCourse: null
  };

  showCourse = index => {
    const currentCourse = this.state.selectedCourse;

    this.setState({
      selectedCourse: index === currentCourse ? -1 : index
    });
  };

  closeCoursePreview = () => {
    this.setState({
      selectedCourse: -1
    });
  };

  scrollToSection = section => {
    scroll.scrollTo(section, {
      duration: 300,
      smooth: true
    });
  };

  render() {
    const { selectedCourse } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query CourseQuery {
            allContentfulCourse(sort: { fields: [position], order: ASC }, filter: { active: { eq: true } }) {
              edges {
                node {
                  title
                  image {
                    file {
                      url
                    }
                  }
                  description {
                    childMarkdownRemark {
                      html
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allContentfulCourse }) => {
          const courses = extractNodes(allContentfulCourse).map(course => {
            return {
              name: course.title,
              image: course.image.file.url,
              content: course.description.childMarkdownRemark.html
            };
          });

          return (
            <Container id="courses" className="container-fluid">
              <SectionHeader>KURSE</SectionHeader>
              <div className="row">
                {courses.map((course, courseIndex) => (
                  <Course
                    key={courseIndex}
                    name={course.name}
                    className={`col-sm-12 col-md-4 ${courseIndex === selectedCourse ? 'active' : ''}`}
                  >
                    <div className="image-wrapper" onClick={() => this.showCourse(courseIndex)}>
                      <CourseImage src={course.image} alt="Kursbild" />
                    </div>
                    {selectedCourse === courseIndex ? (
                      <CoursePreview index={courseIndex}>
                        <CoursePreviewContent>
                          <CloseButton onClick={() => this.closeCoursePreview()}>
                            <FontAwesomeIcon size="lg" icon={['far', 'times-circle']} />
                          </CloseButton>
                          <Title mb="3">{course.name}</Title>
                          <div dangerouslySetInnerHTML={{ __html: course.content }} />
                          <CourseButtonGroup>
                            <PrimaryButton className="mr-3" onClick={() => this.scrollToSection('schedule')}>
                              ZUM STUNDENPLAN
                            </PrimaryButton>
                            <PrimaryButton onClick={() => this.scrollToSection('signup')}>ANMELDEN</PrimaryButton>
                          </CourseButtonGroup>
                        </CoursePreviewContent>
                      </CoursePreview>
                    ) : null}
                  </Course>
                ))}
                <div className="col-sm-12 mt-1 col-md-4 d-none d-md-block">
                  <PlaceholderWrapper direction="column-reverse">
                    <Placeholder>
                      <Quote>Yoga ist ein Spiegel, in dem wir unser Innerstes sehen können.</Quote>
                      <QuoteBackgroundPattern right="80" src="images/quotes.svg" />
                    </Placeholder>
                  </PlaceholderWrapper>
                </div>
              </div>
            </Container>
          );
        }}
      />
    );
  }
}
