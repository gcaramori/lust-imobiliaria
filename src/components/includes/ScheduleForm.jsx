import React from 'react';
import { 
    Flex, 
    Box, 
    Input,
    Text,
    Button,
    FormLabel,
    FormControl,
    FormErrorMessage,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

const ScheduleForm = ({ handleCloseModal }) => {
    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting }
    } = useForm();
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    function onSubmit(values) { 
        return new Promise((resolve) => {
          setTimeout(() => {
            onOpen();
            resolve();
          }, 1000);
        });
    }

    const handleClosingAll = () => {
        onClose();
        handleCloseModal(true);
    }

    return (
        <>
            <form style={{ width: '90%' }} onSubmit={handleSubmit(onSubmit)}>
                <Flex id="scheduleForm" h='225px' flexDir={{ base: 'column', md: 'row' }} justifyContent='space-between' alignItems='flex-start'>
                    <Box w='100%'>
                        <FormControl isInvalid={errors.name} mb={6}>
                            <FormLabel fontSize={13} htmlFor='name'>Nome</FormLabel>
                            <Input
                                id='name'
                                placeholder='Digite seu nome'
                                _placeholder={{ color: 'gray.500' }}
                                h={8} 
                                borderRadius='0' 
                                bg='#fff' 
                                color='gray.800' 
                                fontSize={13}
                                {...register('name', {
                                    required: 'Este campo é requerido!',
                                    minLength: { value: 4, message: 'Digite o nome corretamente, por favor.' }
                                })}
                            />
                            <FormErrorMessage fontSize={13}>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.email} mb={4}>
                            <FormLabel fontSize={13} htmlFor='email'>Email</FormLabel>
                            <Input
                                id='email'
                                placeholder='Digite seu email'
                                _placeholder={{ color: 'gray.500' }}
                                h={8} 
                                borderRadius='0' bg='#fff' 
                                color='gray.800' 
                                fontSize={13}
                                {...register('email', {
                                    required: 'Este campo é requerido!',
                                    minLength: { value: 4, message: 'Digite o email corretamente, por favor.' },
                                    pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Digite o email corretamente, por favor.' }
                                })}
                            />
                            <FormErrorMessage fontSize={13}>
                                {errors.email && errors.email.message}
                            </FormErrorMessage>
                        </FormControl>
                    </Box>
                </Flex>
                <Flex justifyContent='center' alignItems='center' w='100%'>
                    <Button type="submit" isLoading={isSubmitting} maxW='80px' h={8} fontSize='sm' bg='#000' color='#fff' _hover={{ bg: '#000', opacity: .8 }}>
                        Enviar
                    </Button>
                </Flex>
            </form>
            <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'xs', md: 'md' }}>
                <ModalOverlay />
                <ModalContent bg='#fff'>
                    <ModalHeader color='#000'>Pronto!</ModalHeader>
                    <ModalCloseButton color='#000' onClick={handleClosingAll} />
                    <ModalBody>
                        <Text fontSize={18} color='#000'>Te enviaremos um email com mais informações!</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='#fff' bg='#000' mr={3} onClick={handleClosingAll} _hover={{ color: '#fff', bg: '#000' }}>Ok</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ScheduleForm;