import React from "react";
import { Box, Flex, Text, Heading, Image, Divider, Container, Button } from '@chakra-ui/react';

const Home = () => {
    return (
      <Container id="home" maxW='90%'>
        <Box h='auto' w='100%'>
          <Flex h='100%' w='100%' justifyContent='space-between' alignItems='flex-start' position='relative'>
            <Box w='45%'>
              <Text textAlign='left' color='#fff' fontSize={20} mb={4}>SE PERMITA TER</Text>
              <Heading as='h1' fontSize={60} color='#fff' fontWeight='600' mb={8}>
                A CASA DOS SONHOS
              </Heading>
              <Text color='#fff' fontSize={14}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
              </Text>
              <Flex w='100%' mt={24} justifyContent='center' alignItems='flex-start'>
                <Box w='60%'>
                  <Text textAlign='left' fontSize={26}>
                    180 VAN CORTLANDT <Text>PARK S, THE BRONX,</Text> NY 10463
                  </Text>
                  <Button as='a' w='95%' mx='auto' bg='gray.50' mt={8} borderRadius={0} boxShadow='lg' _hover={{ bg: 'gray.200' }} cursor='pointer'>
                    <Text fontSize='md' color='#000'>AGENDE UMA VISITA</Text>
                  </Button>
                </Box>
                <Divider orientation='vertical' mx={10} />
                <Box width='50%'>
                  <Heading as='h5' textAlign='right' fontSize={90}>
                    R$ 1.500.000,000
                  </Heading>
                </Box>
              </Flex>
            </Box>

            <Flex h='100%' w='55%' justifyContent='center' align-items='center' position='relative'>
              <Image src='/houses/house1.jpg' alt="house1" display='block' h={{ '2xl': '650px' }} w='auto' position='absolute' top={0} right={{ '2xl': '-300px' }} objectFit='cover' />
            </Flex>
          </Flex>
        </Box>
      </Container>
    )
  }
  
  export default Home;