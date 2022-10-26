import React from "react";
import { Flex, Text, Link } from '@chakra-ui/react';

const Home = () => {
    return (
      <Flex id="navbar" justifyContent='center' align-items='space-around' w='100%' overflowX='hidden'>
        <Link href="#" fontSize={30} mr={10}>
          <Text fontWeight='500'>Lust</Text>
        </Link>

        
      </Flex>
    )
  }
  
  export default Home;