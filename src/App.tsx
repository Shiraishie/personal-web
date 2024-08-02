import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Contact from "./components/contacts/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="contacts" element={<Contact />} />
          </Routes>
        </body>
      </BrowserRouter>
    </>
  );
}

export default App;
