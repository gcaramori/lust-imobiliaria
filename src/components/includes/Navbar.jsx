import React, { useState, useEffect } from "react";
import { Container, Box, Flex, Button, Text, Link, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import ScheduleButton from "./ScheduleButton";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 550) {
        setIsMobile(true);
    } else {
        setIsMobile(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  return (
    <Box position='sticky' top={0} left={0} bg='#000' zIndex='999' boxShadow='lg'>
      <Container id="navbar"  maxW='90%' centerContent>
        <Flex justifyContent='space-between' alignItems='center' w='100%' overflowX='hidden' py={2} bg='#000'>
          <Link href="/" fontSize={30} mr={10} _hover={{ textDecoration: "none" }}>
            <Text color="#fff" fontWeight='500'>Lust</Text>
          </Link>
          {
            (isMobile) ? 
              <Menu>
                <MenuButton as={Button} border='unset' bg='#000' color='#fff' _focus={{ bg: '#000', border: 'unset', boxShadow: 'unset' }} _active={{ bg: '#000', border: 'unset',  boxShadow: 'unset' }} >
                  <FaBars size='1.5em' />
                </MenuButton>
                <MenuList>
                  <MenuItem>
                    <Link href="/" fontSize={14} mr={10} _hover={{ textDecoration: "none" }}>
                      <Text color="#000" fontWeight='500'>HOME</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/como-funciona" fontSize={14} mr={10} _hover={{ textDecoration: "none" }}>
                      <Text color="#000" fontWeight='500'>COMO FUNCIONA</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/mapa" fontSize={14} mr={10} _hover={{ textDecoration: "none" }}>
                      <Text color="#000" fontWeight='500'>MAPA</Text>
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <ScheduleButton buttonStyle='navMobile' />
                  </MenuItem>
                </MenuList>
              </Menu>
            :
            <Flex id="navigationLinks" alignItems='center'>
              <Link href="/" fontSize={14} mr={10} _hover={{ textDecoration: "none" }}>
                <Text color="#fff" fontWeight='500'>HOME</Text>
              </Link>
              <Link href="/como-funciona" fontSize={14} mr={10} _hover={{ textDecoration: "none" }}>
                <Text color="#fff" fontWeight='500'>COMO FUNCIONA</Text>
              </Link>
              <Link href="/mapa" fontSize={14} mr={10} _hover={{ textDecoration: "none" }}>
                <Text color="#fff" fontWeight='500'>MAPA</Text>
              </Link>
              <ScheduleButton buttonStyle='navButton' />
            </Flex>
          }
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar;