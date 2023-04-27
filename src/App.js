import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Inspo from "./pages/Inspo";
import Writing from "./pages/Writing";
import React from "react";
import Navbar from "./components/Navbar";
import WritingInner from "./pages/WritingInner";

function App() {
  return (
    <div
      className="w-screen h-screen mx-auto px-4 max-w-4xl"
      id="app"
    >
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/inspo" element={<Inspo />}></Route>
          <Route path="/writing" element={<Writing />} />
          <Route path="/writing/:id" element={<WritingInner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
