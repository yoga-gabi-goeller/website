import { graphql, StaticQuery } from 'gatsby';
import React, { Component } from 'react';
import Scroll from 'react-scroll';
import styled from 'styled-components';
import { mb, ml, mr, mt, p } from 'styled-components-spacing';
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
`;

const Cell = styled.div`
  ${p(2)}
  ${flexCenter()}

  ${breakpoint('sm')} {
    height: 50px;
  }

  ${breakpoint('md')} {
    height: 100px;
  }

  ${breakpoint('lg-up')} {
    height: 130px;
  }
`;

export const closed = () => {
  return `&.closed`;
};

const Course = styled(StretchContainer)`
  ${flexCenter()};
  background: ${props => props.theme.colors.white};

  ${closed()} {
    opacity: 0.8;
  }

  ${breakpoint('sm')} {
    flex-direction: row;
  }

  ${breakpoint('md-up')} {
    border: 1px solid ${props => props.theme.colors.border};
    flex-direction: column;
  }
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

  ${breakpoint('lg-up')} {
    font-size: 18px;
  }
`;

const CourseTrainers = styled.div``;

const CourseTrainer = styled.span`
  color: #929191;
`;

const TimeColumn = styled.div`
  ${breakpoint('sm')} {
    width: 130px;
    max-width: 130px;
  }
`;

const OnlineBadge = styled.div`
  background: ${props => props.theme.colors.accent};
  color: white;
  border-radius: 4px;
  padding: 3px 6px 1px;
  font-size: 12px;
  line-height: 1;
  margin: 0;

  ${breakpoint('sm')} {
    padding: 3px 6px 2px;
    ${mr(2)}
    ${mb(1)}
  }

  ${breakpoint('md-up')} {
    ${mb(2)}
  }
`;

const Closed = styled.h5`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  color: #929191;

  ${breakpoint('sm')} {
    ${ml(2)}
  }

  ${breakpoint('md-up')} {
    ${mt(1)}
  }
`;

const ContentColumn = ({ className, day }) => {
  const courses = day.courses;

  return (
    <div className={className} name="schedule">
      <ScheduleHeader>{day.name}</ScheduleHeader>
      {courses.map((course, courseIndex) => {
        if (course) {
          const closed = course.closed;
          const online = course.online;
          const classes = closed ? 'closed' : '';

          return (
            <Cell key={courseIndex}>
              <Course className={classes}>
                {online ? <OnlineBadge>online</OnlineBadge> : null}
                <CourseTitle className={classes}>{course.title}</CourseTitle>
                {closed ? (
                  <Closed>GESCHLOSSEN</Closed>
                ) : (
                  <CourseTrainers className="d-none d-md-block">
                    {course.trainers.map((trainer, trainerIndex) => {
                      const isLast = trainerIndex === course.trainers.length - 1;

                      return (
                        <CourseTrainer key={trainerIndex}>
                          {trainer.name}
                          {!isLast ? ', ' : ''}
                        </CourseTrainer>
                      );
                    })}
                  </CourseTrainers>
                )}
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
    return course && (filter === 'Alle' || course.title === filter || (filter === 'Online' && course.online))
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

  createCourse(timeslot, day) {
    const course = day[`course_${timeslot}`];

    if (course) {
      return {
        title: course.title,
        trainers: day[`trainer_${timeslot}`],
        online: day[`online_${timeslot}`],
        closed: day[`closed_${timeslot}`]
      };
    }

    return null;
  }

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
            allContentfulDay {
              edges {
                node {
                  name
                  course_09001030 {
                    title
                  }
                  online_09001030
                  closed_09001030
                  trainer_09001030 {
                    name: firstname
                  }
                  course_15301700 {
                    title
                  }
                  online_15301700
                  closed_15301700
                  trainer_15301700 {
                    name: firstname
                  }
                  course_17301900 {
                    title
                  }
                  online_17301900
                  closed_17301900
                  trainer_17301900 {
                    name: firstname
                  }
                  course_18302000 {
                    title
                  }
                  online_18302000
                  closed_18302000
                  trainer_18302000 {
                    name: firstname
                  }
                  course_19302100 {
                    title
                  }
                  online_19302100
                  closed_19302100
                  trainer_19302100 {
                    name: firstname
                  }
                }
              }
            }
          }
        `}
        render={({ allContentfulDay, allContentfulCourse }) => {
          const slots = ['09001030', '15301700', '17301900', '18302000', '19302100'];
          const filters = ['Alle'].concat(
            extractNodes(allContentfulCourse).map(course => course.title),
            ['Online']
          );

          const { selectedFilter } = this.state;
          const filter = filters[selectedFilter];

          const schedule = extractNodes(allContentfulDay).reduce((acc, day) => {
            acc[day.name] = {
              name: day.name,
              courses: slots.map(timeslot => this.createCourse(timeslot, day))
            };
            return acc;
          }, {});

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
                <Day className="col-sm-12 col-md-4 pl-1">
                  <div className="row no-gutters">
                    <TimeColumn className="col col-lg-6">
                      <ScheduleHeader>Zeit</ScheduleHeader>
                      <Cell>09:00 - 10:30</Cell>
                      <Cell>15:30 - 17:00</Cell>
                      <Cell>17:30 - 19:00</Cell>
                      <Cell>18:30 - 20:00</Cell>
                      <Cell>19:30 - 21:00</Cell>
                    </TimeColumn>
                    <ContentColumn className="col col-lg-6" day={filteredSchedule['Montag']} />
                  </div>
                </Day>
                <Day className="col-sm-12 col-md-2">
                  <div className="row no-gutters">
                    <TimeColumn className="d-md-none">
                      <ScheduleHeader>Zeit</ScheduleHeader>
                      <Cell>09:00 - 10:30</Cell>
                      <Cell>15:30 - 17:00</Cell>
                      <Cell>17:30 - 19:00</Cell>
                      <Cell>18:30 - 20:00</Cell>
                      <Cell>19:30 - 21:00</Cell>
                    </TimeColumn>
                    <ContentColumn className="col col-lg-12" day={filteredSchedule['Dienstag']} />
                  </div>
                </Day>
                <Day className="col-sm-12 col-md-2">
                  <div className="row no-gutters">
                    <TimeColumn className="d-md-none">
                      <ScheduleHeader>Zeit</ScheduleHeader>
                      <Cell>09:00 - 10:30</Cell>
                      <Cell>15:30 - 17:00</Cell>
                      <Cell>17:30 - 19:00</Cell>
                      <Cell>18:30 - 20:00</Cell>
                      <Cell>19:30 - 21:00</Cell>
                    </TimeColumn>
                    <ContentColumn className="col col-lg-12" day={filteredSchedule['Mittwoch']} />
                  </div>
                </Day>
                <Day className="col-sm-12 col-md-2">
                  <div className="row no-gutters">
                    <TimeColumn className="d-md-none">
                      <ScheduleHeader>Zeit</ScheduleHeader>
                      <Cell>09:00 - 10:30</Cell>
                      <Cell>15:30 - 17:00</Cell>
                      <Cell>17:30 - 19:00</Cell>
                      <Cell>18:30 - 20:00</Cell>
                      <Cell>19:30 - 21:00</Cell>
                    </TimeColumn>
                    <ContentColumn className="col col-lg-12" day={filteredSchedule['Donnerstag']} />
                  </div>
                </Day>
                <Day className="col-sm-12 col-md-2 pr-1">
                  <div className="row no-gutters">
                    <TimeColumn className="d-md-none">
                      <ScheduleHeader>Zeit</ScheduleHeader>
                      <Cell>09:00 - 10:30</Cell>
                      <Cell>15:30 - 17:00</Cell>
                      <Cell>17:30 - 19:00</Cell>
                      <Cell>18:30 - 20:00</Cell>
                      <Cell>19:30 - 21:00</Cell>
                    </TimeColumn>
                    <ContentColumn className="col col-lg-12" day={filteredSchedule['Freitag']} />
                  </div>
                </Day>
              </div>
              <ActionButtons>
                <PrimaryButton onClick={() => this.scrollToSection('signup')}>ZUR ANMELDUNG</PrimaryButton>
              </ActionButtons>
            </Container>
          );
        }}
      />
    );
  }
}
