import styled from 'styled-components';
import { FaSortAmountDownAlt } from 'react-icons/fa';

export const SortBox = styled.div`
  display: flex;
  width: 100%;
  margin-top: 5px;
  align-items: center;
`;

export const SortP = styled.p`
  text-align: center;
  color: black;
  font-size: 22px;
  margin: 4px 0;
`;

export const SortIcon = styled(FaSortAmountDownAlt)`
  color: white;
  font-size: 40px;
  margin-left: 10px;
  margin-right: 28px;
`;

export const SwitchField = styled.div`
  display: flex;
  margin-bottom: 10px;
  overflow: hidden;
  justify-content: center;
  margin-top: 8px;
`;

export const RadioInput = styled.input`
  position: absolute !important;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  width: 1px;
  border: 0;
  overflow: hidden;

  &:checked + label {
    background-color: #a5dc86;
    box-shadow: none;
  }
`;
export const SortLabel = styled.label`
  background-color: #e4e4e4;
  color: rgba(0, 0, 0, 0.6);
  font-size: 20px;
  line-height: 1;
  text-align: center;
  padding: 8px 16px;
  margin-right: -1px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.1s ease-in-out;
`;
