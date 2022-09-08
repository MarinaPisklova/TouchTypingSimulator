import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../store/reducer";
import axios from "axios";
import { setText, setUserText } from './../store/actions';
import { Button } from "../Button";
import styles from "./TextFormContainer.module.css";


export function TextFormContainer() {
  const text = useSelector<RootState, string>(state => state.text);
  const userText = useSelector<RootState, string>(state => state.userText);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    getText();
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      isVisible ? setIsVisible(false) : setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  })

  function handleClickButton() {
    getText();
  }

  function handleChangeInput(event: ChangeEvent<HTMLInputElement>) {
    const lettersText = text.split('');
    const lettersUserText = event.target.value.split('');
    const userTextLength = lettersUserText.length;

    if (lettersText[0] == lettersUserText[userTextLength - 1]) {
      const newText = text.slice(1);
      console.log(newText)

      dispatch(setText(newText));
      dispatch(setUserText(userText + lettersUserText[userTextLength - 1]));
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
      <div className={styles.inputBox} >
        <input className={styles.input} type="text" name="text" id="text" onChange={handleChangeInput} autoFocus/>
        <label htmlFor="text" className={styles.label}>
          <span className={styles.black}>{userText}</span>
          <span className={isVisible ? styles.active : styles.inactive}>|</span>
          <span className={styles.gray}>{text}</span>
        </label>
      </div>

      {/* <TextForm text={inputValue} handleChange={handleChangeInput} /> */}
      {/* <h6>{inputValue}</h6>
      <h6>{userText}</h6> */}
      <Button type={"button"} handleClick={handleClickButton}> Новый текст</Button>
    </>
  )
}
