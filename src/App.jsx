import React from "react";
import Add from "./components/Add";
import View from "./components/View";
import { useSelector } from "react-redux";
import Update from "./components/Update";

export default function App() {
  const res = useSelector((state) => state.updateSlice);
  const updated = res[0].bool;
  return (
    <>
      {updated ? <Update /> : <Add />}
      <View />
    </>
  );
}
