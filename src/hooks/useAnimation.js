import { useState, useCallback } from 'react';

export const DANCE_MODES = [
  { id: 'wiggle', label: '좌우 흔들기' },
  { id: 'jump', label: '점프' },
  { id: 'spin', label: '회전' },
  { id: 'party', label: '파티 (전체)' },
];

export default function useAnimation() {
  const [isDancing, setIsDancing] = useState(true);
  const [mode, setMode] = useState('party');
  const [speed, setSpeed] = useState(1);

  const toggle = useCallback(() => setIsDancing((v) => !v), []);
  const selectMode = useCallback((id) => setMode(id), []);
  const changeSpeed = useCallback((v) => setSpeed(v), []);

  return { isDancing, mode, speed, toggle, selectMode, changeSpeed };
}
