import React from "react";

import Branding from "./branding";
import BottomRight from "./Bottom/Right";

import { useSelector, useDispatch } from 'react-redux';
import { setActiveTab } from '../redux/actions';
// 
export default function Main({ children }) {
  const activeTab = useSelector((state) => state.activeTab);
  const dispatch = useDispatch();

  const handleSetActiveTab = (r,c) => {
    const newTab = {
      r: r,
      c: c,
    };
    dispatch(setActiveTab(newTab));
  };

  return (
    <div style={{ height: "100vh" }} className="bggreen-500  w-full group">
      <div
        style={{ minHeight: "33.3%" }}
        className=" flex flex-row item-start justify-start bg-red400"
      >
        <div
          onMouseEnter={()=>handleSetActiveTab(1, 1)}
          className="w-1/3 hover:bg-red-300"
        >
          {" "}
          {/* <TopLeft></TopLeft> */}
        </div>
        <div
          onMouseEnter={()=>handleSetActiveTab(1, 2)}
          className="w-1/3 hover:bg-red-300"
        >
          {" "}
          {children}
          {/* <TopMid></TopMid> */}
        </div>
        <div
          onMouseEnter={()=>handleSetActiveTab(1, 3)}
          className="w-1/3 hover:bg-red-300"
        >
          {/* <TopRight></TopRight> */}
        </div>
      </div>
      <div
        style={{ minHeight: "33.3%" }}
        className=" flex flex-row item-start justify-start bg-red400"
      >
        <div
          onMouseEnter={()=>handleSetActiveTab(2, 1)}
          className="w-1/3 hover:bg-red-300"
        >
          {/* <MidLeft></MidLeft> */}
        </div>
        <div
          onMouseEnter={()=>handleSetActiveTab(2, 2)}
          className="w-1/3 hover:bg-red-300"
        >
          <Branding></Branding>
          {/* {activeTab.r} | {activeTab.c} */}
        </div>
        <div
          onMouseEnter={()=>handleSetActiveTab(2, 3)}
          className="w-1/3 hover:bg-red-300"
        >
          {/* <MidRight></MidRight> */}
        </div>{" "}
        {/* Your content */}
      </div>
      <div
        style={{ minHeight: "33.3%" }}
        className=" flex flex-row item-start justify-start bg-red400"
      >
        <div
          onMouseEnter={()=>handleSetActiveTab(3, 1)}
          className="w-1/3 hover:bg-red-300"
        >
          {/* <BottomLeft></BottomLeft> */}
        </div>
        <div
          onMouseEnter={()=>handleSetActiveTab(3, 2)}
          className="w-1/3 hover:bg-red-300"
        >
          {/* <BottomCenter></BottomCenter> */}
        </div>
        <div
          onMouseEnter={()=>handleSetActiveTab(3, 3)}
          className="w-1/3 hover:bg-red-300"
        >
          <BottomRight></BottomRight>
        </div>
      </div>
    </div>
  );
}
