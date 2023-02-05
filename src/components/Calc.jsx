import React, { useContext } from "react";
import { Progress, VStack, HStack, Heading } from "@chakra-ui/react";
import { CounterContext } from "../Contexts";
import Canvas from "./calc/Canvas";

const Calc = () => {
  const { count } = useContext(CounterContext);
  return (
    <VStack m={1}>
      <HStack>
        <Progress colorScheme="twitter" w={440} value={count * 10} />
        <Heading size="md">{count}/10</Heading>
      </HStack>
      <Canvas />
    </VStack>
  );
};

export default Calc;
