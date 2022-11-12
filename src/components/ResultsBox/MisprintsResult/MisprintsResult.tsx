import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducer";

export function MisprintsResult() {
  const misprints = useSelector<RootState, number>(state => state.misprints);

  return (
    <span>{misprints} ошибок </span>
  )
}