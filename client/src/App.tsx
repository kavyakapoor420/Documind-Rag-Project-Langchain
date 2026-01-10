import React from "react";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuerySection } from "./components/QuerySection";
import { UploadSection } from "./components/UploadSection";
import HomePage from "./pages/HomePage";
import { AnswerSection } from "./components/AnswerSection";

function App() {
  return (
      <div>
        
        <BrowserRouter>
           <Navbar/>
           <AnswerSection/>
           <QuerySection/>
            <Routes>
               <Route path="/" element={<div>Home Page</div>} />
               <Route path="/upload" element={<UploadSection/>}/>
               <Route path="/hello" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
