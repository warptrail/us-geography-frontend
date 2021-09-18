import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import svgIcon from '../../img/warptrail-svg.svg';

import {
  FooterBox,
  H4,
  FooterNav,
  FooterButton,
  FooterLink,
  Credits,
  AnchorLink,
  Icon,
  TopButton,
} from './FooterElements';
import { HomeLink, Text } from '../HomeLink';
import Contact from '../Contact';

const myPortfolio = 'https://ryanwhitmore.dev/';

const Footer = () => {
  const [isContactToggled, toggleContact] = useState(false);

  // toggle state function
  const toggle = () => {
    toggleContact(!isContactToggled);
  };

  const [pathname, setPathname] = useState('');
  const location = useLocation().pathname;
  useEffect(() => {
    setPathname(location);
  }, [location]);

  function urlChoose() {
    if (pathname === '/') {
      function scrollToTop() {
        window.scrollTo(0, 0);
      }
      return (
        <TopButton onClick={scrollToTop} toTop={true}>
          Top
        </TopButton>
      );
    } else {
      return (
        <HomeLink to="/">
          <Text>Home</Text>
        </HomeLink>
      );
    }
  }

  return (
    <FooterBox>
      <Contact toggle={toggle} isContactToggled={isContactToggled} />
      {urlChoose()}
      <FooterNav>
        <FooterLink to="/about">About</FooterLink>
        <FooterButton onClick={toggle}>Contact</FooterButton>
      </FooterNav>
      <Credits>
        <H4>Made in the USA by</H4>
        <AnchorLink
          href={myPortfolio}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Icon src={svgIcon} />
        </AnchorLink>
      </Credits>
    </FooterBox>
  );
};

export default Footer;
