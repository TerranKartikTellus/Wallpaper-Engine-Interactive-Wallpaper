import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Branding from "./components/branding";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div style={{ height: "100vh" }} className="bggreen-500  w-full group">
      <div
        style={{ minHeight: "33.3%" }}
        className=" flex flex-row item-start justify-start bg-red400"
      >
        <div className="w-1/3">
          {/* . */}
        </div>
        <div className="w-1/3">
          {/* . */}
        </div>
        <div className="w-1/3">
          {/* . */}
        </div>
      </div>
      <div
        style={{ minHeight: "33.3%" }}
        className=" flex flex-row item-start justify-start bg-red400"
      >
        <div className="w-1/3"></div>
        <div className="w-1/3"><Branding></Branding> <App></App></div>
        <div className="w-1/3"></div> {/* Your content */}
      </div>
      <div
        style={{ minHeight: "33.3%" }}
        className=" flex flex-row item-start justify-start bg-red400"
      >
        <div className="w-1/3"></div>
        <div className="w-1/3"></div>
        <div className="w-1/3"></div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
