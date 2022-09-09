import React from "react";
import { useSelector } from "react-redux";
import { Speed } from "../Speed";
import { RootState } from "../store/reducer";
import styles from "./ResultBox.module.css";

export function ResultsBox() {
  const errors = useSelector<RootState, number>(state => state.errors);

  return (
    <div className={styles.results}>
      <span>{errors} ошибок </span>
      <Speed/>
    </div>
  )
}