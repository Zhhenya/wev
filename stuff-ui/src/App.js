import React from "react";
import {HashRouter} from "react-router-dom";
import AppRouter from "./stuff/AppRouter";
import AppWrapper from "./stuff/AppWrapper";

const App = () => (
  <HashRouter>
    <AppWrapper>
      <AppRouter/>
    </AppWrapper>
  </HashRouter>
);
export default App;
