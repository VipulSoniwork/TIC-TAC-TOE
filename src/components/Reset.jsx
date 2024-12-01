import React, { useState } from "react";
import GameState from "./GameState";

function Reset({ gameState, onReset }) {
  if (gameState === GameState.inProgress) {
    return null;
  }

  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state

  // Handle mouse movement over the button
  const handleMouseMove = (event) => {
    const button = event.target.getBoundingClientRect();
    const x = (event.clientX - button.left) / button.width; // Normalize X between 0 and 1
    const y = (event.clientY - button.top) / button.height; // Normalize Y between 0 and 1

    setMoveX(x);
    setMoveY(y);
  };

  // Handle mouse enter (hover) and mouse leave (un-hover)
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <button
      onClick={onReset}
      className="reset-button"
      style={{
        transform: isHovered
          ? `scale(1.05) perspective(500px) rotateX(${(moveY - 0.5) * 20}deg) rotateY(${(moveX - 0.5) * 20}deg)`
          : "scale(1) perspective(500px) rotateX(0deg) rotateY(0deg)", // Reset to original state when not hovered
        transition: "transform 0.2s ease-out", // Smooth transition back to the original state
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      PLAY AGAIN
    </button>
  );
}

export default Reset;
