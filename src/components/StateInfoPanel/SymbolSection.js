import React from 'react';
import {
  SymbolBox,
  ImageFrame,
  SymbolImage,
  SymbolName,
  SymbolScienceName,
  SymbolWikiLink,
} from './StateInfoPanelElements';

const SymbolSection = ({ symbol, isActive }) => {
  return (
    <SymbolBox isActive={isActive}>
      <SymbolName>{symbol.name}</SymbolName>
      <SymbolScienceName>{symbol.scienceName}</SymbolScienceName>

      <ImageFrame>
        <SymbolImage src={symbol.image} />
      </ImageFrame>

      <SymbolWikiLink
        href={symbol.wikiLink}
        target="_blank"
        rel="noreferrer noopener"
      >
        More Info
      </SymbolWikiLink>
    </SymbolBox>
  );
};

export default SymbolSection;
