import React from 'react';

import Socials from '../Socials';

import { HeaderSection, H1, H2, HeaderTextBox } from './HeaderElements';

const photoCredits = {
  name: 'Hans Isaacson',
  profile:
    'https://unsplash.com/@hans_isaacson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
  source:
    'https://unsplash.com/s/photos/us-map?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText',
};

const Header = () => {
  console.log('photo credits: ', photoCredits);
  return (
    <HeaderSection>
      <Socials />
      <HeaderTextBox>
        <H1>United States of America Geography</H1>
        <H2>A resource for State information</H2>
      </HeaderTextBox>
    </HeaderSection>
  );
};

export default Header;

//Photo by <a href="https://unsplash.com/@hans_isaacson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Hans Isaacson</a> on <a href="https://unsplash.com/s/photos/us-map?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
