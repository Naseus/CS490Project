// import React, { useState } from 'react';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Login, User} from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Login />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

