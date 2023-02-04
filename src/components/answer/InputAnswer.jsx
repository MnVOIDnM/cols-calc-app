import { Heading, HStack, Input } from "@chakra-ui/react";
import React from "react";

const InputAnswer = () => {
  return (
    <HStack>
      <Heading>答え</Heading>
      <Input type="number" size="lg" />
    </HStack>
  );
};

export default InputAnswer;
