import styled from 'styled-components';

const c = {
  darkGreen: '#079131',
  darkRed: '#5D0D0D',
};

export const Panel = styled.article`
  min-height: calc(100vh - 64px);
  background: #052a4e;
  color: #f6e0e8;
  padding-top: 58px;
`;

export const H1 = styled.h1`
  text-align: center;
  /* font-size: clamp(2rem, -0.2rem + 12vw, 4rem); */
  font-size: clamp(3rem, -1.5747rem + 12.8736vw, 5rem);
  font-family: 'Girassol', cursive;
  line-height: 1.1;
  letter-spacing: 0.3rem;
  margin-bottom: 20px;
`;

export const PNickName = styled.p`
  text-align: center;
  margin-top: 18px;
  font-size: clamp(2.8rem, -0.5rem + 5vw, 3rem);

  font-family: 'Caveat', cursive;
`;
// mind & max font size tutorial
// https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/

export const FlagBox = styled.div`
  /* height: 80px; */
  width: 90%;
  max-width: 600px;
  /* height: 400px; */
  margin: 5px auto;
  margin-top: 30px;
  padding: 10px 5px;
  background-color: black;
  display: flex;
  justify-content: center;
`;

export const FlagImg = styled.img`
  width: 95%;
`;

export const BasicInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 800px; */
  width: 95%;
  max-width: 600px;
  /* border: 2px solid black; */
  border-radius: 5px;
  margin: 20px auto;
  /* padding: 30px 10px; */
`;

export const InfoCell = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 50px; */
  /* background-color: #21906c; */
  /* align-items: center;s */
  justify-content: center;
`;

export const CellText = styled.p`
  /* margin-right: 7%; */
  text-align: center;
`;

export const InfoCellLabel = styled(CellText)`
  font-size: clamp(1.4rem, -1.9091rem + 14.5455vw, 1.8rem);
  background-color: black;
  text-align: left;
  color: #e0e0e0;
  padding: 12px 10px;
  border-radius: 10px 10px 0 0;
`;

export const InfoCellValue = styled(CellText)`
  font-size: clamp(1.8rem, -1.9091rem + 14.5455vw, 1.6rem);
  font-family: 'Merriweather', serif;
  margin: 12px;
`;

export const SubText = styled.p`
  font-size: clamp(1.2rem, -1.9091rem + 1.5455vw, 1.8rem);
  text-align: center;
  margin-bottom: 20px;
`;

// ^ Symbol Selector Components

export const SymbolsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 80px; */
  /* background-color: #381414; */
`;

export const SymbolTile = styled.div`
  border-radius: 5px 15px;
  width: 100%;
  max-width: 550px;
  margin: 5px auto;

  padding: 10px 0;
  color: white;
  background-color: ${({ openSymbol, sid }) =>
    openSymbol === sid ? c.darkGreen : c.darkRed};
  clip-path: polygon(12% 1%, 100% 0, 86% 100%, 0% 100%);
`;

export const SymbolScrollAnchor = styled.div``;
export const SymbolWrapper = styled.div``;

export const SymbolBox = styled.div`
  transition: height 1s ease-in-out;
  display: flex;
  flex-direction: column;
`;

export const SymbolLabel = styled.h3`
  font-size: 30px;
  text-align: center;
  cursor: pointer;
`;

export const SymbolName = styled.h4`
  font-size: 2.9rem;
  text-align: center;
  margin-top: 10px;
`;

export const SymbolScienceName = styled.p`
  text-align: center;
  margin-top: 10px;
  font-size: 1.5rem;
  font-style: italic;
`;

export const ImageFrame = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  margin: 20px auto;
`;

export const SymbolImage = styled.img`
  width: 75%;
`;

export const SymbolWikiLink = styled.a`
  width: 70vw;
  margin: 0 auto;
  font-size: 2rem;
  text-align: center;
  color: #ccc8e3;
  margin-top: 12px;
  margin-bottom: 15px;
  border-radius: 12px;
  text-decoration: none;
  background-color: #d9d6d0;
  color: black;
  padding: 10px 5px;
  max-width: 500px;
  clip-path: polygon(
    41% 0,
    60% 0,
    100% 20%,
    100% 80%,
    61% 100%,
    41% 100%,
    0% 80%,
    0% 20%
  );

  &:active {
    background-color: #072a4e;
    color: #8f1218;
    font-weight: 700;
    font-size: 2.4rem;
  }
`;

// ^ Wikipedia Link Button Components
export const WikipediaBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 25px 0;
`;

export const WikipediaLink = styled.a`
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  background: #e0e0e0;
  padding: 10px;
  border-radius: 12px;
  color: #181a28;
`;
