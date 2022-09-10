import React, { ChangeEvent } from "react";
import { useSelector } from 'react-redux';
import { RootState } from "../store/reducer";
import styles from "./TextForm.module.css";
import { Cursor } from "../Cursor";
import { Loader } from "../Loader";
import { Error } from "../Error";


interface ITextFormProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TextForm({ handleChange }: ITextFormProps) {
  const text = useSelector<RootState, string>(state => state.text);
  const userText = useSelector<RootState, string>(state => state.userText);
  const loadingText = useSelector<RootState, boolean>(state => state.loadingText);
  const error = useSelector<RootState, string>(state => state.error);

  return (
    <>
      {
        loadingText ? (
          <Loader />
        ) : (
          error ? (
            <Error message={error} />
          ) : (
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
                <span className={styles.userText}>{userText}</span>
                <Cursor />
                <span className={styles.text}>{text}</span>
              </label>
            </div>
          )
        )
      }
    </>
  )
}