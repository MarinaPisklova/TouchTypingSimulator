import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState, textRequestAsync } from "../store/reducer";
import { setText, setUserText, setClicks, setStartTime, setMisprints, setIsDoneTask } from './../store/actions';
import { TextForm } from "../TextForm/TextForm";
import { ResultsBox } from "../ResultsBox";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { MisprintsResult } from "../ResultsBox/MisprintsResult";
import { DynamicSpeedResult } from "../ResultsBox/DynamicSpeedResult";

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export function TextFormContainer() {
  const text = useSelector<RootState, string>(state => state.text);
  const userText = useSelector<RootState, string>(state => state.userText);
  const misprints = useSelector<RootState, number>(state => state.misprints);
  const clicks = useSelector<RootState, number>(state => state.clicks);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!text) {
      dispatch(textRequestAsync());
    }
  }, [])

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>): void {
    const lettersText = text.split('');
    const lettersUserText = event.target.value.split('');
    const userTextLength = lettersUserText.length;

    if (lettersText[0] == lettersUserText[userTextLength - 1]) {
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
