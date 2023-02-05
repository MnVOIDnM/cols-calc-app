import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

const touchHandler = (e) => {
  if (e.touches.length > 1) {
    e.preventDefault();
  }
};
document.addEventListener("touchstart", touchHandler, {
  passive: false,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
