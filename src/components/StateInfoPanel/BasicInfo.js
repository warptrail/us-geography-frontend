import React from 'react';
import dayjs from 'dayjs';

import FormatDate from './FormatDate';
import {
  BasicInfoBox,
  InfoCell,
  InfoCellLabel,
  InfoCellValue,
  SubText,
} from './StateInfoPanelElements';

const BasicInfo = ({ founded, admitted, capitalCity, wikipediaLink }) => {
  const makeDateObj = () => {
    const dayjsObj = dayjs(founded);
    const month = dayjsObj.format('MMMM');
    const day = dayjsObj.format('D');
    const year = dayjsObj.format('YYYY');

    const dateObj = {
      month,
      day,
      year,
    };

    return dateObj;
  };

  return (
    <BasicInfoBox>
      <InfoCell>
        <InfoCellLabel>Founded:</InfoCellLabel>
        <FormatDate date={makeDateObj()} />
        <SubText>#{admitted} to join the Union</SubText>
      </InfoCell>
      <InfoCell>
        <InfoCellLabel>Capital City:</InfoCellLabel>
        <InfoCellValue>{capitalCity}</InfoCellValue>
      </InfoCell>
    </BasicInfoBox>
  );
};
export default BasicInfo;
