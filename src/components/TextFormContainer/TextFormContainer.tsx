import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState, textRequestAsync } from "../../store/reducer";
import { setText, setUserText, setClicks, setStartTime, setMisprints, setIsDoneTask } from '../../store/actions';
import { ResultsBox } from "../ResultsBox";
import { MisprintsResult } from "../ResultsBox/MisprintsResult";
import { DynamicSpeedResult } from "../ResultsBox/DynamicSpeedResult";
import { TextForm } from "../TextForm";
import { KeyBoard } from './../KeyBoard/KeyBoard';
import { getShiftForKey } from './../../utils/matchKeyToShift';
import { textRequestSaga } from './../../store/actions';

export function TextFormContainer() {
  const text = useSelector<RootState, string>(state => state.text);
  const userText = useSelector<RootState, string>(state => state.userText);
  const misprints = useSelector<RootState, number>(state => state.misprints);
  const clicks = useSelector<RootState, number>(state => state.clicks);
  const name = useSelector<RootState, string>(state => state.keydown.name);
  const code = useSelector<RootState, string>(state => state.keydown.code);
  const prevCode = useSelector<RootState, string>(state => state.keydown.prevCode);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!text) {
      // dispatch(textRequestAsync());
      dispatch(textRequestSaga());
    }
  }, [])

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>): void {
    const lettersText = text.split('');
    const lettersUserText = event.target.value.split('');
    const userTextLength = lettersUserText.length;

    if (
      lettersText && lettersText[0] == lettersUserText[userTextLength - 1]
    ) {
      
      if (
        lettersText[0] == lettersText[0].toLowerCase() ||
        (
          lettersText[0] == lettersText[0].toUpperCase() &&
          prevCode == getShiftForKey(lettersText[0].toLowerCase())
        )
      ) {
        if (clicks == 0) {
          dispatch(setStartTime((new Date()).getTime()));
        }

        dispatch(setText(text.slice(1)));
        dispatch(setUserText(userText + lettersUserText[userTextLength - 1]));
        dispatch(setClicks(clicks + 1));

        if (lettersText.length == 1) {
          dispatch(setIsDoneTask(true));
        }
      }
      else {
        dispatch(setMisprints(misprints + 1));
      }
    }
    else {
      dispatch(setMisprints(misprints + 1));
    }
  }

  return (
    <>
      <ResultsBox>
        <MisprintsResult />
        <DynamicSpeedResult />
      </ResultsBox>
      <TextForm handleChange={handleChangeInput} />
    </>
  )
}
