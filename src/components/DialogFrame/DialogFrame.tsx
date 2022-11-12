import React from "react";
import { ResultsBox } from "../ResultsBox";
import { MisprintsResult } from "../ResultsBox/MisprintsResult";
import { SpeedResult } from "../ResultsBox/SpeedResult";
import { DialogButtons } from "./DialogButtons";
import styles from "./DialogFrame.module.css";

export function DialogFrame() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        <h5 className={styles.title}>Вы закончили упражнение!</h5>
        <ResultsBox>
          <MisprintsResult />
          <SpeedResult/>
        </ResultsBox>
        <DialogButtons />
      </div>
    </div>
  );
}