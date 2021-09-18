import React, { useState, useRef, createRef } from 'react';

import BasicInfo from './BasicInfo';
import SymbolSection from './SymbolSection';
import {
  Panel,
  H1,
  PNickName,
  FlagBox,
  FlagImg,
  SymbolsWrapper,
  SymbolTile,
  SymbolScrollAnchor,
  SymbolWrapper,
  SymbolLabel,
  WikipediaBox,
  WikipediaLink,
} from './StateInfoPanelElements';
import { TopHomeLink, Text, BackIcon } from '../HomeLink';

const StatePanel = ({ info }) => {
  const {
    name,
    nickname,
    founded,
    capitalCity,
    flag,
    wikipediaLink,
    admitted,
    flower,
    tree,
    mineral,
    fossil,
  } = info;

  const [openSymbol, setOpenSymbol] = useState(null);

  const toggleTile = (event, i) => {
    // get the value of the DOM element being clicked
    const clicked = event.target.lastChild.nodeValue;
    if (clicked.toLowerCase() === openSymbol) {
      // close symbol panel
      setOpenSymbol(null);
    } else {
      // open symbol panel
      setOpenSymbol(clicked.toLowerCase());
      const r = refs.current[i];
      setTimeout(() => {
        scrollToRef(r);
      }, 500);
    }
  };

  // compile symbols
  let symbols = [{ ...flower }, { ...tree }, { ...mineral }, { ...fossil }];

  // filter symbols with null values
  let filterSymbols = symbols.filter((symbol) => {
    if (symbol.name === null) {
      return false;
    }
    return true;
  });

  // make refs from symbols
  const refs = useRef(filterSymbols.map(() => createRef()));
  const scrollToRef = (ref) =>
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  //0, ref.current.offsetTop
  // convert them to jsx selectors

  const jsxSymbols = () => {
    return filterSymbols.map((symbol, i) => {
      const isActive = openSymbol === symbol.id;
      // regex cheat code to capitalize each word
      const symbolIdCaps = symbol.id
        ? symbol.id.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
            letter.toUpperCase()
          )
        : '';

      return (
        <SymbolWrapper key={symbol.id || i} ref={refs.current[i]}>
          <SymbolTile openSymbol={openSymbol} id={symbol.id} sid={symbol.id}>
            <SymbolScrollAnchor
              onClick={(e) => toggleTile(e, i)}
              to={symbol.id || ''}
              containerId={symbol.id}
            >
              <SymbolLabel>{symbolIdCaps}</SymbolLabel>
            </SymbolScrollAnchor>
          </SymbolTile>
          {isActive ? (
            <SymbolSection isToggled={isActive} symbol={symbol} />
          ) : (
            ''
          )}
        </SymbolWrapper>
      );
    });
  };

  return (
    <Panel id="top">
      <TopHomeLink to="/">
        <BackIcon />
        <Text size="small">&#8592; Home</Text>
      </TopHomeLink>
      <H1>{name}</H1>
      <hr />
      <FlagBox>
        <FlagImg src={flag} />
      </FlagBox>
      <PNickName>{nickname}</PNickName>
      <BasicInfo
        founded={founded}
        admitted={admitted}
        capitalCity={capitalCity}
        wikipediaLink={wikipediaLink}
      />
      <SymbolsWrapper id="symbol-top">{jsxSymbols()}</SymbolsWrapper>

      <WikipediaBox>
        <WikipediaLink
          href={wikipediaLink}
          target="_blank"
          rel="noreferrer noopener"
        >
          Learn More
        </WikipediaLink>
      </WikipediaBox>
    </Panel>
  );
};

export default StatePanel;
