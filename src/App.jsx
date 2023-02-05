import { useState } from "react";
import { HStack, useDisclosure } from "@chakra-ui/react";
import Calc from "./components/Calc";
import StartButton from "./components/StartButton";
import Numpad from "./components/answer/Numpad";
import ResultModal from "./components/ResultModal";
import { CounterProvider, InputProvider, QuestionProvider } from "./Contexts";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <InputProvider>
      <QuestionProvider>
        <CounterProvider>
          {isStarted ? (
            <>
              <HStack>
                <Calc />
                <Numpad onOpen={onOpen} />
                {isOpen && (
                  <ResultModal
                    setIsStarted={setIsStarted}
                    disclosure={{ isOpen, onOpen, onClose }}
                  />
                )}
              </HStack>
            </>
          ) : (
            <>
              <StartButton setIsStarted={setIsStarted} />
            </>
          )}
        </CounterProvider>
      </QuestionProvider>
    </InputProvider>
  );
}

export default App;
