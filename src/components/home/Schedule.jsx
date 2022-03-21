import { graphql, StaticQuery } from 'gatsby';
import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styled from 'styled-components';
import { mb, mt, p } from 'styled-components-spacing';
import { extractNodes } from '../../utils';
import { PrimaryButton, SectionHeader } from '../styled/Base';
import { Container, StretchContainer } from '../styled/Layout';
import { breakpoint, flexCenter } from '../styled/Mixins';

const scroll = Scroll.scroller;

const ScheduleHeader = styled.div`
  background: #f6f5f2;
  font-size: 18px;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  padding: ${props => `${props.theme.spacing[2]} ${props.theme.spacing[1]} ${props.theme.spacing[1]}`};
  ${mb(1)};
`;

const Day = styled.div`
  padding: 0;

  ${breakpoint('md-up')} {
    flex: 1;
  }
`;

const Cell = styled.div`
  ${p(2)}
  ${flexCenter()}

  ${breakpoint('md-up')} {
    height: 120px;
  }

  ${breakpoint('lg-up')} {
    height: 130px;
  }
`;

export const closed = () => {
  return `&.closed`;
};

const Course = styled(StretchContainer)`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.white};
  border-radius: 4px 4px 0 0;

  ${closed()} {
    opacity: 0.8;
  }
`;

const CourseContent = styled.div`
  display: flex;
  flex-direction: column;
  ${flexCenter()}
  flex: 1;
  border: 1px solid ${props => props.theme.colors.border};

  ${breakpoint('sm')} {
    ${p(2)};
  }

  ${({ showBadge }) => {
    if (!showBadge) {
      return `
        ${breakpoint('md-up')} {
          padding-top: 10px;
          margin-top: 10px;
        }

        ${breakpoint('md')} {
          padding-top: 16px;
          padding-bottom: 6px;
        }
      `;
    }

    return `
      border-top: 1px solid transparent;

      ${breakpoint('sm')} {
      }

      ${breakpoint('md')} {
        padding: 6px 0;
      }
    `;
  }}
`;

const CourseTitle = styled.h4`
  color: ${props => props.theme.colors.accent};
  margin-bottom: 0;
  line-height: 1.2;

  ${closed()} {
    opacity: 0.4;
  }

  ${breakpoint('sm')} {
    margin: 0;
  }

  ${breakpoint('md')} {
    font-size: 18px;
  }

  ${breakpoint('lg-up')} {
    font-size: 20px;
  }
`;

const CourseTrainers = styled.div``;

const CourseTrainer = styled.span`
  color: #929191;
`;

const CourseTime = styled(CourseTrainer)``;

const Badge = styled.div`
  border-radius: 4px 4px 0 0;
  text-transform: uppercase;
  width: 100%;
  padding: 5px 6px 3px;
  text-align: center;
  font-size: 12px;
  line-height: 1;

  &.hybrid {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }

  &.online {
    background: ${props => props.theme.colors.accent};
    color: ${props => props.theme.colors.white};
  }
`;

const Closed = styled.h5`
  margin: 0;
  font-weight: 500;
  font-size: 16px;
  color: #929191;
`;

const ContentColumn = ({ className, day }) => {
  const courses = day.courses;

  const getBadgeClasses = course => {
    if (course.hybrid) {
      return 'hybrid';
    }

    if (course.online) {
      return 'online';
    }

    return '';
  };

  return (
    <div className={className} name="schedule">
      <ScheduleHeader>{day.name}</ScheduleHeader>
      {courses
        .filter(course => course != null)
        .sort((a, b) => {
          const timeA = a.time;
          const timeB = b.time;

          if (timeA < timeB) {
            return -1;
          }

          if (timeA > timeB) {
            return 1;
          }

          return 0;
        })
        .map((course, courseIndex) => {
          if (course) {
            const { time, online, hybrid, closed } = course;
            const classes = closed ? 'closed' : '';

            return (
              <Cell key={courseIndex}>
                <Course className={classes} online={online}>
                  {online || hybrid ? (
                    <Badge className={getBadgeClasses(course)}>{hybrid ? 'hybrid' : 'online'}</Badge>
                  ) : null}
                  <CourseContent showBadge={online || hybrid}>
                    <CourseTime className="mb-1">{time}</CourseTime>
                    <CourseTitle className={classes}>{course.title}</CourseTitle>
                    {closed ? (
                      <Closed>GESCHLOSSEN</Closed>
                    ) : (
                      <CourseTrainers>
                        {course.trainers.map((trainer, trainerIndex) => {
                          const isLast = trainerIndex === course.trainers.length - 1;

                          return (
                            <CourseTrainer key={trainerIndex}>
                              {trainer}
                              {!isLast ? ', ' : ''}
                            </CourseTrainer>
                          );
                        })}
                      </CourseTrainers>
                    )}
                  </CourseContent>
                </Course>
              </Cell>
            );
          }

          return <Cell key={courseIndex} />;
        })}
    </div>
  );
};

const ActionButtons = styled.div`
  margin: 50px 0;
  ${flexCenter()};
`;

const FilterItem = styled.li`
  cursor: pointer;
  border-bottom: 2px solid transparent;
  ${mt(2)};

  &.active {
    border-bottom: 2px solid ${props => props.theme.colors.primary};
  }
`;

const Filters = styled.ul`
  list-style: none;
  padding: 0;
  ${flexCenter()};
  margin: calc(30px - 0.5rem) 10px 50px;
  flex-wrap: wrap;

  ${FilterItem} + ${FilterItem} {
    margin-left: 20px;
  }
`;

const filterDay = (day, filter) => {
  const filteredCourses = day.courses.map(course => {
    return course &&
      (filter === 'Alle' ||
        course.title === filter ||
        (filter === 'Online' && course.online) ||
        (filter === 'Hybrid' && course.hybrid))
      ? course
      : null;
  });

  return {
    ...day,
    courses: filteredCourses
  };
};

export default class Schedule extends Component {
  state = {
    selectedFilter: 0
  };

  createSchedule = days => {
    return days.reduce((acc, day) => {
      acc[day] = { name: day, courses: [] };
      return acc;
    }, {});
  };

  scrollToSection = section => {
    scroll.scrollTo(section, {
      duration: 300,
      smooth: true
    });
  };

  selectFilter = index => {
    this.setState({
      selectedFilter: index
    });
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query Schedule {
            allContentfulCourse(sort: { fields: [position], order: ASC }, filter: { active: { eq: true } }) {
              edges {
                node {
                  title
                }
              }
            }
            allContentfulCourseEntry {
              edges {
                node {
                  day {
                    name
                  }
                  course {
                    title
                  }
                  trainers {
                    firstname
                  }
                  time
                  online
                  hybrid
                  closed
                }
              }
            }
          }
        `}
        render={({ allContentfulCourseEntry, allContentfulCourse }) => {
          const filters = ['Alle'].concat(
            extractNodes(allContentfulCourse).map(course => course.title),
            ['Online', 'Hybrid']
          );

          const { selectedFilter } = this.state;
          const filter = filters[selectedFilter];

          const schedule = this.createSchedule(['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag']);

          extractNodes(allContentfulCourseEntry).forEach(entry => {
            const day = entry.day.name;
            const { course, trainers, time, online, hybrid, closed } = entry;

            schedule[day].courses.push({
              title: course.title,
              trainers: trainers.map(trainer => trainer.firstname),
              time,
              online,
              hybrid,
              closed
            });
          });

          const filteredSchedule = Object.keys(schedule).reduce((filteredSchedule, day) => {
            filteredSchedule[day] = filterDay(schedule[day], filter);
            return filteredSchedule;
          }, {});

          return (
            <Container id="schedule" className="container-fluid">
              <SectionHeader>STUNDENPLAN</SectionHeader>
              <Filters>
                {filters.map((course, index) => (
                  <FilterItem
                    onClick={() => this.selectFilter(index)}
                    className={selectedFilter === index ? 'active' : ''}
                    key={index}
                  >
                    {course}
                  </FilterItem>
                ))}
              </Filters>
              <div className="row p-1 p-md-0">
                <Day className="col-sm-12 mb-4 mb-md-0">
                  <div className="row no-gutters">
                    <ContentColumn className="col pb-1 pb-md-0" day={filteredSchedule['Montag']} />
                  </div>
                </Day>
                <Day className="col-sm-12 mb-4 mb-md-0">
                  <div className="row no-gutters">
                    <ContentColumn className="col pb-1 pb-md-0" day={filteredSchedule['Dienstag']} />
                  </div>
                </Day>
                <Day className="col-sm-12 mb-4 mb-md-0">
                  <div className="row no-gutters">
                    <ContentColumn className="col pb-1 pb-md-0" day={filteredSchedule['Mittwoch']} />
                  </div>
                </Day>
                <Day className="col-sm-12 mb-4 mb-md-0">
                  <div className="row no-gutters">
                    <ContentColumn className="col pb-1 pb-md-0" day={filteredSchedule['Donnerstag']} />
                  </div>
                </Day>
                <Day className="col-sm-12">
                  <div className="row no-gutters">
                    <ContentColumn className="col pb-1 pb-md-0" day={filteredSchedule['Freitag']} />
                  </div>
                </Day>
              </div>
              <ActionButtons>
                <PrimaryButton onClick={() => this.scrollToSection('signup')}>Zur Anmeldung</PrimaryButton>
              </ActionButtons>
            </Container>
          );
        }}
      />
    );
  }
}
