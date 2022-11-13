import React from "react";
import { Key } from "./Key";
import styles from './KeyBoard.module.css';
import { useKeyObserver } from './../../hooks/useKeyObserver';


export function KeyBoard() {
  useKeyObserver();
  return (
    <>
      <div className={styles.row}>
        <Key name="q" />
        <Key name="w" />
        <Key name="e" />
        <Key name="r" />
        <Key name="t" />
        <Key name="y" />
        <Key name="u" />
        <Key name="i" />
        <Key name="o" />
        <Key name="p" />
        <Key name="[" />
        <Key name="]" />
      </div>
      <div className={styles.row}>
        <Key name="a" />
        <Key name="s" />
        <Key name="d" />
        <Key name="f" />
        <Key name="g" />
        <Key name="h" />
        <Key name="j" />
        <Key name="k" />
        <Key name="l" />
        <Key name=";" />
        <Key name="'" />
      </div>
      <div className={styles.row}>
        <Key name="Shift" code="ShiftLeft" size={1} />
        <Key name="z" />
        <Key name="x" />
        <Key name="c" />
        <Key name="v" />
        <Key name="b" />
        <Key name="n" />
        <Key name="m" />
        <Key name="," />
        <Key name="." />
        <Key name="/" />
        <Key name="Shift" code="ShiftRight" size={1} />
      </div>
      <div className={styles.row}>
        <Key name=" " size={2} />
      </div>
    </>

  )
}