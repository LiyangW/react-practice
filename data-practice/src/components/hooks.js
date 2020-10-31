import { useState, useEffect, useMemo, useCallback } from "react";

export function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!uri) return;
    fetch(uri)
      .then((data) => data.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
}

export function Fetch({
  uri,
  renderSuccess,
  loadingFallback = <p>loading </p>,
  renderError = (e) => <pre>{JSON.stringify(e, null, 2)}</pre>,
}) {
  const { loading, data, error } = useFetch(uri);
  if (loading) return loadingFallback;
  if (error) return renderError(error);
  if (data) return renderSuccess({ data });
}

export const useIterator = (items = [], initialIndex = 0) => {
  const [i, setIndex] = useState(initialIndex);
  const actualLength = items.length - 1;
  const prev = useCallback(() => {
    if (i === 0) return setIndex(actualLength);
    setIndex(i - 1);
  }, [i]);

  const next = useCallback(() => {
    if (i === actualLength) return setIndex(0);
    setIndex(i + 1);
  }, [i]);

  const item = useMemo(() => items[i], [i]);

  return [item || items[0], prev, next];
};
