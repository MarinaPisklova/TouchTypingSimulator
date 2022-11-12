import React from "react";
import styles from './Label.module.css';

interface ILabel{
  children: React.ReactNode;
  htmlFor: string;
}

export function Label(props: ILabel) {
  return (
    <label htmlFor={props.htmlFor} className={styles.label}>
      {props.children}
    </label>
  )
}