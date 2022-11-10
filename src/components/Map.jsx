import React from "react";
import { Box, Heading, Container } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Map = () => {
    return (
      <Container id="howItWorks" h='100vh' maxW='90%'>
        <Box id="mainSection" h='100%' w='100%'>
          <Box as={motion.div} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition='.6s linear'>
            <Heading as='h1' textAlign='right' fontSize={{ base: 50, md: 60 }} color='#fff' fontWeight='600' mb={8}>MAPA</Heading>
          </Box>
        </Box>
      </Container>
    )
  }
  
  export default Map;