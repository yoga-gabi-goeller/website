import React, { Component } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import { Link } from 'react-scroll';

import Header from '../components/home/Header';
import News from '../components/home/News';
import Team from '../components/home/Team';
import Iyengar from '../components/home/Iyengar';
import Courses from '../components/home/Courses';
import Schedule from '../components/home/Schedule';
import Prices from '../components/home/Prices';
import Gallery from '../components/home/Gallery';
import Signup from '../components/home/Signup';
import Footer from '../components/home/Footer';
import ImageSection from '../components/home/ImageSection';

import { ContentContainer, FixedContainer } from '../components/styled/Layout';
import { MenuButton, Toolbar } from '../components/styled/Base';
import { flexCenter, breakpoint } from '../components/styled/Mixins';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const MenuButtonContainer = styled(FixedContainer)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  z-index: 4;
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #f6f5f2;
  z-index: 4;
  ${flexCenter()};
  overflow-x: hidden;
  overflow-y: scroll;
  display: none;

  &.open {
    display: flex;
  }
`;

const MenuItemList = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
  text-align: center;
  font-size: 25px;

  ${breakpoint('sm-only')} {
    font-size: 20px;
  }
`;

const MenuItem = styled.li`
  color: #929191;
  line-height: 2em;

  a {
    display: inline-block;
    position: relative;
    width: 100%;
    color: inherit;
    text-decoration: none;
    cursor: pointer;

    &:after {
      content: '';
      width: 100%;
      height: 10px;
      position: absolute;
      bottom: 48%;
      transform: translateY(50%);
      z-index: -1;
      display: none;
      background: #f5bf5f;
    }

    &.active {
      color: ${props => props.theme.colors.primary} !important;

      &:after {
        display: block;
      }
    }
  }
`;

const CloseButton = styled.button`
  position: fixed;
  top: 15px;
  right: 20px;
  padding: 0;
  border: 0;
  z-index: 1;
  background: transparent;
  cursor: pointer;
`;

export default class HomePage extends Component {
  state = {
    menuOpen: false
  };

  toggleMenu = () => {
    const currentState = this.state.menuOpen;

    this.setState({
      menuOpen: !currentState
    });
  };

  render() {
    const menu = [
      { text: 'HOME', section: 'home' },
      { text: 'NEWS', section: 'news' },
      { text: 'UNSER TEAM', section: 'team' },
      { text: 'IYENGAR YOGA', section: 'iyengar-yoga' },
      { text: 'KURSE', section: 'courses' },
      { text: 'STUNDENPLAN', section: 'schedule' },
      { text: 'PREISE', section: 'prices' },
      { text: 'GALERIE', section: 'gallery' },
      { text: 'ANMELDUNG', section: 'signup' },
      { text: 'KONTAKT', section: 'contact' }
    ];

    const { menuOpen } = this.state;
    const news = this.props.data.allContentfulNews.edges.map(edge => edge.node);
    const trainers = this.props.data.allContentfulTrainer.edges.map(edge => edge.node);

    const texts = this.props.data.allContentfulText.edges
      .map(edge => edge.node)
      .reduce((acc, current) => {
        const { html } = current.text.childMarkdownRemark;
        acc[current.slug] = html;
        return acc;
      }, {});

    const courses = this.props.data.allContentfulCourse.edges.map(edge => edge.node);
    const schedule = this.props.data.allContentfulDay.edges.map(edge => edge.node);
    const prices = this.props.data.allContentfulCard.edges.map(edge => edge.node);
    const galleries = this.props.data.allContentfulGallery.edges.map(edge => edge.node);

    return (
      <ContentContainer>
        <Helmet
          bodyAttributes={{
            class: menuOpen ? 'menu-open' : ''
          }}
        >
          <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
        </Helmet>
        <Header id="home" />
        <Toolbar />
        <MenuButtonContainer>
          <MenuButton onClick={this.toggleMenu}>
            <FontAwesomeIcon icon="bars" />
          </MenuButton>
        </MenuButtonContainer>
        <Menu className={menuOpen ? 'open' : ''}>
          <CloseButton onClick={this.toggleMenu}>
            <FontAwesomeIcon size="2x" icon={['far', 'times-circle']} />
          </CloseButton>
          <MenuItemList>
            {menu.map((item, index) => (
              <MenuItem key={index}>
                <Link
                  to={item.section}
                  spy={true}
                  duration={300}
                  offset={item.offset}
                  delay={50}
                  smooth={true}
                  onClick={this.toggleMenu}
                >
                  {item.text}
                </Link>
              </MenuItem>
            ))}
          </MenuItemList>
        </Menu>
        <News id="news" news={news} />
        <Team id="team" trainers={trainers} />
        <Iyengar id="iyengar-yoga" data={texts.iyengar} />
        <Courses id="courses" courses={courses} />
        <Schedule id="schedule" schedule={schedule} />
        <ImageSection mt="9" />
        <Prices id="prices" prices={prices} />
        <Gallery id="gallery" gallery={galleries[0]} />
        <Signup id="signup" />
        <Footer id="contact" />
      </ContentContainer>
    );
  }
}

export const assetFragment = graphql`
  fragment assetFields on ContentfulAsset {
    title
    file {
      url
    }
  }
`;

export const query = graphql`
  query DataQuery {
    allContentfulNews(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          body
          date(formatString: "DD.MM.YYYY")
        }
      }
    }
    allContentfulTrainer(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          firstname
          lastname
          photo {
            file {
              url
            }
          }
          level
        }
      }
    }
    allContentfulCard(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          name
          validity
          color
          price
        }
      }
    }
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
    allContentfulText {
      edges {
        node {
          slug
          text {
            childMarkdownRemark {
              html
            }
          }
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
`;
