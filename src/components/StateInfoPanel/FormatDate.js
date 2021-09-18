import React from 'react';
import { InfoCellValue } from './StateInfoPanelElements';

const FormatDate = ({ date }) => {
  const { month, day, year } = date;
  const dayEnglish = () => {
    if (Number(day) === 11) {
      return 'th';
    } else if (Number(day.slice(-1)) === 1) {
      return 'st';
    } else if (Number(day.slice(-1)) === 2) {
      return 'nd';
    } else if (Number(day.slice(-1)) === 3) {
      return 'rd';
    } else {
      return 'th';
    }
  };

  return (
    <>
      <InfoCellValue>
        {month} {day}
        <sup>{dayEnglish()}</sup>, {year}
      </InfoCellValue>
    </>
  );
};

export default FormatDate;
