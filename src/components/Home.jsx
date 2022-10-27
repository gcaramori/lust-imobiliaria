import React from "react";
import { Box, Flex, Text, Heading, Image, Divider, Container, Button, HStack } from '@chakra-ui/react';

const Home = () => {
    return (
      <Container id="home" maxW='90%'>
        <Box id="introSection" h='100vh' w='100%'>
          <Flex h='100%' w='100%' justifyContent='space-between' alignItems='flex-start' position='relative'>
            <Box w='45%'>
              <Text textAlign='left' color='#fff' fontSize={20} mb={4}>SE PERMITA TER</Text>
              <Heading as='h1' fontSize={60} color='#fff' fontWeight='600' mb={8}>
                A CASA DOS SONHOS
              </Heading>
              <Text color='#fff' fontSize={14}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </Text>
              <HStack spacing={20} w='100%' h={{ '2xl': '350px' }} mt={24} align='flex-start'>
                <Box>
                  <Text color='#fff' textAlign='left' fontSize={26}>
                    180 VAN CORTLANDT <span style={{ display: 'block' }}>PARK S, THE BRONX,</span> NY 10463
                  </Text>
                  <Button as='a' w='95%' mx='auto' bg='gray.50' mt={8} borderRadius={0} boxShadow='lg' _hover={{ bg: 'gray.200' }} cursor='pointer'>
                    <Text fontSize='md' color='#000'>AGENDE UMA VISITA</Text>
                  </Button>
                </Box>
                <Divider orientation='vertical' mx={20}/>
                <Box>
                  <Heading color='#fff' as='h4' textAlign='justify' fontSize={90} wordBreak='break-word' maxW={{ '2xl': '300px' }}>
                    R$ 1.500.000,000
                  </Heading>
                </Box>
              </HStack>
            </Box>

            <Flex h='100%' w='55%' justifyContent='center' align-items='center' position='relative'>
              <Box bg='#000' h={{ '2xl': '650px' }} w={{ '2xl': 10 }} position='absolute' top={0} right={10} zIndex='999'/>
              <Image src='/houses/house1.jpg' alt="house1" display='block' h={{ '2xl': '650px' }} w='auto' position='absolute' top={0} right={{ '2xl': '-200px' }} objectFit='cover' />
            </Flex>
          </Flex>
        </Box>

        <Box id="reputationSection" h='auto' w='100%' mb={20}>
          <Flex w='100%' h='100%'>
            <Box w='40%' mr={28}>
              <Image src='/houses/house2.jpg' alt="house1" display='block' h={{ '2xl': '700px' }} w='auto' objectFit='cover' />
            </Box>
            <Box w='60%'>
              <Heading as='h4' textAlign='left' fontSize={70} color='#fff' mb={8}>Nossa reputação é tão real quanto as nossas propriedades.</Heading>
              <Text fontSize={20} color='#fff'>
                Nós somos agentes imobiliários profissionais, você perceberá o serviço premium que nós oferecemos e que nossos clientes ja experienciaram.
              </Text>
              <Button as='a' w='250px' py={8} bg='gray.50' mt={8} borderRadius={0} boxShadow='lg' _hover={{ bg: 'gray.200' }} cursor='pointer'>
                <Text fontSize='md' color='#000'>AGENDE UMA VISITA</Text>
              </Button>
            </Box>
          </Flex>
        </Box>
      </Container>
    )
  }
  
  export default Home;