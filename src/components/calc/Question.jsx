import { Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { QuestionContext } from "../../App";

const Question = () => {
  const { firstNum, secondNum } = useContext(QuestionContext);

  return (
    <Text
      pos="absolute"
      zIndex={1}
      userSelect={"none"}
      top="90px"
      left="180px"
      fontSize="110px"
      fontFamily="mono"
      lineHeight="90%"
      width="270px"
      height="210px"
      textAlign="right"
      borderBottom="5px solid"
      whiteSpace="pre-wrap"
    >
      {`${firstNum}\n× ${secondNum}`}
    </Text>
  );
};

export default Question;
