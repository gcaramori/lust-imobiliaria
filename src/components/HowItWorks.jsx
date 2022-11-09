import React from "react";
import { Box, Flex, Text, Heading, Image, Container, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Footer from './includes/Footer';

const HowItWorks = () => {
  return (
    <Container id="howItWorks" h='100vh' maxW='90%'>
      <Box id="mainSection" h='auto' w='100%'>
        <Box as={motion.div} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition='.6s linear'>
            <Heading as='h1' fontSize={{ base: 50, md: 60 }} color='#fff' fontWeight='600' mb={8}>
                
            </Heading>
            <Text color='#fff' fontSize={16}>
            O Residencial Edinburgh é um novo complexo de casas de luxo localizado no Soho, um dos melhores bairros de Nova York.
            </Text>
        </Box>
      </Box>

      <Footer />
    </Container>
  )
}
  
export default HowItWorks;