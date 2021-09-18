import React, { useState, useEffect } from 'react';

import {
  getStatesByName,
  getStatesByDate,
  handleSortInput,
  handleSearchInput,
} from './Helpers_HomePage';

// components
import Header from '../../components/Header';
import NavA from '../../components/NavA';
import Tiles from '../../components/Tiles';
import ErrorModule from '../../components/ErrorModule';

const HomePage = () => {
  const [statesByName, setStatesByName] = useState([]);
  const [statesByDate, setStatesByDate] = useState([]);
  const [loadingMenu, setLoadingMenu] = useState(true);
  const [sort, setSort] = useState('name');
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (count === 0) {
      setTimeout(() => {
        getStatesByName(setLoadingMenu, setStatesByName, setError);
      }, 400);
    } else if (count > 0 && count < 2) {
      if (sort === 'name') {
        getStatesByName(setLoadingMenu, setStatesByName, setError);
      } else if (sort === 'date') {
        getStatesByDate(setLoadingMenu, setStatesByDate, setError);
      }
    }
  }, [count, sort]);

  const stateArrayToggle = () => {
    if (sort === 'name') {
      return statesByName;
    } else if (sort === 'date') {
      return statesByDate;
    }
  };

  const filterBySearch = () => {
    const stateArray = stateArrayToggle();
    const filteredStates = stateArray.filter((state) => {
      if (stateArray.length === 0) {
        return false;
      }

      if (!search) {
        return true;
      }
      const name = state.name.toLowerCase();
      const stateMatch = name.includes(search.toLowerCase());

      return stateMatch;
    });

    return filteredStates;
  };

  return (
    <>
      <Header />
      <NavA
        sort={sort}
        handleSearchInput={handleSearchInput}
        handleSortInput={handleSortInput}
        setSearch={setSearch}
        setSort={setSort}
        count={count}
        setCount={setCount}
      />
      {error ? (
        <ErrorModule error={error} />
      ) : (
        <Tiles
          sort={sort}
          stateNames={filterBySearch()}
          loading={loadingMenu}
        />
      )}
    </>
  );
};

export default HomePage;
