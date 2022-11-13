import React from 'react';
import { 
    Flex, 
    Box, 
    Input, 
    Button,
    Text,
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

const ContactForm = () => {
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
          }, 1500);
        });
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex id="contactForm" flexDir={{ base: 'column', md: 'row' }} justifyContent='space-between' alignItems='flex-start'>
                    <Box w={{ base: '100%', md: '45%', lg: '40%' }}>
                        <FormControl isInvalid={errors.name} mb={10}>
                            <Input
                                id='name'
                                placeholder='Digite seu nome'
                                _placeholder={{ color: 'gray.500' }}
                                h={14} 
                                borderRadius='0' bg='#fff' 
                                color='gray.800' 
                                fontSize={20}
                                {...register('name', {
                                    required: 'Este campo é requerido!',
                                    minLength: { value: 4, message: 'Digite o nome corretamente, por favor.' }
                                })}
                            />
                            <FormErrorMessage>
                                {errors.name && errors.name.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.nickname} mb={10}>
                            <Input
                                id='nickname'
                                placeholder='Digite seu apelido'
                                _placeholder={{ color: 'gray.500' }}
                                h={14} 
                                borderRadius='0' bg='#fff' 
                                color='gray.800'
                                fontSize={20}
                                {...register('nickname', {
                                    required: 'Este campo é requerido!'
                                })}
                            />
                            <FormErrorMessage>
                                {errors.nickname && errors.nickname.message}
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={errors.celphone} mb={10}>
                            <Input
                                id='celphone'
                                placeholder='Digite seu celular'
                                _placeholder={{ color: 'gray.500' }}
                                h={14} 
                                borderRadius='0' bg='#fff' 
                                color='gray.800' 
                                fontSize={20}
                                {...register('celphone', {
                                    required: 'Este campo é requerido!',
                                    minLength: { value: 8, message: 'Digite o celular corretamente, por favor.' }
                                })}
                            />
                            <FormErrorMessage>
                                {errors.celphone && errors.celphone.message}
                            </FormErrorMessage>
                        </FormControl>
                    </Box>
                    <Box w={{ base: '100%', md: '45%', lg: '40%' }}>
                        <FormControl isInvalid={errors.email} mb={10}>
                            <Input
                                id='email'
                                placeholder='Digite seu email'
                                _placeholder={{ color: 'gray.500' }}
                                h={14} 
                                borderRadius='0' bg='#fff' 
                                color='gray.800' 
                                fontSize={20}
                                {...register('email', {
                                    required: 'Este campo é requerido!',
                                    minLength: { value: 7, message: 'Digite o email corretamente, por favor.' },
                                    pattern: { value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, message: 'Digite o email corretamente, por favor.' }
                                })}
                            />
                            <FormErrorMessage>
                                {errors.email && errors.email.message}
                            </FormErrorMessage>
                        </FormControl>
                        <Input id="gender" h={14} borderRadius='0' bg='#fff' color='gray.800' _placeholder={{ color: 'gray.500' }} placeholder="Digite seu gênero" fontSize={20} mb={10} />
                        <FormControl isInvalid={errors.birth} mb={10}>
                            <Input
                                id='birth'
                                placeholder='Digite sua data de nascimento'
                                _placeholder={{ color: 'gray.500' }}
                                h={14}
                                borderRadius='0' 
                                bg='#fff' 
                                color='gray.800'
                                fontSize={20}
                                {...register('birth', {
                                    required: 'Este campo é requerido!',
                                    minLength: { value: 7, message: 'Digite a data de nascimento corretamente, por favor.' },
                                    pattern: { value: /^(\d{2})([-\/.]?)(\d{2})\2(\d{4})$/, message: 'Digite a data de nascimento corretamente, por favor.' }
                                })}
                            />
                            <FormErrorMessage>
                                {errors.birth && errors.birth.message}
                            </FormErrorMessage>
                        </FormControl>
                    </Box>
                </Flex>
                <Flex w='100%' justifyContent='center'>
                    <Button mt={{ base: 2, lg: 6 }} bg='#fff' color='gray.900' h={14} w={44} borderRadius={0} isLoading={isSubmitting} type='submit' _hover={{ bg: 'gray.200' }}>
                        ENVIAR
                    </Button>
                </Flex>
            </form> 
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent bg='#fff'>
                    <ModalHeader color='#000'>Pronto!</ModalHeader>
                    <ModalCloseButton color='#000' />
                    <ModalBody>
                        <Text fontSize={18} color='#000'>Te enviamos um email com instruções!</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button color='#fff' bg='#000' mr={3} onClick={onClose} _hover={{ color: '#fff', bg: '#000' }}>Ok</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ContactForm;