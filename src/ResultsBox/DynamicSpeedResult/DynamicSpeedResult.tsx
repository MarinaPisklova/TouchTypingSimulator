import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { setSpeed } from '../../store/actions';

export function DynamicSpeedResult() {
  const clicks = useSelector<RootState, number>(state => state.clicks);
  const startTime = useSelector<RootState, number>(state => state.startTime);
  const speed = useSelector<RootState, number>(state => state.speed);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      const elapsed = (new Date()).getTime() - startTime;
      const speedOfTyping = elapsed ? clicks / (elapsed / 1000) * 60 : 0;
      dispatch(setSpeed(speedOfTyping))
    }, 1000);

    return () => clearTimeout(timer);
  })

  return (
    <span>{speed.toFixed(0)} зн/мин</span>
  )
}