import React, { useState, useRef } from "react";
import { Heading, Input } from "@chakra-ui/react";
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
    if (button === "{deleteAll}") {
      keyboard.current.clearInput();
    }
  };

  const onChangeInput = (e) => {
    const input = e.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  return (
    <>
      <Heading>答え</Heading>
      <Input
        className="inputAnswer"
        value={input}
        onChange={onChangeInput}
        isReadOnly={true}
      />
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layout={{
          default: ["{deleteAll} {bksp}", "1 2 3", "4 5 6", "7 8 9", ". 0"],
        }}
        display={{
          "{bksp}": "一つ消す",
          "{deleteAll}": "全て消す",
        }}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </>
  );
};

export default Numpad;
