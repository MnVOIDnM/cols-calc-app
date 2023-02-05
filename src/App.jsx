import { HStack } from "@chakra-ui/react";
import { createContext, useState } from "react";
import Calc from "./Calc";
import Numpad from "./components/answer/Numpad";
import { getRandom } from "./helper";
import StartButton from "./StartButton";

export const InputContext = createContext(null);
export const QuestionContext = createContext(null);
export const CounterContext = createContext(null);

function App() {
  const [input, setInput] = useState("");
  const [firstNum, setFirstNum] = useState(getRandom(2, 10));
  const [secondNum, setSecondNum] = useState(getRandom(10, 10));
  const [count, setCount] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  return (
    <InputContext.Provider value={{ input, setInput }}>
      <QuestionContext.Provider
        value={{ firstNum, setFirstNum, secondNum, setSecondNum }}
      >
        <CounterContext.Provider value={{ count, setCount }}>
          {isStarted ? (
            <>
              <HStack>
                <Calc />
                <Numpad />
              </HStack>
            </>
          ) : (
            <>
              <StartButton setIsStarted={setIsStarted} />
            </>
          )}
        </CounterContext.Provider>
      </QuestionContext.Provider>
    </InputContext.Provider>
  );
}

export default App;
