import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from "./components/HomeComponent";
import JobOne from "./components/JobOne";
import JobTwo from "./components/JobTwo";
import JobThree from "./components/JobThree";
import JobFour from "./components/JobFour";
import JobFive from "./components/JobFive";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent/>}/>
          <Route path="/jobone" element={<JobOne/>}/>
          <Route path="/jobtwo" element={<JobTwo/>}/>
          <Route path="/jobthree" element={<JobThree/>}/>
          <Route path="/jobfour" element={<JobFour/>}/>
          <Route path="/jobfive" element={<JobFive/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
