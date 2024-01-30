import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

const useQueryString = (initialState) => {
  const [queryState, setQueryState] = useState(initialState);
  const navigate = useNavigate();
  const location = window.location;

  const getQueryString = (key) => {
    return new URLSearchParams(location.search).get(key);
  };

  const setQueryString = (name, value) => {
    setQueryState((prev) => ({ ...prev, [name]: value }));
  };

  const refresh = () => {
    const queryString = Object.entries(queryState)
      .map(([key, value]) => value && `${key}=${value}`)
      .filter((item) => item)
      .join('&');
    navigate(`/post?${queryString}`);
  };

  useEffect(() => {
    const newValue = Object.keys(initialState).reduce((acc, key) => {
      acc[key] = getQueryString(key) || initialState[key];
      return acc;
    }, initialState);
    setQueryState(newValue);
  }, [location]);

  useEffect(refresh, [queryState]);

  return { setQueryString, refresh, queryState };
};

export default useQueryString;
