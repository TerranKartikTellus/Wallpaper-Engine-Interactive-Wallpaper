import React, { useEffect } from "react";
import "./branding.css";

function Branding() {
  useEffect(() => {
    const background = document.querySelector(".background");

    document.addEventListener("mousemove", function (e) {
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      const translateX = mouseX * 50;
      const translateY = mouseY * 50;

      background.style.transform = `translate(${translateX}px, ${translateY}px) `;
    });
  }, []);

  return (
    <div
      className="w-full  bgred-400 flex flex-col items-center justify-center"
    >
    
      <div className=" text-center flex flex-col items-center justify-center min-h-full  ">
        <div className="hover:scale-50 duration-300 ease-in-out">
          <img
            className={`background  mx-auto  ease-in-out `}
            style={{ width: "200px" }}
            src={"./images/logoB.svg"}
            alt="Logo"
          />
        </div>
        <div className="text">Terran Kartik Tellus</div>
      </div>
    </div>
  );
}

export default Branding;
