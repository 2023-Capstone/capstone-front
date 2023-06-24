import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

const useFetchQuery = (initValue, deps, fetchFunc, staleTime) => {
  const [data, setData] = useState(initValue);

  const dataQuery = useQuery(deps, () => fetchFunc(), {
    staleTime,
  });

  useEffect(() => {
    if (dataQuery.isError) handleError(dataQuery.error.code);
  }, [dataQuery.isError]);

  useEffect(() => {
    setData(dataQuery.data);
  }, [dataQuery]);

  return { data };
};

export default useFetchQuery;
