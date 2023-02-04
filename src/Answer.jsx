import { VStack } from "@chakra-ui/react";
import InputAnswer from "./components/answer/InputAnswer";
import Numpad from "./components/answer/Numpad";
import React from "react";

const Answer = () => {
  return (
    <VStack>
      <InputAnswer />
      <Numpad />
    </VStack>
  );
};

export default Answer;
