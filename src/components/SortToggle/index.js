import React from 'react';
import {
  SortBox,
  SwitchField,
  RadioInput,
  SortLabel,
  SortIcon,
} from './SortToggleElements';
const SortToggle = ({ handleChange }) => {
  return (
    <SortBox>
      {/* <SortP>Sort By</SortP> */}
      <SortIcon />
      <SwitchField>
        <RadioInput
          type="radio"
          id="r-1"
          name="sort-switch"
          value="name"
          onChange={handleChange}
          defaultChecked
        />
        <SortLabel htmlFor="r-1">Name</SortLabel>
        <RadioInput
          type="radio"
          id="r-2"
          name="sort-switch"
          value="date"
          onChange={handleChange}
        />
        <SortLabel htmlFor="r-2">Date</SortLabel>
      </SwitchField>
    </SortBox>
  );
};

export default SortToggle;
