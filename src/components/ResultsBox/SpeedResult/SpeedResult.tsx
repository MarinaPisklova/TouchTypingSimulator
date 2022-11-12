import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/reducer";

export function SpeedResult() {
  const speed = useSelector<RootState, number>(state => state.speed);

  return (
    <span>{speed.toFixed(0)} зн/мин</span>
  )
}