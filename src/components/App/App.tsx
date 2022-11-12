import React from "react";
import { Provider } from "react-redux";
import { Content } from "../Content";
import store from "../../store/store";
import { Header } from "../Header";


export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <Content />
    </Provider>
  )
}