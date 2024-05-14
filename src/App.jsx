import React from "react";
import Add from "./components/Add";
import View from "./components/View";
import { Provider } from "react-redux";
import store from "./Redux/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <Add />
        <View />
      </Provider>
    </>
  );
}
