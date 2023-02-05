import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Layout, About, Home } from "./component";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Home />
      <About />
    </Layout>
  );
}

export default App;
