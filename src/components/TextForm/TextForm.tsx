import React, { ChangeEvent } from "react";
import { useSelector } from 'react-redux';
import { RootState } from "../../store/reducer";
import styles from "./TextForm.module.css";
import { Loader } from "../UI/Loader";
import { Error } from "../UI/Error";
import { Input } from '../UI/Input/Input';
import { InputText } from "../InputText";
import { Label } from "../UI/Label";

interface ITextFormProps {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function TextForm({ handleChange }: ITextFormProps) {
  const loadingText = useSelector<RootState, boolean>(state => state.loadingText);
  const error = useSelector<RootState, string>(state => state.error);

  return (
    <>
      {
        loadingText
          ?
          <Loader />
          :
          (
            error
              ?
              <Error message={error} />
              :
              <div className={styles.inputBox} >
                <Input name="text" onChange={handleChange} />
                <Label htmlFor="text">
                  <InputText />
                </Label >
              </div>
          )
      }
    </>
  )
}