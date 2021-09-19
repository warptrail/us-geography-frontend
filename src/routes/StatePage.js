import React, { useState, useEffect } from 'react';
import StateInfoPanel from '../components/StateInfoPanel';
import LoadingModule from '../components/StateInfoPanel/LoadingModule';
import config from '../config';
const { API_ENDPOINT, TOKEN_KEY } = config;

const StatePage = (props) => {
  const param = props.match.params.stateName;

  useEffect(() => {
    const URL = `${API_ENDPOINT}state/${param}`;
    const fetchState = async () => {
      try {
        setLoading(true);
        const response = await fetch(URL, {
          headers: {
            Authorization: TOKEN_KEY,
          },
        });
        if (!response.ok) {
          const errorMessage = `GET error: ${response.statusText} - Status: ${response.status}`;
          throw Error(errorMessage);
        }

        const stateData = await response.json();
        setLoading(false);
        setStateInfo(stateData);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
      }
    };

    window.scrollTo(0, 0);
    setTimeout(() => {
      fetchState();
    }, 300);
  }, [param]);

  const [stateInfo, setStateInfo] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      {loading && !error ? (
        <LoadingModule />
      ) : (
        <StateInfoPanel url={param} error={error} info={stateInfo} />
      )}
    </div>
  );
};

export default StatePage;
