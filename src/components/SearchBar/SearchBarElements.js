import styled from 'styled-components';
import { FaSearchLocation } from 'react-icons/fa';

export const SearchBarContainer = styled.div`
  padding: 5px;
  display: flex;
  justify-content: left;
  margin-top: 10px;
`;

export const SearchIconBox = styled.div`
  padding-left: 8px;
  padding-right: 20px;
`;

export const SearchIcon = styled(FaSearchLocation)`
  color: white;
  font-size: 2.2rem;
  transform: scaleX(-1);
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 6px 5px;
  /* height: 80%; */
  /* margin: auto; */
  margin-right: 20px;
  font-size: 1.5rem;
`;
