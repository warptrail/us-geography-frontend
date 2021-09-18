import styled from 'styled-components';
import mapImg from '../../img/us-map.jpg';

export const HeaderSection = styled.header`
  padding: 10px;
  text-align: center;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${mapImg});
  background-size: cover;
  background-position: 20% 30%;

  &::before {
    content: '';
    background: black;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.6;
  }
`;

export const HeaderTextBox = styled.div`
  max-width: 600px;
`;

export const H1 = styled.h1`
  position: relative;
  margin-top: 24px;
  font-size: 3rem;
  color: #dbd9d8;
`;

export const H2 = styled.h2`
  font-size: 1.8rem;
  font-weight: normal;
  margin-top: 2rem;
  position: relative;
  color: #f8fbff;
  font-style: italic;
  /* margin-bottom: 10px; */
`;
