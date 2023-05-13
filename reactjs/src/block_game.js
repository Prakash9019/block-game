import React, { useState } from "react";

const BlockGame = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const movePlayer = (direction) => {
    const step = 10;
    const { x, y } = position;

    switch (direction) {
      case "up":
        setPosition({ x, y: y - step });
        break;
      case "down":
        setPosition({ x, y: y + step });
        break;
      case "left":
        setPosition({ x: x - step, y });
        break;
      case "right":
        setPosition({ x: x + step, y });
        break;
      default:
        break;
    }
  };

  return (
    <div>
        {/* const gameContainer = document.getElementById("game-container");
    const player = document.getElementById("player");

    // Set initial position
    let x = 0;
    let y = 0;
    const containerWidth = gameContainer.offsetWidth;
    const containerHeight = gameContainer.offsetHeight;

    // Update player position
    function updatePosition() {
      player.style.left = x + "px";
      player.style.top = y + "px";
    } */}

   

     

      <button id="up-btn" onClick={() => movePlayer("up")}>Up</button>
      <div id="same">
      <button id="left-btn" onClick={() => movePlayer("left")}>Left</button>
      <div id="game-container">
      <div
        style={{
          position: "relative",
          width: "400px",
          height: "400px",
          border: "1px solid #000",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: position.y + "px",
            left: position.x + "px",
            width: "40px",
            height: "40px",
            backgroundColor: "red",
          }}
        />
      </div>
    </div>
      <button id="right-btn" onClick={() => movePlayer("right")}>Right</button>
      </div>
      <button id="down-btn" onClick={() => movePlayer("down")}>Down</button>



    </div>
  );
};

export default BlockGame;
