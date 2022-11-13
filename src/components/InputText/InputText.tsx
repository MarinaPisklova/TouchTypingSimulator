import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { Cursor } from "../Cursor";
import styles from "./InputText.module.css";

export function InputText() {
  const text = useSelector<RootState, string>(state => state.text);
  const userText = useSelector<RootState, string>(state => state.userText);
  
  return (
    <>
      <span className={styles.userText}>{userText}</span>
      <Cursor />
      <span className={styles.text}>{text.toLowerCase()}</span>
    </>
  )
}