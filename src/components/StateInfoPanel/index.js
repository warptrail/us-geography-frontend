import React from 'react';

import ErrorModule from '../ErrorModule';
import LoadingModule from './LoadingModule';
import StatePanel from './StatePanel';

const State = ({ error, info, loading }) => {
  return (
    <>
      {loading ? <LoadingModule /> : ''}
      {error ? (
        <ErrorModule error={error} />
      ) : (
        <StatePanel
          info={info}
          flower={info.flower}
          tree={info.tree}
          mineral={info.mineral}
          fossil={info.fossil}
        />
      )}
    </>
  );
};

export default State;
