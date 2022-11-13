import { useState, useLayoutEffect } from "react";
import { useDispatch } from 'react-redux';
import { setKeydownName } from "../store/actions";

export const useKeyObserver = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    function updateName(event) {
      dispatch(setKeydownName(event.key, event.code))
    }

    window.addEventListener("keydown", updateName);
    return () => window.removeEventListener("resize", updateName);
  }, []);
};
