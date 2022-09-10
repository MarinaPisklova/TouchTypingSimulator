import React from "react";
import { Button } from "../../Button";
import styles from "./DialogButtons.module.css";
import { useDispatch } from 'react-redux';
import { resetResults} from "../../store/actions";
import { setText } from './../../store/actions';
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;

export function DialogButtons() {
  const dispatch = useDispatch<AppDispatch>();
  const userText = useSelector<RootState, string>(state => state.userText);
  const text = useSelector<RootState, string>(state => state.text);

  function handleClickRepeat() {
    dispatch(resetResults());
    dispatch(setText(userText + text));
  }

  function handleClickNewTask() {
    dispatch(resetResults());
  }

  return (
    <div className={styles.buttonBox}>
      <Button type={"button"} handleClick={handleClickRepeat}>Повторить</Button>
      <Button type={"button"} handleClick={handleClickNewTask} autofocus >Новый текст</Button>
    </div>
  )
}