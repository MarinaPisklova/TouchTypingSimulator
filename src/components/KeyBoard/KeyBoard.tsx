import React from "react";
import { Key } from "./Key";
import styles from './KeyBoard.module.css';


export function KeyBoard() {
  return (
    <>
      <div className={styles.row}>
        <Key sign="tab" />
        <Key sign="q" />
        <Key sign="w" />
        <Key sign="e" />
        <Key sign="r" />
        <Key sign="t" />
        <Key sign="y" />
        <Key sign="u" />
        <Key sign="i" />
        <Key sign="o" />
        <Key sign="p" />
        <Key sign="[" />
        <Key sign="]" />
      </div>
      <div className={styles.row}>
        <Key sign="caps" />
        <Key sign="a" />
        <Key sign="s" />
        <Key sign="d" />
        <Key sign="f" />
        <Key sign="g" />
        <Key sign="h" />
        <Key sign="j" />
        <Key sign="k" />
        <Key sign="l" />
        <Key sign=";" />
        <Key sign="'" />
        <Key sign="Enter" />
      </div>
      <div className={styles.row}>
        <Key sign="shift" />
        <Key sign="z" />
        <Key sign="x" />
        <Key sign="c" />
        <Key sign="v" />
        <Key sign="b" />
        <Key sign="n" />
        <Key sign="m" />
        <Key sign="," />
        <Key sign="." />
        <Key sign="/" />
        <Key sign="shift" />
      </div>
      <div className={styles.row}>
        <Key sign="space" />
      </div>
    </>

  )
}