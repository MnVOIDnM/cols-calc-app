import { Button } from "@chakra-ui/react";
import React from "react";

const StartButton = ({ setIsStarted }) => {
  return (
    <Button onClick={() => setIsStarted((prev) => !prev)}>スタート</Button>
  );
};

export default StartButton;
