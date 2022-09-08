import { SetTextAction, SetUserTextAction, SET_TEXT, SET_USERTEXT } from "./actions";
import { Reducer } from '@reduxjs/toolkit';

export type RootState = {
  text: string;
  userText: string;
}

export const initialState: RootState = {
  text: "",
  userText: "",
}

type MyAction = SetTextAction | SetUserTextAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
  switch (action.type) {
    case SET_TEXT:
      return {
        ...state,
        text: action.text,
      }
    case SET_USERTEXT:
      return {
        ...state,
        userText: action.userText,
      }
    default:
      return state;
  }
}