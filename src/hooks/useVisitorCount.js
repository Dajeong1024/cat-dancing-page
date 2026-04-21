import { useEffect, useRef, useState } from 'react';

const NAMESPACE = 'dajeong1024-cat-dancing';
const KEY = 'visits';
const API = `https://abacus.jasoncameron.dev/hit/${NAMESPACE}/${KEY}`;
const MY_VISITS_KEY = 'catDancing_myVisits';

export default function useVisitorCount() {
  const [total, setTotal] = useState(null);
  const [myVisits, setMyVisits] = useState(0);
  const [error, setError] = useState(false);
  const calledRef = useRef(false);

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;

    const stored = parseInt(localStorage.getItem(MY_VISITS_KEY) || '0', 10);
    const next = stored + 1;
    localStorage.setItem(MY_VISITS_KEY, String(next));
    setMyVisits(next);

    fetch(API)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => setTotal(data.value))
      .catch(() => setError(true));
  }, []);

  return { total, myVisits, error };
}
