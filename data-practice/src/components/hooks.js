import { useState, useEffect, useMemo, useCallback, useRef } from "react";

export function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  const mounted = useMountedRef();

  useEffect(() => {
    if (!uri) return;
    if (!mounted.current) return;
    fetch(uri)
      .then((data) => {
        if (!mounted.current) throw new Error("component not mounted");
        return data.json();
      })
      .then(setData)
      .then(() => setLoading(false))
      .catch((e) => {
        if (!mounted.current) return;
        setError(e);
      });
    // eslint-disable-next-line
  }, [uri]);

  return {
    loading,
    data,
    error,
  };
}

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initialValue),
  ];
};

export const useIterator = (items = [], initialIndex = 0) => {
  const [i, setIndex] = useState(initialIndex);
  const actualLength = items.length - 1;
  const prev = useCallback(() => {
    if (i === 0) return setIndex(actualLength);
    setIndex(i - 1);
    // eslint-disable-next-line
  }, [i]);

  const next = useCallback(() => {
    if (i === actualLength) return setIndex(0);
    setIndex(i + 1);
    // eslint-disable-next-line
  }, [i]);
  // eslint-disable-next-line
  const item = useMemo(() => items[i], [i]);

  return [item || items[0], prev, next];
};

export function useMountedRef() {
  const mounted = useRef(false);
  useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  });
  return mounted;
}
