import React, { useEffect, useState } from "react";
import styles from './Key.module.css';
import { useKeyObserver } from './../../../hooks/useKeyObserver';
import { useSelector } from 'react-redux';
import { RootState } from "../../../store/reducer";

export function Key(props: { sign: string }) {
  const [active, setActive] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const currentSign = useKeyObserver();
  console.log(currentSign);
  const text = useSelector<RootState, string>(state => state.text);
  const misprint = useSelector<RootState, number>(state => state.misprints);

  useEffect(() => {
    if (text[0] == props.sign || text[0] == (props.sign).toUpperCase()) {
      setActive(true);
    }
    else {
      setActive(false);
    }
  }, [text]);

  useEffect(() => {
    if (text[0] != currentSign && currentSign == props.sign) {
      setError(true);
    }
    else {
      setError(false);
    }
  }, [misprint, currentSign]);

  return (
    <div
      className={styles.key + " "
        + ( props.sign.length > 1 && styles.specialKey) + " "
        + (active && styles.active) + " "
        + (error && styles.error)}
    >
      {props.sign}
    </div>
  )
}