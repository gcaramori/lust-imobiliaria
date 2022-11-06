import React from "react";
import { Box, Flex, Text, Link } from '@chakra-ui/react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
      <Box as='footer' position='relative' w='100%' h='auto' pb={12}>
        <Flex w='100%' justifyContent='space-between' alignItems='flex-start'>
          <Box w='40%'>
            <Text as='h3' fontSize={24} fontWeight='600' mb={10} color='#fff'>Lust</Text>
            <Box>
              <Text fontSize={14} color='gray.300' mb={6}>+392030303</Text>
              <Text fontSize={14} color='gray.300' mb={6}>
                109 BROOK ST, SCARSDALE NY 10583-5137
              </Text>
              <Text fontSize={14} color='gray.300'>
                contato@lustimobiliaria.com
              </Text>
            </Box>
            <Flex id="social" alignItems='center' mt={10}>
              <Link href="#" mr={6}>
                <BsFacebook size='2em' />
              </Link>
              <Link href="#" mr={6}>
                <BsInstagram size='2em' />
              </Link>
              <Link href="#">
                <BsTwitter size='2em' />
              </Link>
            </Flex>
          </Box>
          <Flex w='60%' justifyContent='space-between'>
            <Box w='auto' maxW={{ '2xl': '300px' }}>
              <Text fontSize={20} mb={10}>
                Links úteis
              </Text>
              <Flex flexDir='column'>
                <Link href='#' color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Tipos de propriedade</Link>
                <Link href='#' color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Propriedades recém construídas</Link>
                <Link href='#' color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Comprar propriedade</Link>
                <Link href='#' color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Vender propriedade</Link>
                <Link href='#' color='gray.300' _hover={{ textDecor: 'unset' }}>Melhores agentes</Link>
              </Flex>
            </Box>
            <Box w='auto' maxW={{ '2xl': '300px' }}>
              <Text fontSize={20} mb={10}>
                Comunidade
              </Text>
              <Flex flexDir='column'>
                <Link href='#' color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Eventos</Link>
                <Link href='#' color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Blogs</Link>
                <Link href='#' color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Fórum</Link>
              </Flex>
            </Box>
            <Box w='auto' maxW={{ '2xl': '300px' }}>
              <Text fontSize={20} mb={10}>
                Sobre nós
              </Text>
              <Flex flexDir='column'>
                <Link href='#' color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Nossa história</Link>
                <Link href='#' color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>Parcerias</Link>
                <Link href='#' color='gray.300' mb={6} _hover={{ textDecor: 'unset' }}>FAQ</Link>
              </Flex>
            </Box>
          </Flex>
        </Flex> 
      </Box>
    )
  }
  
  export default Footer;