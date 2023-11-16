import React, { useState } from "react";

export default function Square(props) {
  const [isClicked, setIsClicked] = useState(false);


  const handleClick = () => {
    setIsClicked(!isClicked);
    if (props.onClick) {
      props.onClick();
    }
  };
  
  return (
    <button
      className={`square ${isClicked ? 'clicked' : ''}`}
      onClick={handleClick}
    >
    <span>{props.value}</span>

    </button>
  );
}
