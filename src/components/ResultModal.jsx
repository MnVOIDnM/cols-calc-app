import React, { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";
import { CounterContext } from "../Contexts";

const ResultModal = ({ disclosure, setIsStarted }) => {
  const { isOpen, onClose } = disclosure;
  const { setCount } = useContext(CounterContext);

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button
            m={3}
            size="lg"
            colorScheme="twitter"
            onClick={() => {
              onClose();
              setIsStarted((prev) => !prev);
              setCount(0);
            }}
          >
            さいしょにもどる
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ResultModal;
