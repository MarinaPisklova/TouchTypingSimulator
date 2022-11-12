import React, { ChangeEvent } from "react";
import styles from "./Input.module.css";

interface InputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export function Input(props: InputProps) {
  return (
    <input
      className={styles.input}
      type="text"
      name={props.name}
      id={props.name}
      onChange={props.onChange}
      autoFocus
    />
  )
}