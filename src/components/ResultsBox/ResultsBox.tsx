import React from "react";
import styles from "./ResultBox.module.css";

interface IResultBoxProps {
  children: React.ReactNode;
}

export function ResultsBox(props: IResultBoxProps) {
  return (
    <div className={styles.results}>
      <h6>Ваши результаты</h6>
      <div className={styles.resultsBox}>
        {props.children}
      </div>
    </div>
  )
}