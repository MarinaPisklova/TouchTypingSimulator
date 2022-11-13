import { ActionCreator } from "redux";

export const SET_TEXT = 'SET_TEXT';
export type SetTextAction = {
  type: typeof SET_TEXT;
  text: string;
}
export const setText: ActionCreator<SetTextAction> = (text: string) => (
  { type: SET_TEXT, text }
)

export const SET_USERTEXT = "SET_USERTEXT";
export type SetUserTextAction = {
  type: typeof SET_USERTEXT;
  userText: string;
}
export const setUserText: ActionCreator<SetUserTextAction> = (userText: string) => (
  { type: SET_USERTEXT, userText }
)


export const SET_MISPRINTS = "SET_MISPRINTS";
export type SetMisprintsAction = {
  type: typeof SET_MISPRINTS;
  misprints: number;
}
export const setMisprints: ActionCreator<SetMisprintsAction> = (misprints) => (
  { type: SET_MISPRINTS, misprints }
)


export const SET_CLICKS = "SET_CLICKS";
export type SetClicksAction = {
  type: typeof SET_CLICKS;
  clicks: number;
}
export const setClicks: ActionCreator<SetClicksAction> = (clicks) => (
  { type: SET_CLICKS, clicks }
)

export const SET_STARTTIME = "SET_STARTTIME";
export type SetStartTimeAction = {
  type: typeof SET_STARTTIME;
  startTime: number;
}
export const setStartTime: ActionCreator<SetStartTimeAction> = (startTime) => (
  { type: SET_STARTTIME, startTime }
)

export const RESET_RESULTS = "RESET_RESULTS";
export type ResetResultsAction = {
  type: typeof RESET_RESULTS;
}
export const resetResults: ActionCreator<ResetResultsAction> = () => (
  { type: RESET_RESULTS }
)

export const SET_SPEED = "SET_SPEED";
export type SetSpeedAction = {
  type: typeof SET_SPEED;
  speed: number;
}
export const setSpeed: ActionCreator<SetSpeedAction> = (speed) => (
  { type: SET_SPEED, speed }
)


export const TEXT_REQUEST = "TEXT_REQUEST";
export type TextRequestAction = {
  type: typeof TEXT_REQUEST;
}
export const textRequest: ActionCreator<TextRequestAction> = () => (
  { type: TEXT_REQUEST }
)

export const TEXT_REQUEST_ERROR = "TEXT_REQUEST_ERROR";
export type TextRequestErrorAction = {
  type: typeof TEXT_REQUEST_ERROR;
  error: string;
}
export const textRequestError: ActionCreator<TextRequestErrorAction> = (error) => (
  { type: TEXT_REQUEST_ERROR, error }
)

export const TEXT_REQUEST_SUCCESS = "TEXT_REQUEST_SUCCESS";
export type TextRequestSuccessAction = {
  type: typeof TEXT_REQUEST_SUCCESS;
  text: string;
}
export const textRequestSuccess: ActionCreator<TextRequestSuccessAction> = (text) => (
  { type: TEXT_REQUEST_SUCCESS, text }
)

export const SET_IS_DONE_TASK = "SET_IS_DONE_TASK";
export type SetIsDoneTaskAction = {
  type: typeof SET_IS_DONE_TASK;
  isDoneTask: boolean;
}
export const setIsDoneTask: ActionCreator<SetIsDoneTaskAction> = (isDoneTask) => (
  { type: SET_IS_DONE_TASK, isDoneTask }
)


export const SET_KEYDOWN_NAME = "SET_KEYDOWN_NAME";
export type SetKeydownNameAction = {
  type: typeof SET_KEYDOWN_NAME;
  name: string;
  code: string;
}
export const setKeydownName: ActionCreator<SetKeydownNameAction> = (name, code) => (
  { type: SET_KEYDOWN_NAME, name, code }
)