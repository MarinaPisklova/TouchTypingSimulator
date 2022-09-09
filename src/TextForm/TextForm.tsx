import React, { ChangeEvent } from "react";
import { useSelector } from 'react-redux';
import { RootState } from "../store/reducer";
import styles from "./TextForm.module.css";
import { Cursor } from "../Cursor";

interface ITexFormProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TextForm({ handleChange }: ITexFormProps) {
  const text = useSelector<RootState, string>(state => state.text);
  const userText = useSelector<RootState, string>(state => state.userText);

  return (
    <div className={styles.inputBox} >
      <input
        className={styles.input}
        type="text"
        name="text"
        id="text"
        onChange={handleChange}
        autoFocus
      />
      <label htmlFor="text" className={styles.label}>
        <span className={styles.black}>{userText}</span>
        <Cursor />
        <span className={styles.gray}>{text}</span>
      </label>
    </div>
  )
}
