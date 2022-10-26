import React from "react";
import { Box, Flex, Text, Heading, Image, Divider } from '@chakra-ui/react';

const Home = () => {
    return (
      <Box id="home" h='100%' w='100%' pt={44}>
        <Flex h='100%' w='100%' justifyContent='center' alignItems='flex-start' position='relative'>
          <Box w='40%'>
            <Text textAlign='left' color='#fff' fontSize={20} mb={4}>SE PERMITA</Text>
            <Heading as='h1' fontSize={50} color='#fff' mb={8}>
              A CASA DOS SONHOS
            </Heading>
            <Text color='#fff' fontSize={14}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </Text>
            <Flex w='100%' justifyContent='center' alignItems='center'>
              <Box>
                
              </Box>
              <Divider orientation='vertical' />
              <Box>

              </Box>
            </Flex>
          </Box>

          <Box w='60%' position='relative'>
            <Image src='/houses/house1.jpg' alt="house1" display='block' position='absolute' right='-250px' objectFit='cover' />
          </Box>
        </Flex>
      </Box>
    )
  }
  
  export default Home;