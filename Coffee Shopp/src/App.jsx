import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, SuksesPages } from "./pages";
import LandingPage from "./LandingPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="*" element={<Home />} />
          <Route path="/suksespages" element={<SuksesPages />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
