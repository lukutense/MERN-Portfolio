import React from "react";
import {
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Image
  } from '@chakra-ui/react'


  const CustomModal = ({ showModalButtonText, modalHeader, modalBody }) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

        return (
        <>
            <Button 
                colorScheme='green' 
                size="xs" 
                onClick={onOpen} 
                fontWeight='medium' 
                bgGradient='linear-gradient(90deg, #8b4ef0 0%, #31a7f7 100%)' 
                _hover='none' 
                _active='none'>
                {showModalButtonText}
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader fontWeight='medium'>{modalHeader}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Image src={modalBody} />
                </ModalBody>
    
                <ModalFooter>
                <Button 
                    variant="solid" 
                    mr={3} 
                    onClick={onClose} 
                    bgGradient='linear-gradient(90deg, #8b4ef0 0%, #31a7f7 100%)' 
                    color='white' 
                    fontWeight='medium' 
                    _hover='none' 
                    _active='none'>
                    Cancel
                </Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
        );
  };

  export default CustomModal