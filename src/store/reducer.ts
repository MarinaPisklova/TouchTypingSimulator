import { ResetResultsAction, RESET_RESULTS, SetClicksAction, SetIsDoneTaskAction, SetMisprintsAction, SetSpeedAction, SetStartTimeAction, SetTextAction, setUserText, SetUserTextAction, SET_CLICKS, SET_IS_DONE_TASK, SET_MISPRINTS, SET_SPEED, SET_STARTTIME, SET_TEXT, SET_USERTEXT, textRequest, TextRequestAction, textRequestError, TextRequestErrorAction, textRequestSuccess, TextRequestSuccessAction, TEXT_REQUEST, TEXT_REQUEST_ERROR, TEXT_REQUEST_SUCCESS } from "./actions";
import { Reducer, ThunkAction } from '@reduxjs/toolkit';
import axios from "axios";

export type RootState = {
  text: string;
  userText: string;
  misprints: number;
  clicks: number;
  startTime: number;
  speed: number;
  loadingText: boolean;
  error: string;
  isDoneTask: boolean;
}

export const initialState: RootState = {
  text: "",
  userText: "",
  misprints: 0,
  clicks: 0,
  startTime: 0,
  speed: 0,
  loadingText: false,
  error: "",
  isDoneTask: false,
}

type MyAction =
  SetTextAction |
  SetUserTextAction |
  SetMisprintsAction |
  SetClicksAction |
  SetStartTimeAction |
  ResetResultsAction |
  SetSpeedAction |
  TextRequestAction |
  TextRequestErrorAction |
  TextRequestSuccessAction |
  SetIsDoneTaskAction;

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
    case SET_MISPRINTS:
      return {
        ...state,
        misprints: action.misprints,
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
        text: "",
        userText: "",
        misprints: 0,
        clicks: 0,
        startTime: 0,
        speed: 0,
        isDoneTask: false,
      }
    case SET_IS_DONE_TASK:
      return {
        ...state,
        isDoneTask: action.isDoneTask,
      }
    case TEXT_REQUEST:
      return {
        ...state,
        loadingText: true,
        isDoneTask: false,
      };
    case TEXT_REQUEST_ERROR:
      return {
        ...state,
        error: action.error,
        isDoneTask: false,
        loadingText: false,
      }
    case TEXT_REQUEST_SUCCESS:
      return {
        ...state,
        text: action.text,
        userText: "",
        isDoneTask: false,
        loadingText: false,
      }
    default:
      return state;
  }
}

export const textRequestAsync = (): ThunkAction<void, RootState, unknown, MyAction> => (dispatch, getState) => {
  dispatch(textRequest());
  axios.get("https://baconipsum.com/api/?type=meat-and-filler&sentences=1&format=text")
    .then((resp) => {
      const newText = resp.data;
      dispatch(textRequestSuccess(newText));
    })
    .catch((error) => {
      console.log(error);
      dispatch(textRequestError(String(error)));
    })
}
