import React from 'react';

import {
  TileContainer,
  Tile,
  StateLink,
  StateNumber,
  LoadingStates,
  LoaderMessage,
  LoaderIcon,
} from './TileElements';

const Tiles = ({ stateNames, loading, sort }) => {
  function mapStateNames() {
    if (sort === 'name') {
      return stateNames.map((us, i) => (
        <StateLink to={`/state/${us.url}`} key={us.name}>
          <Tile background={i % 4}>{us.name}</Tile>
        </StateLink>
      ));
    } else if (sort === 'date') {
      return stateNames.map((us, i) => (
        <Tile key={us.name} background={i % 4}>
          <StateLink to={`/state/${us.url}`}>{us.name}</StateLink>
          <StateNumber>{us.admitted}</StateNumber>
        </Tile>
      ));
    }
  }

  const loadingModule = () =>
    loading ? (
      <LoadingStates>
        <LoaderMessage>Loading The States...</LoaderMessage>
        <LoaderIcon loading={true} size={50} color="white" />
      </LoadingStates>
    ) : (
      ''
    );

  return (
    <>
      <TileContainer>
        {loadingModule()}
        {mapStateNames()}
      </TileContainer>
    </>
  );
};

export default Tiles;
