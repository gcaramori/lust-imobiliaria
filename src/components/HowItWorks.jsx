import React from "react";
import { Box, Flex, Text, Heading, Image, Container, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Footer from './includes/Footer';

const HowItWorks = () => {
  return (
    <Container id="howItWorks" h='100vh' maxW='90%'>
      <Box id="mainSection" h={{ base: 'auto', xl: '100%' }} w='100%'>
          <Flex flexDir={{ base: 'column', xl: 'row' }} justifyContent='space-between' alignItems='flex-start' h='80%' w='100%' mb={{ base: 20, '2xl': 0 }}>
            <Box w={{ base: '100%', xl: '49%', '2xl': '52%' }} h='100%'>
              <Box as={motion.div} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition='.6s linear' h='100%'>
                <Image src='/assets/house6.jpg' alt="casa6" w='100%' h='100%' objectFit={{ lg: 'cover' }} />
              </Box>
            </Box>
            <Box w={{ base: '100%', xl: '45%', '2xl': '42%' }} h='100%' mt={{ base: 10, '2xl': 0 }}>
              <Box as={motion.div} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition='.6s linear'>
                <Heading as='h1' textAlign='right' fontSize={{ base: 50, md: 60 }} color='#fff' fontWeight='600' mb={8}>COMO FUNCIONA?</Heading>
                <Text fontSize={{ base: 14, lg: 16, md: 20 }} textAlign='justify' color='#fff'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
                <Button as='a' w='100%' mx='auto' bg='gray.50' mt={{ base: 6, md: 12 }} py={8} borderRadius={0} boxShadow='lg' _hover={{ bg: 'gray.200' }} cursor='pointer'>
                  <Text fontSize={{ base: 12, md: 'lg' }} color='#000'>AGENDE UMA VISITA</Text>
                </Button>
              </Box>
            </Box>
          </Flex>
      </Box>

      <Footer />
    </Container>
  )
}
  
export default HowItWorks;