import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
