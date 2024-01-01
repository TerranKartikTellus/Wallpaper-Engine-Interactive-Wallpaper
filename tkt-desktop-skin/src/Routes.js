// src/Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Branding from "./components/branding";
// import App from "./App";
// import TopLeft from "./components/Top/Left";
// import TopMid from "./components/Top/Mid";
import TopRight from "./components/Top/Right";
// import MidLeft from "./components/Mid/Left";
// import MidRight from "./components/Mid/Right";
// import BottomLeft from "./components/Bottom/Left";
// import BottomRight from "./components/Bottom/Right";
// import BottomCenter from "./components/Bottom/Mid";
import Main from "./components/main";

function Routess() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Main></Main>} />
        <Route
          path="/top-right"
          element={
            <Main>
              <TopRight />
            </Main>
          }
        />
      </Routes>
    </Router>
  );
}

export default Routess;
