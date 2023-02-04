import { HStack } from "@chakra-ui/react";
import Answer from "./Answer";
import Calc from "./Calc";

function App() {
  return (
    <div>
      <HStack>
        <Calc />
        <Answer />
      </HStack>
    </div>
  );
}

export default App;
