import React from "react";

function Card() {
  const handleInput = () => {
    console.log("hello");
  };

  return (
    <>
      <input
        type="text"
        onChange={handleInput}
        placeholder="Enter Your district"
        id="xyz"
        name="dist"
        // value={}
        className="g10"

      />
    </>
  );
}

export default Card;
