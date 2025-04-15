import React from "react";
import './App.css';
import Home from "./pages/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./pages/Skills.tsx";
import Navbar from "./pages/Navbar.tsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="skills" element={<Skills />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
