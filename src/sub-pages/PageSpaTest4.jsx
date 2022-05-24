import { useState } from "react";
export const PageSpaTest4 = () => {
  const [topOfBox, setTopOfBox] = useState(400);
  const moveBoxUp = () => {
    if (topOfBox <= 0) {
      setTopOfBox(400);
    } else {
      setTopOfBox(topOfBox - 50);
    }
  };
  return (
    <div className="sub-page page-spaTest4">
      <h2>Move the Box!</h2>
      <button
        onClick={() => {
          moveBoxUp();
        }}
      >
        Move Up
      </button>
      <div className="orange-box" style={{ top: topOfBox + "px" }}></div>
    </div>
  );
};
