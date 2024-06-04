
import React from "react";
import Header from "./components/Header";
import Todoieitem from "./components/Todoieitem";
import Button from "./components/Button";
import CounterComponent from "./components/CounterComponent";

import "./style.css";
const App = () => {
  return (
  <div className ="todo-container">
    <CounterComponent/>
    <Header text="TODO"/>
    <Todoieitem text="EAT"/>
    <Todoieitem completed={true} text="CODE"/>
    <Todoieitem text="PLAY"/>
    <Todoieitem text="GYM"/>
    <Todoieitem text="IPL"/>
    <Button/>
  </div>
  );
};

export default App;
