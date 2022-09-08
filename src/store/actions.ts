import { ActionCreator } from "redux";

export const SET_TEXT = 'SET_TEXT';
export type SetTextAction = {
  type: typeof SET_TEXT;
  text: string;
}
export const setText: ActionCreator<SetTextAction> = (text: string) => (
  { type: SET_TEXT, text}
)

export const SET_USERTEXT = "SET_USERTEXT";
export type SetUserTextAction = {
  type:typeof SET_USERTEXT;
  userText: string;
}
export const setUserText:ActionCreator<SetUserTextAction> = (userText: string) => (
  {type: SET_USERTEXT, userText}
)

