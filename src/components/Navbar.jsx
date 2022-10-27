import React from "react";
import { Container, Flex, Button, Text, Link } from '@chakra-ui/react';

const Home = () => {
    return (
      <Container id="navbar" maxW='90%' centerContent>
        <Flex justifyContent='space-between' alignItems='center' w='100%' overflowX='hidden' mb={10} py={4} position='sticky' top={0} left={0} bg='#000' zIndex='999' boxShadow='lg'>
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
              <Button id="scheduleVisit" bg='gray.50' borderRadius={0} py={8} ml={4} _hover={{ bg: ' gray.200' }}>
                <Text color="#000" fontSize={14}>AGENDE UMA VISITA</Text>
              </Button>
          </Flex>
        </Flex>
      </Container>
    )
  }
  
  export default Home;