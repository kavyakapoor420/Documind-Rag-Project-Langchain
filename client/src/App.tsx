import React from "react";

import "./App.css";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QuerySection } from "./components/QuerySection";

function App() {
  return (
      <div>
        
        <BrowserRouter>
           <Navbar/>
           <QuerySection/>
            <Routes>
               <Route path="/" element={<div>Home Page</div>} />
            </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
