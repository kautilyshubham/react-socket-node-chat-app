import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

// components
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Join}></Route>
      <Route path="/chat" exact component={Chat}></Route>
    </Router>
  );
}

export default App;
