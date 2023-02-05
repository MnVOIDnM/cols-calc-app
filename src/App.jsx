import { HStack } from "@chakra-ui/react";
import Answer from "./Answer";
import Calc from "./Calc";

function App() {
  return (
    <HStack>
      <Calc />
      <Answer />
    </HStack>
  );
}

export default App;
