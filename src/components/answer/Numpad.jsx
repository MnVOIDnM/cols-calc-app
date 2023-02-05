import React, { useRef, useContext } from "react";
import { Heading, Input, VStack } from "@chakra-ui/react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { CounterContext, InputContext, QuestionContext } from "../../Contexts";
import { getRandom } from "../../helper";

const Numpad = ({ onOpen }) => {
  const { input, setInput } = useContext(InputContext);
  const { firstNum, setFirstNum, secondNum, setSecondNum } =
    useContext(QuestionContext);
  const { count, setCount } = useContext(CounterContext);
  const keyboard = useRef();

  const updateQuestion = () => {
    setCount((prev) => prev + 1);
    setFirstNum(() => getRandom(2, 200));
    setSecondNum(() => getRandom(10, 99));
    setInput("");
    keyboard.current.clearInput();
  };

  const onChange = (input) => {
    setInput(input);
    // console.log(input);
    if (input == firstNum * secondNum && count < 9) {
      updateQuestion();
    } else if (input == firstNum * secondNum && count == 9) {
      setCount((prev) => prev + 1);
      onOpen();
    }
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
    <VStack pt={1} h="90vh">
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
          shift: ["{deleteAll} {bksp}", "7 8 9", "4 5 6", "1 2 3", ". 0"],
        }}
        display={{
          "{bksp}": "一つ消す",
          "{deleteAll}": "全て消す",
        }}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </VStack>
  );
};

export default Numpad;
