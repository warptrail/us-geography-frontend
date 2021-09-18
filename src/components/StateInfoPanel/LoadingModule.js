import React from 'react';
import styled from 'styled-components';
import BarLoader from 'react-spinners/BarLoader';

const LoaderIcon = styled(BarLoader)`
  margin: 0 auto;
`;

const LoadingBox = styled.div`
  height: calc(100vh - 64px);
  background-color: #160a62;
  color: #fff;
  display: flex;
  flex-direction: column;
  margin: auto 0;
  align-items: center;
  margin-top: 10px;
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#efc5ca+0,d24b5a+38,2c1259+70,737fc4+100 */
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  justify-content: center;
  margin-top: 40px;
`;
const Text = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 0 auto;
`;

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

const LoadingModule = () => {
  return (
    <LoadingBox>
      <InnerBox>
        <Text>Loading State Information...</Text>
        <IconBox>
          <LoaderIcon color={'white'} />
        </IconBox>
      </InnerBox>
    </LoadingBox>
  );
};

export default LoadingModule;
