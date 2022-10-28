import React from "react";
import { Box, Flex, Text, Heading, Image, Divider, Container, Button, HStack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Home = () => {
    return (
      <Container id="home" h='100vh' maxW='90%'>
        <Box id="introSection" h='100vh' w='100%'>
          <Flex h='100%' w='100%' justifyContent='space-between' alignItems='flex-start' position='relative'>
            <Box w='45%'>
              <Box as={motion.div} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition='.6s linear'>
                <Text textAlign='left' color='#fff' fontSize={20} mb={4}>SE PERMITA TER</Text>
                <Heading as='h1' fontSize={60} color='#fff' fontWeight='600' mb={8}>
                  A CASA DOS SONHOS
                </Heading>
                <Text color='#fff' fontSize={14}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </Text>
              </Box>
              <Box as={motion.div} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition='.6s linear'>
                <HStack spacing={20} w='100%' h={{ '2xl': '280px' }} mt={24} align='flex-start'>
                  <Box>
                    <Text color='#fff' textAlign='left' fontSize={26}>
                      180 VAN CORTLANDT <span style={{ display: 'block' }}>PARK S, THE BRONX,</span> NY 10463
                    </Text>
                    <Button as='a' w='95%' mx='auto' bg='gray.50' mt={8} borderRadius={0} boxShadow='lg' _hover={{ bg: 'gray.200' }} cursor='pointer'>
                      <Text fontSize='md' color='#000'>AGENDE UMA VISITA</Text>
                    </Button>
                  </Box>
                  <Divider orientation='vertical' mx={20} bg='#fff' />
                  <Box>
                    <Heading color='#fff' as='h4' textAlign='justify' fontSize={75} wordBreak='break-word' maxW={{ '2xl': '300px' }}>
                      R$ 1.500.000,000
                    </Heading>
                  </Box>
                </HStack>
              </Box>
            </Box>

            <Flex as={motion.div} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition='.6s linear' h='80%' w='55%' justifyContent='center' align-items='center' position='relative'>
              <Box bg='#000' h='100%' w={{ '2xl': 10 }} position='absolute' top={0} right={10} zIndex='9'/>
              <Image src='https://d3983jaouwt2wi.cloudfront.net/assets/house1.jpg' alt="house1" display='block' h='100%' w='auto' transform='translateX(100px)' objectFit='cover' />
            </Flex>
          </Flex>
        </Box>

        <Box id="reputationSection" h='100%' w='100%'>
          <Flex w='100%' h='100%'>
            <Box as={motion.div} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition='1s linear' w='40%' mr={28}>
              <Image src='https://d3983jaouwt2wi.cloudfront.net/assets/house2.jpg' alt="house2" display='block' h={{ '2xl': '700px' }} w='auto' objectFit='cover' />
            </Box>
            <Box w='60%' as={motion.div} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition='1s linear'>
              <Heading as='h4' textAlign='left' fontSize={70} color='#fff' mb={8}>Nossa reputação é tão real quanto as nossas propriedades.</Heading>
              <Text fontSize={20} color='#fff'>
                Nós somos agentes imobiliários profissionais, você perceberá o serviço premium que nós oferecemos e que nossos clientes ja experienciaram.
              </Text>
              <Button as='a' w='250px' py={8} bg='gray.50' mt={8} borderRadius={0} boxShadow='lg' _hover={{ bg: 'gray.200' }} cursor='pointer'>
                <Text fontSize='md' color='#000'>AGENDE UMA VISITA</Text>
              </Button>
              <Flex justifyContent='space-between' alignItems='center' gap={10} mt={14} color='#fff'>
                <Box>
                  <Heading as='h4' fontSize={60} fontWeight='800'>900+</Heading>
                  <Text fontSize={30}>Clientes satisfeitos</Text>
                </Box>
                <Box>
                  <Heading as='h4' fontSize={60} fontWeight='600'>10+</Heading>
                  <Text fontSize={30}>Anos de experiência</Text>
                </Box>
                <Box>
                  <Heading as='h4' fontSize={60} fontWeight='600'>300+</Heading>
                  <Text fontSize={30}>Parceiros</Text>
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>

        <Box id="housesSection" h='100%' w='100%'>
          <Flex justifyContent='space-between' alignItems='center'>
            <Heading as='h4' textAlign='left' fontSize={70} color='#fff' mb={8}>Propriedades populares agora</Heading>
            <Flex gap={4}>
              <Button py={8} px={6} borderRadius='10px' bg='transparent' border='1px solid #fff' color='#fff' _hover={{ bg: 'transparent' }}>
                <IoIosArrowBack />
              </Button>
              <Button py={8} px={6} borderRadius='10px' bg='#fff' color='#000'>
                <IoIosArrowForward />
              </Button>
            </Flex>
          </Flex>
          <Flex w='100%' h='100%' justifyContent='space-evenly' alignItems='flex-start' gap={10} py={5}>
            <Box position='relative' h='90%' w='50%'>
              <Image src='https://d3983jaouwt2wi.cloudfront.net/assets/house3.jpg' h='100%' w='100%' alt='house3' objectFit='cover' />
              <Box w={{ '2xl': '70%' }} h={{ '2xl': '120px' }} p={4} bg='#fff' position='absolute' bottom={6} left='0' right='0' mx='auto' borderRadius='15px' BoxShadow='lg'>
                <Text fontSize={20} fontWeight='700' color='#000' mb={3}>Macdowell's House</Text>
                <Flex w='100%' justifyContent='space-between' alignItems='flex-end'>
                  <Text fontSize={16} fontWeight='500' color='gray.500'>2312, Parker Rid, New York</Text>
                  <Text fontSize={14} p={2} bg='#000' borderRadius='10px' color='#fff'>$ 9000</Text>
                </Flex>
              </Box>
            </Box>
            <Flex flexDir='column' justifyContent='center' alignItems='center' h='90%' w='50%' gap={8}>
              <Box position='relative' h='48%' w='100%'>
                <Image src='https://d3983jaouwt2wi.cloudfront.net/assets/house4.jpg' h='100%' w='100%' alt='house4' objectFit='cover' />
                <Box w={{ '2xl': '70%' }} h={{ '2xl': '120px' }} p={4} bg='#fff' position='absolute' bottom={6} left='0' right='0' mx='auto' borderRadius='15px' BoxShadow='lg'>
                  <Text fontSize={20} fontWeight='700' color='#000' mb={3}>Macdowell's House</Text>
                  <Flex w='100%' justifyContent='space-between' alignItems='flex-end'>
                    <Text fontSize={16} fontWeight='500' color='gray.500'>2312, Parker Rid, New York</Text>
                    <Text fontSize={14} p={2} bg='#000' borderRadius='10px' color='#fff'>$ 9000</Text>
                  </Flex>
                </Box>
              </Box>
              <Box position='relative' h='48%' w='100%'>
                <Image src='https://d3983jaouwt2wi.cloudfront.net/assets/house5.jpg' h='100%' w='100%' alt='house5' objectFit='cover' />
                <Box w={{ '2xl': '70%' }} h={{ '2xl': '120px' }} p={4} bg='#fff' position='absolute' bottom={6} left='0' right='0' mx='auto' borderRadius='15px' BoxShadow='lg'>
                  <Text fontSize={20} fontWeight='700' color='#000' mb={3}>Macdowell's House</Text>
                  <Flex w='100%' justifyContent='space-between' alignItems='flex-end'>
                    <Text fontSize={16} fontWeight='500' color='gray.500'>2312, Parker Rid, New York</Text>
                    <Text fontSize={14} p={2} bg='#000' borderRadius='10px' color='#fff'>$ 9000</Text>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Container>
    )
  }
  
  export default Home;