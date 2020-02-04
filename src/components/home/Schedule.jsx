import React, { Component } from 'react';
import { SectionHeader, PrimaryButton } from '../styled/Base';
import { flexCenter, boxShadow, breakpoint } from '../styled/Mixins';
import { StretchContainer, Container } from '../styled/Layout';
import styled from 'styled-components';
import { p, mb, mt } from 'styled-components-spacing';
import { StaticQuery, graphql } from 'gatsby';
import { extractNodes } from '../../utils';
import Scroll from 'react-scroll';

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

const Course = styled(StretchContainer)`
  ${flexCenter()};
  background: ${props => props.theme.colors.white};

  ${breakpoint('sm')} {
    flex-direction: row;
  }

  ${breakpoint('md-up')} {
    ${boxShadow()};
    flex-direction: column;
  }
`;

const CourseTitle = styled.h4`
  color: ${props => props.theme.colors.accent};

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

const ContentColumn = ({ className, day }) => {
  const courses = day.courses;

  return (
    <div className={className} name="schedule">
      <ScheduleHeader>{day.name}</ScheduleHeader>
      {courses.map((course, courseIndex) =>
        course ? (
          <Cell key={courseIndex}>
            <Course>
              <CourseTitle>{course.title}</CourseTitle>
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
            </Course>
          </Cell>
        ) : (
          <Cell key={courseIndex} />
        )
      )}
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
    return course && (filter === 'Alle' || course.title === filter) ? course : null;
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
    const course = day[timeslot];

    if (course) {
      return {
        title: course.title,
        trainers: day[`${timeslot}_trainers`]
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
                  morning {
                    title
                  }
                  morning_trainers {
                    name: firstname
                  }
                  afternoon {
                    title
                  }
                  afternoon_trainers {
                    name: firstname
                  }
                  early_evening {
                    title
                  }
                  early_evening_trainers {
                    name: firstname
                  }
                  evening {
                    title
                  }
                  evening_trainers {
                    name: firstname
                  }
                }
              }
            }
          }
        `}
        render={({ allContentfulDay, allContentfulCourse }) => {
          const slots = ['morning', 'afternoon', 'early_evening', 'evening'];
          const filters = ['Alle'].concat(extractNodes(allContentfulCourse).map(course => course.title));

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
