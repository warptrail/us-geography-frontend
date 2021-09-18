import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFlagUsa } from 'react-icons/fa';

const c = {
  darkGreen: '#079131',
  darkRed: '#5D0D0D',
};

export const HomeLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  background-color: ${c.darkGreen};
  margin: 0 auto;
  border-radius: 12px;
  height: 100%;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;

export const TopHomeLink = styled(Link)`
  position: absolute;
  background-color: ${c.darkRed};
  color: #fff;
  top: 0;
  left: 0;

  /* height: 5vh; */
  /* min-height: 20px; */
  display: flex;
  padding-bottom: 5px;
  padding-right: 12px;
  align-items: center;
  text-decoration: none;
  border-radius: 0 0 12px 0;

  &:active {
    background-color: white;
    color: blue;
  }
`;

export const Text = styled.span`
  font-size: clamp(1.6rem, 0.4667rem + 2.6667vw, 1.3rem);
  font-weight: 600;
`;

export const BackIcon = styled(FaFlagUsa)`
  margin-left: 10px;
  margin-right: 12px;
  color: white;
  font-size: clamp(1.2rem, -1.7091rem + 14.5455vw, 1.7rem);
`;
