import { ResetResultsAction, RESET_RESULTS, SetClicksAction, SetErrorsAction, SetSpeedAction, SetStartTimeAction, SetTextAction, SetUserTextAction, SET_CLICKS, SET_ERRORS, SET_SPEED, SET_STARTTIME, SET_TEXT, SET_USERTEXT } from "./actions";
import { Reducer } from '@reduxjs/toolkit';

export type RootState = {
  text: string;
  userText: string;
  errors: number;
  clicks: number;
  startTime: number;
  speed: number;
}

export const initialState: RootState = {
  text: "",
  userText: "",
  errors: 0,
  clicks: 0,
  startTime: 0,
  speed: 0,
}

type MyAction =
  SetTextAction |
  SetUserTextAction |
  SetErrorsAction |
  SetClicksAction |
  SetStartTimeAction |
  ResetResultsAction |
  SetSpeedAction;

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
    case SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      }
    case SET_CLICKS:
      return {
        ...state,
        clicks: action.clicks,
      }
    case SET_STARTTIME:
      return {
        ...state,
        startTime: action.startTime,
      }
    case SET_SPEED:
      return {
        ...state,
        speed: action.speed,
      }
    case RESET_RESULTS:
      return {
        ...state,
        errors: 0,
        clicks: 0,
        startTime: 0,
        speed: 0,
      }
    default:
      return state;
  }
}