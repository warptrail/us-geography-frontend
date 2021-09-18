import React from 'react';
import {
  SearchBarContainer,
  SearchInput,
  SearchIcon,
  SearchIconBox,
} from './SearchBarElements';

function SearchBar({ handleInput }) {
  return (
    <>
      <SearchBarContainer>
        <SearchIconBox>
          <SearchIcon />
        </SearchIconBox>

        <SearchInput
          type="text"
          name="search"
          onChange={handleInput}
          placeholder="Search for a State..."
          autocomplete="off"
        />
      </SearchBarContainer>
    </>
  );
}

export default SearchBar;
