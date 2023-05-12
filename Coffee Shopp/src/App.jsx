import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Done } from "./pages";
import LandingPage from "./LandingPage";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="*" element={<Home />} />
          <Route path="/Done" element={<Done />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
