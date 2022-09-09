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


export const SET_ERRORS = "SET_ERRORS";
export type SetErrorsAction = {
  type: typeof SET_ERRORS;
  errors: number;
}
export const setErrors: ActionCreator<SetErrorsAction> = (errors) => (
  { type: SET_ERRORS, errors }
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