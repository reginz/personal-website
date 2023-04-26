import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Inspo from "./pages/Inspo";
import Writing from "./pages/Writing";
import React from "react";

function App() {
  return (
    <div className="w-screen h-screen container mx-auto px-4" id="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/inspo" element={<Inspo />}></Route>
          <Route path="/writing/:id" element={<Writing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
