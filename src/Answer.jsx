import { VStack } from "@chakra-ui/react";
import Numpad from "./components/answer/Numpad";
import React from "react";

const Answer = () => {
  return (
    <VStack pr={3}>
      <Numpad />
    </VStack>
  );
};

export default Answer;
