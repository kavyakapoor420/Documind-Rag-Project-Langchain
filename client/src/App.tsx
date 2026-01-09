import React from "react";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuerySection } from "./components/QuerySection";
import { UploadSection } from "./components/UploadSection";

function App() {
  return (
      <div>
        
        <BrowserRouter>
           <Navbar/>
           <QuerySection/>
            <Routes>
               <Route path="/" element={<div>Home Page</div>} />
               <Route path="/upload" element={<UploadSection/>}/>
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
