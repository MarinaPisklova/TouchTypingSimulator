import React, { ChangeEvent, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../store/reducer";
import axios from "axios";
import { setText, setUserText, setErrors, setClicks, setStartTime, resetResults } from './../store/actions';
import { Button } from "../Button";
import { TextForm } from "../TextForm/TextForm";
import { ResultsBox } from "../ResultsBox";


export function TextFormContainer() {
  const text = useSelector<RootState, string>(state => state.text);
  const userText = useSelector<RootState, string>(state => state.userText);
  const errors = useSelector<RootState, number>(state => state.errors);
  const clicks = useSelector<RootState, number>(state => state.clicks);
  const dispatch = useDispatch();

  useEffect(() => {
    getText();
  }, [])

  function handleClickButton() {
    getText();
    dispatch(resetResults());
  }

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    const lettersText = text.split('');
    const lettersUserText = event.target.value.split('');
    const userTextLength = lettersUserText.length;

    if (lettersText[0] == lettersUserText[userTextLength - 1]) {
      if (clicks == 0) {
        dispatch(setStartTime((new Date()).getTime()));
      }

      dispatch(setText(text.slice(1)));
      dispatch(setUserText(userText + lettersUserText[userTextLength - 1]));
      dispatch(setClicks(clicks + 1))

      if (lettersText.length == 1) {
        getText();
      }
    }
    else {
      dispatch(setErrors(errors + 1));
    }
  }

  function getText() {
    axios.get("https://baconipsum.com/api/?type=meat-and-filler&sentences=1&format=text")
      .then((resp) => {
        const newText = resp.data;
        dispatch(setText(newText));
        dispatch(setUserText(""));
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <>
      <TextForm handleChange={handleChangeInput} />
      <ResultsBox />
      <Button type={"button"} handleClick={handleClickButton}> Новый текст</Button>
    </>
  )
}
