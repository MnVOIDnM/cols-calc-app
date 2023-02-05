import { createContext, useState } from "react";
import { getRandom } from "./helper";

export const CounterContext = createContext(null);
export const InputContext = createContext(null);
export const QuestionContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export const InputProvider = ({ children }) => {
  const [input, setInput] = useState("");

  return (
    <InputContext.Provider value={{ input, setInput }}>
      {children}
    </InputContext.Provider>
  );
};

export const QuestionProvider = ({ children }) => {
  const [firstNum, setFirstNum] = useState(getRandom(2, 10));
  const [secondNum, setSecondNum] = useState(getRandom(10, 10));

  return (
    <QuestionContext.Provider
      value={{ firstNum, setFirstNum, secondNum, setSecondNum }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
