import React, { useState, useEffect } from 'react';
import { TopHomeLink, Text, BackIcon } from '../HomeLink';
import cap from '../../img/cap.gif';

import { Header, H1, P, Ul, Li, ImgFrame, Gif } from './AboutElements';
import AboutContent from './AboutContent';
const About = () => {
  const [c, setC] = useState({}); // c is for content
  useEffect(() => {
    async function contentToState() {
      const content = await AboutContent;
      setC(content);
    }
    contentToState();
  }, []);

  const list = () => {
    if (c.list) {
      return c.list.map((item, i) => <Li key={i}>{item}</Li>);
    }
  };
  return (
    <Header>
      <TopHomeLink to="/">
        <BackIcon />
        <Text size="small">&#8592; Home</Text>
      </TopHomeLink>
      <H1>{c.h1}</H1>
      <P>{c.p1}</P>
      <P>{c.p2}</P>
      <P>{c.p2a}</P>
      <Ul>{list()}</Ul>
      <P>{c.p3}</P>
      <P>{c.p4}</P>
      <P>{c.p5}</P>
      <ImgFrame>
        <Gif src={cap} />
      </ImgFrame>
    </Header>
  );
};

export default About;
