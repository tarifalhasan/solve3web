import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Layout } from "./component";
import { Route, Routes } from "react-router-dom";
import { Home } from "./component";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
