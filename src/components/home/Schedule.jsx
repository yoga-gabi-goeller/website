import React, { Component } from 'react';
import { SectionHeader } from '../styled/Base';
import { flexCenter, boxShadow, breakpoint } from '../styled/Mixins';
import { StretchContainer, Container } from '../styled/Layout';
import styled from 'styled-components';
import { p, mb } from 'styled-components-spacing';
import { StaticQuery, graphql } from 'gatsby';
import { extractNodes } from '../../utils';

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

export default class Schedule extends Component {
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

  render() {
    return (
      <StaticQuery
        query={graphql`
          query Schedule {
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
        render={({ allContentfulDay }) => {
          const slots = ['morning', 'afternoon', 'early_evening', 'evening'];

          const schedule = extractNodes(allContentfulDay).reduce((acc, day) => {
            acc[day.name] = {
              name: day.name,
              courses: slots.map(timeslot => this.createCourse(timeslot, day))
            };
            return acc;
          }, {});

          return (
            <Container id="schedule" className="container-fluid">
              <SectionHeader>STUNDENPLAN</SectionHeader>
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
                    <ContentColumn className="col col-lg-6" day={schedule['Montag']} />
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
                    <ContentColumn className="col col-lg-12" day={schedule['Dienstag']} />
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
                    <ContentColumn className="col col-lg-12" day={schedule['Mittwoch']} />
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
                    <ContentColumn className="col col-lg-12" day={schedule['Donnerstag']} />
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
                    <ContentColumn className="col col-lg-12" day={schedule['Freitag']} />
                  </div>
                </Day>
              </div>
            </Container>
          );
        }}
      />
    );
  }
}
