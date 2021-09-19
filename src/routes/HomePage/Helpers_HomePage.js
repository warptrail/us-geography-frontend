// config variables
import config from '../../config';
const { API_ENDPOINT, TOKEN_KEY } = config;

const addURLToStates = (stateName) => {
  return stateName.name.toLowerCase().replace(/\s+/g, '');
};

export async function getStatesByName(
  setLoadingMenu,
  setStatesByName,
  setError
) {
  setLoadingMenu(true);
  const STATE_URL = API_ENDPOINT + 'state-names';
  const stateNames = await fetch(STATE_URL, {
    headers: {
      Authorization: TOKEN_KEY,
    },
  })
    .then((res) => {
      if (!res.ok) {
        const errorMessage = `GET error: ${res.statusText} - Status: ${res.status}`;
        throw Error(errorMessage);
      }
      return res.json();
    })
    .then((data) => {
      setLoadingMenu(false);
      return data;
    })
    .catch((error) => {
      console.error('Cannot Recover States', error);
      setError('Server Error: Cannot Recover States', error);
    });

  // somehow this code does the same thing
  // const stateNames = await (await fetch(STATE_URL)).json();

  if (stateNames) {
    const modifyStates = stateNames.map((state) => {
      return { ...state, url: addURLToStates(state) };
    });
    setStatesByName(modifyStates);
  }
}

export async function getStatesByDate(setLoadingMenu, setStatesByDate) {
  setLoadingMenu(true);

  setTimeout(async () => {
    const response = await fetch(API_ENDPOINT + 'state-names?sort=founded', {
      headers: {
        Authorization: TOKEN_KEY,
      },
    });
    const data = await response.json();
    const addInfo = await data.map((state, i) => {
      return { ...state, url: addURLToStates(state), admitted: i + 1 };
    });
    setStatesByDate(addInfo);
    setLoadingMenu(false);
  }, 300);
}

export const handleSortInput = (event, setSort, count, setCount) => {
  setSort(event.target.value);
  if (count < 2) {
    setCount(count + 1);
  }
};

export const handleSearchInput = (event, setSearch) => {
  setSearch(event.target.value);
};
