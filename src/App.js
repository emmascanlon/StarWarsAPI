import React from 'react';
import './App.css';
import People from "./components/People"
import { Switch, Route } from "react-router-dom";
import Planet from "./components/Planet"

function App() {
  return (
    <>
   
    <Switch>
   <Route exact path="/planets/:id" component={Planet} />
   <Route exact path="/" component={People} />
   </Switch>
    </>
  );
}

export default App;
