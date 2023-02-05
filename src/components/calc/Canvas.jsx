import SignatureCanvas from "react-signature-canvas";
import { useRef, useCallback, useState } from "react";
import { Box, Button } from "@chakra-ui/react";
import "../../index.css";
import Question from "./Question";

const Canvas = () => {
  const padRef = useRef(null);
  const [canvas, setCanvas] = useState(undefined);

  const clearCanvas = useCallback(() => {
    padRef?.current?.clear();
    setCanvas(undefined);
  }, []);

  return (
    <>
      <Box h="80vh" zIndex={2}>
        <Button colorScheme="red" onClick={clearCanvas}>
          消す
        </Button>
        <SignatureCanvas
          ref={padRef}
          penColor="black"
          backgroundColor="rgba(0, 0, 0, 0.03)"
          maxWidth={2}
          minWidth={2}
          dotSize={4}
          canvasProps={{ className: "sigPad" }}
        />
      </Box>
      <Question />
    </>
  );
};

export default Canvas;
