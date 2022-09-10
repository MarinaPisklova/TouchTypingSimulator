import React from "react";
import { useSelector } from "react-redux";
import { DialogFrame } from "../DialogFrame";
import { RootState } from "../store/reducer";
import { TextFormContainer } from "../TextFormContainer";
import styles from "./Content.module.css";

export function Content() {
  const isDoneTask = useSelector<RootState, boolean>(state => state.isDoneTask);

  return (
    <div className={styles.content}>
      {isDoneTask ? <DialogFrame /> : <TextFormContainer />}
    </div>
  )
}