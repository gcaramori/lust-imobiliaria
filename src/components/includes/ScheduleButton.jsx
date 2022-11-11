import React from "react";
import { Button, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import Schedule from './Schedule';

const ScheduleButton = ({ buttonStyle }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const ButtonElement = ({ buttonStyle }) => {
        if(buttonStyle === 'headerButton') {
            return <Button onClick={handleSchedule} as='a' w='95%' mx='auto' bg='gray.50' color='#000' fontSize={{ base: 12, lg: 16 }} mt={{ base: 4, md: 8 }} borderRadius={0} boxShadow='lg' _hover={{ bg: 'gray.200' }} cursor='pointer'>AGENDE UMA VISITA</Button>
        }
        else if(buttonStyle === 'navButton') {
            return <Button onClick={handleSchedule} bg='gray.50' color='#000' borderRadius={0} py={8} ml={4} _hover={{ bg: ' gray.200' }}>AGENDE UMA VISITA</Button>
        } 
        else if(buttonStyle === 'priorityButton') {
            return <Button onClick={handleSchedule} as='a' w={{ base: '180px', xl: '250px' }} py={8} bg='gray.50' mt={8} borderRadius={0} boxShadow='lg' _hover={{ bg: 'gray.200' }} cursor='pointer'>
                <Text fontSize={{ base: 'sm', xl: 'md' }} color='#000'>AGENDE UMA VISITA</Text>
            </Button>
        }
    }

    const handleSchedule = () => {
        onOpen();
    }

    return (
        <>
            <ButtonElement buttonStyle={buttonStyle} />

            <Modal isOpen={isOpen} onClose={onClose} size='6xl'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Agendar uma visita</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Schedule />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ScheduleButton;