import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Layout,
  About,
  Home,
  WhySolve,
  WhatNow,
  WhatElse,
  Project,
  TestiMonials,
} from "./component";

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <WhySolve />
      <WhatNow />
      <WhatElse />
      <Project />
      <TestiMonials />
    </Layout>
  );
}

export default App;
