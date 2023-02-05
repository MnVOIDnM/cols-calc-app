import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import React from "react";

const StartButton = ({ setIsStarted }) => {
  return (
    <Box
      w={500}
      h={500}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack>
        <Heading>2けたをかける筆算</Heading>
        <Button
          colorScheme="twitter"
          onClick={() => setIsStarted((prev) => !prev)}
        >
          スタート
        </Button>
      </VStack>
    </Box>
  );
};

export default StartButton;
