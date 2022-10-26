import React from "react";
import { Box } from '@chakra-ui/react';
import Navbar from './Navbar';

const Home = () => {
    return (
      <Box id="home" py={30} px={40} h='100%' w='100%' overflowX='hidden'>
        <Navbar />
      </Box>
    )
  }
  
  export default Home;