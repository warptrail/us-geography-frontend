import React from 'react';

import SearchBar from '../SearchBar';
import SortToggle from '../SortToggle';
import { NavBox } from './NavAElements';

const NavA = ({
  handleSearchInput,
  handleSortInput,
  setSearch,
  sort,
  setSort,
  count,
  setCount,
}) => {
  return (
    <NavBox>
      <SearchBar
        handleInput={(event) => {
          handleSearchInput(event, setSearch);
        }}
      />
      <SortToggle
        sort={sort}
        handleChange={(event) =>
          handleSortInput(event, setSort, count, setCount)
        }
      />
    </NavBox>
  );
};

export default NavA;
