import styled from 'styled-components';
import BarLoader from 'react-spinners/BarLoader';
import { Link } from 'react-router-dom';

const colors = {
  blue: '#0A1C33',
  red: '#490906',
  black: '#3B3B3F',
  purple: '#3B0723',
};

export const TileContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  background-color: #0a2e5d;
`;

export const LoadingStates = styled.div`
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoaderMessage = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
  color: white;
`;
export const LoaderIcon = styled(BarLoader)`
  display: block;
  margin: 0 auto;
`;

export const Tile = styled.li`
  display: flex;
  position: relative;
  list-style: none;
  padding: 32px 0;
  width: 100%;
  align-items: center;
  justify-content: center;

  background-color: ${({ background }) =>
    background === 0
      ? colors.red
      : background === 1
      ? colors.blue
      : background === 2
      ? colors.black
      : background === 3
      ? colors.purple
      : ''};
`;

export const StateLink = styled(Link)`
  font-size: 42px;
  color: white;
  text-decoration: none;
  width: 100%;
  text-align: center;
`;

export const StateNumber = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px;
  color: white;
  font-size: 20px;
  border-radius: 0 0 12px 0;
`;
