import SignatureCanvas from "react-signature-canvas";
import { useRef, useCallback, useState } from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import "../../index.css";

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
          けす
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
      <Text
        pos="absolute"
        zIndex={1}
        userSelect={"none"}
        top="12%"
        left="15%"
        fontSize="110px"
        fontFamily="mono"
        lineHeight="90%"
        width="280px"
        height="210px"
        textAlign="right"
        borderBottom="5px solid"
      >
        {`765\n×983`}
      </Text>
    </>
  );
};

export default Canvas;
