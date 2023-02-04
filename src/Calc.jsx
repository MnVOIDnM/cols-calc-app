import { Progress, VStack } from "@chakra-ui/react";
import Canvas from "./components/calc/Canvas";
import React from "react";

const Calc = () => {
  return (
    <VStack>
      <Progress value={45} />
      <Canvas />
    </VStack>
  );
};

export default Calc;
