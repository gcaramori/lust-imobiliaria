import React from "react";
import { Flex, Box, Heading, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import GoogleMap from "./includes/GoogleMap";
import Footer from "./includes/Footer";

const Map = () => {
    return (
      <Container id="map" h='100vh' maxW='90%'>
        <Box id="mainSection" h='auto' w='100%' mb={{ base: 10, xl: 20 }}>
          <Box as={motion.div} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition='.6s linear'>
            <Heading as='h1' fontSize={{ base: 50, md: 60 }} color='#fff' fontWeight='600' mb={8}>MAPA</Heading>
          </Box>
          <Flex h='auto' w='100%' justifyContent='center' alignItems='center'>
            <GoogleMap />
          </Flex>
        </Box>
        
        <Footer />
      </Container>
    );
  }
  
  export default Map;