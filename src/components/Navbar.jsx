import React from "react";
import { Flex, Button, Text, Link } from '@chakra-ui/react';

const Home = () => {
    return (
      <Flex id="navbar" justifyContent='space-between' alignItems='center' w='100%' overflowX='hidden' py={10} px={40} mb={20} position='fixed' top={0} left={0}>
        <Link href="/" fontSize={30} mr={10} _hover={{ textDecoration: "none" }}>
          <Text color="#fff" fontWeight='500'>Lust</Text>
        </Link>

        <Flex id="navigationLinks" alignItems='center'>
            <Link href="/" fontSize={14} mr={10} _hover={{ textDecoration: "none" }}>
              <Text color="#fff" fontWeight='500'>HOME</Text>
            </Link>
            <Link href="/como-funciona" fontSize={14} mr={10} _hover={{ textDecoration: "none" }}>
              <Text color="#fff" fontWeight='500'>COMO FUNCIONA</Text>
            </Link>
            <Link href="/map" fontSize={14} mr={10} _hover={{ textDecoration: "none" }}>
              <Text color="#fff" fontWeight='500'>MAPA</Text>
            </Link>
            <Button id="scheduleVisit" bg='gray.50' borderRadius={0} py={8} ml={4} _groupHover={{ opacity: '1' }} _hover={{ bg: '' }}>
              <Text color="#000" fontSize={14}>AGENDE UMA VISITA</Text>
            </Button>
        </Flex>
      </Flex>
    )
  }
  
  export default Home;