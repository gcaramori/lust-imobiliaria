import React from "react";
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
      <Box as='footer' position='relative' w='100%' h='auto' pt={{ base: 8, lg: 0 }} pb={12}>
        <Flex w='100%' flexDir={{ base: 'column', md: 'row' }} justifyContent='space-between' alignItems='flex-start'>
          <Box w={{ base: '100%', md: '25%', xl: '40%' }}>
            <Text as='h3' fontSize={24} fontWeight='600' mb={10} color='#fff'>Lust</Text>
            <Box>
              <Text fontSize={{ base: 12, lg: 14 }} color='gray.300' mb={6}>+392030303</Text>
              <Text fontSize={{ base: 12, lg: 14 }} color='gray.300' mb={6}>
                109 BROOK ST, SCARSDALE NY 10583-5137
              </Text>
              <Text fontSize={{ base: 12, lg: 14 }} color='gray.300'>
                contato@lustimobiliaria.com
              </Text>
            </Box>
            <Flex id="social" alignItems='center' mt={10}>
              <Link href="#" mr={6} color='gray.300'>
                <BsFacebook size={ (window.innerWidth > 770) ? '2em' : '1.3em' } />
              </Link>
              <Link href="#" mr={6} color='gray.300'>
                <BsInstagram size={ (window.innerWidth > 770) ? '2em' : '1.3em' } />
              </Link>
              <Link href="#" color='gray.300'>
                <BsTwitter size={ (window.innerWidth > 770) ? '2em' : '1.3em' } />
              </Link>
            </Flex>
          </Box>
          <Flex w={{ base: '100%', md: '70%', xl: '60%' }} justifyContent='space-between'>
            <Box w='auto' maxW={{ base: '150px', lg: '300px' }}>
              <Text fontSize={{ base: 16, lg: 20 }} mb={10} color='#fff'>
                Links úteis
              </Text>
              <Flex flexDir='column'>
                <Link href='#' fontSize={{ base: 12, lg: 14, xl: 16 }} color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Tipos de propriedade</Link>
                <Link href='#' fontSize={{ base: 12, lg: 14, xl: 16 }} color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Propriedades recém construídas</Link>
                <Link href='#' fontSize={{ base: 12, lg: 14, xl: 16 }} color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Comprar propriedade</Link>
                <Link href='#' fontSize={{ base: 12, lg: 14, xl: 16 }} color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Vender propriedade</Link>
                <Link href='#' fontSize={{ base: 12, lg: 14, xl: 16 }} color='gray.300' _hover={{ textDecor: 'unset' }}>Melhores agentes</Link>
              </Flex>
            </Box>
            <Box w='auto' maxW={{ base: '150px', lg: '300px' }}>
              <Text fontSize={{ base: 16, lg: 20 }} mb={10} color='#fff'>
                Comunidade
              </Text>
              <Flex flexDir='column'>
                <Link href='#' fontSize={{ base: 12, lg: 14, xl: 16 }} color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Eventos</Link>
                <Link href='#' fontSize={{ base: 12, lg: 14, xl: 16 }} color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Blogs</Link>
                <Link href='#' fontSize={{ base: 12, lg: 14, xl: 16 }} color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Fórum</Link>
              </Flex>
            </Box>
            <Box w='auto' maxW={{ base: '150px', lg: '300px' }}>
              <Text fontSize={{ base: 16, lg: 20 }} mb={10} color='#fff'>
                Sobre nós
              </Text>
              <Flex flexDir='column'>
                <Link href='#' fontSize={{ base: 12, lg: 14, xl: 16 }} color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Nossa história</Link>
                <Link href='#' fontSize={{ base: 12, lg: 14, xl: 16 }} color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Parcerias</Link>
                <Link href='#' fontSize={{ base: 12, lg: 14, xl: 16 }} color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>FAQ</Link>
              </Flex>
            </Box>
          </Flex>
        </Flex> 
      </Box>
    )
  }
  
  export default Footer;