import styled from 'styled-components';

export const Header = styled.header`
  padding: 12px;
  max-width: 800px;
  margin: 0 auto;
  & > * {
    color: #fff;
  }
`;

export const H1 = styled.h1`
  text-align: center;
  margin-top: 42px;
  margin-bottom: 18px;
`;

export const H2 = styled.h2``;

export const P = styled.p`
  margin: 15px 0;
  font-size: 1.2rem;
`;

export const Ul = styled.ul``;

export const Li = styled.li`
  margin-left: 40px;
`;

export const ImgFrame = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Gif = styled.img`
  width: 80%;
  max-width: 550px;
  margin: auto;
`;
