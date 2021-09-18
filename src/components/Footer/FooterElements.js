import styled from 'styled-components';
import { Link } from 'react-router-dom';

const colors = {
  footerBlue: '#082F5D',
  darkRed: '#5D0D0D',
};

export const FooterBox = styled.footer`
  margin-top: auto;
  background-color: ${colors.footerBlue};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch;
  padding-bottom: 12px;
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  /* border: 1px solid white; */
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;

  & > a,
  button {
    margin: 0 10px;
    border-radius: 10px;
    font-size: 28px;
  }
`;

export const H4 = styled.h4`
  font-size: clamp(0.9rem, -0.8455rem + 8.7273vw, 1.2rem);
  color: #ffffff;
  font-weight: 800;

  @media (min-width: 376) {
  }
`;

export const FooterButton = styled.button`
  padding: 5px 12px;
  margin: auto 0;
  border: none;
  background-color: ${colors.darkRed};
  color: white;
  cursor: pointer;
`;

export const TopButton = styled(FooterButton)`
  font-size: 1.4rem;
  background: #a5dc86;
  color: black;
  font-weight: 500;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 0 0 10px 10px;
`;

export const FooterLink = styled(Link)`
  padding: 10px 12px;
  margin: auto 0;
  border: none;
  background-color: ${colors.darkRed};
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const Credits = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  margin-top: 22px;
`;

export const Icon = styled.img`
  width: 8em;
  color: red;
  fill: red;
`;

export const AnchorLink = styled.a`
  margin-left: 4px;
  margin-top: 4px;
`;
