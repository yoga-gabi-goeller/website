import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-scroll';
import styled from 'styled-components';

import PageLayout from '../components/PageLayout';
import Courses from '../components/home/Courses';
import Downloads from '../components/home/Downloads';
import Footer from '../components/home/Footer';
import Gallery from '../components/home/Gallery';
import Header from '../components/home/Header';
import ImageSection from '../components/home/ImageSection';
import Iyengar from '../components/home/Iyengar';
import News from '../components/home/News';
import Prices from '../components/home/Prices';
import ExtraInfo from '../components/home/ExtraInfo';
import Schedule from '../components/home/Schedule';
import Signup from '../components/home/Signup';
import Team from '../components/home/Team';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { MenuButton, Toolbar } from '../components/styled/Base';
import { ContentContainer, FixedContainer } from '../components/styled/Layout';
import { breakpoint, flexCenter } from '../components/styled/Mixins';

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
      { text: 'DOWNLOADS', section: 'downloads' },
      { text: 'KONTAKT', section: 'contact' }
    ];

    const { menuOpen } = this.state;

    return (
      <PageLayout>
        <ContentContainer>
          <Helmet
            bodyAttributes={{
              class: menuOpen ? 'menu-open' : ''
            }}
          >
            <script src="https://cdn.polyfill.io/v2/polyfill.min.js" />
          </Helmet>
          <Header />
          <Toolbar />
          <MenuButtonContainer>
            <MenuButton onClick={this.toggleMenu}>
              <FontAwesomeIcon icon="bars" />
            </MenuButton>
          </MenuButtonContainer>{' '}
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
          <News />
          <ExtraInfo />
          <Team />
          <Iyengar />
          <Courses />
          <Schedule />
          <ImageSection mt="9" />
          <Prices />
          <Gallery />
          <Signup />
          <Downloads />
          <Footer />
        </ContentContainer>
      </PageLayout>
    );
  }
}
