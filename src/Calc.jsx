import { Progress, VStack, HStack, Heading } from "@chakra-ui/react";
import React from "react";
import Canvas from "./components/calc/Canvas";

const Calc = () => {
  return (
    <VStack m={1}>
      <HStack>
        <Progress colorScheme="twitter" w={440} value={10} />
        <Heading size="md">1/10</Heading>
      </HStack>
      <Canvas />
    </VStack>
  );
};

export default Calc;
