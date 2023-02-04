import React, { useState, useRef } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const Numpad = () => {
  const [input, setInput] = useState("");
  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <>
      <input
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
        onChange={onChangeInput}
      />
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layout={{
          default: ["1 2 3", "4 5 6", "7 8 9", ". 0 {bksp}"],
        }}
        display={{
          "{bksp}": "x",
        }}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </>
  );
};

export default Numpad;
