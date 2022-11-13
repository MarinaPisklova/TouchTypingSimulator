import React, { useEffect, useState } from "react";
import styles from './Key.module.css';
import { useKeyObserver } from './../../../hooks/useKeyObserver';
import { useSelector } from 'react-redux';
import { RootState } from "../../../store/reducer";
import { getShiftForKey } from './../../../utils/matchKeyToShift';

interface IKey {
  name: string;
  code?: string;
  size?: 0 | 1 | 2;
}

export function Key(props: IKey) {
  const [active, setActive] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const currentName = useSelector<RootState, string>(state => state.keydown.name);
  const currentCode = useSelector<RootState, string>(state => state.keydown.code);
  const text = useSelector<RootState, string>(state => state.text);
  const misprint = useSelector<RootState, number>(state => state.misprints);
  const sizes = [styles.simple, styles.medium, styles.big];
  let letter = text[0];

  useEffect(() => {
    if (letter && letter.toLowerCase() == props.name) {
      setActive(true);
    }
    else if (
      letter && props.name == "Shift" &&
      letter == letter.toUpperCase() && (letter != " " && letter != ".") &&
      props.code == getShiftForKey(letter.toLowerCase())
    ) {
      setActive(true);
    }
    else {
      setActive(false);
    }
  }, [text]);

  useEffect(() => {
    if (letter != currentName && currentName == props.name
      && (props.code ? props.code == currentCode : true)
    ) {
      if (
        currentName == "Shift" && 
        letter == letter.toUpperCase() && letter != " " && letter != "." &&
        currentCode == getShiftForKey(letter.toLowerCase())
        ) {
        setError(false);
      }
      else {
        setError(true);
      }
    }
    else {
      setError(false);
    }
  }, [misprint, currentName, currentCode]);

  return (
    <div
      className={styles.key + " "
        + (sizes[props.size || 0]) + " "
        + (active && styles.active) + " "
        + (error && styles.error)}
    >
      {props.name}
    </div>
  )
}