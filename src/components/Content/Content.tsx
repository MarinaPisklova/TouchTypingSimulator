import React from "react";
import { useSelector } from "react-redux";
import { DialogFrame } from "../DialogFrame";
import { RootState } from "../../store/reducer";
import { TaskBox } from './../TaskBox/TaskBox';

export function Content() {
  const isDoneTask = useSelector<RootState, boolean>(state => state.isDoneTask);

  return (
    <div>
      {isDoneTask ? <DialogFrame /> : <TaskBox />}
    </div>
  )
}