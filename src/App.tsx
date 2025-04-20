import React from "react";
import './App.css';
import Home from "./pages/Home.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./pages/Navbar.tsx";
import SkillPage from "./pages/SkillPage.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="skills" element={<SkillPage />} />
        <Route path="projects/:id" element={<ProjectPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
