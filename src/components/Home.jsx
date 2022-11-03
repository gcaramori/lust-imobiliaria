import React, { useState, Suspense } from "react";
import { Box, Flex, Text, Heading, Image, Divider, Container, Button, HStack, Spinner, Tooltip, Input } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const testimonials = [
  {
    id: 'amy',
    image: '/assets/amy.png',
    text: "Eu adquiri uma propriedade recentemente, o residencial Edinburgh é maravilhoso! Meus filhos amam!",
    size: 24,
    top: 0,
    right: 'unset',
    left: 0
  },
  {
    id: 'andrea',
    image: '/assets/andrea.png',
    text: "O que eu mais gosto no residencial Edinburgh é a segurança e a tranquilidade. Sem falar da localização que também é muito boa!",
    size: 20,
    top: 52,
    right: 'unset',
    left: 20
  },
  {
    id: 'emily',
    image: '/assets/emily.png',
    text: "Eu nunca morei num lugar como esse. É simplesmente maravilhoso!",
    size: 40,
    top: 96,
    right: 'unset',
    left: 1
  },
  {
    id: 'lawrence',
    image: '/assets/lawrence.png',
    text: "Quando eu pensei em adquirir uma propriedade no residencial Edinburgh eu estava em dúvida, mas os corretores da Lust me mostraram diversos motivos para adquiri-lo. Qualidade do atendimento é impecável!",
    size: 20,
    top: 0,
    left: 'unset',
    right: 1
  },
  {
    id: 'leticia',
    image: '/assets/leticia.png',
    text: "Estou amando morar no residencial Edinburgh!",
    size: 24,
    top: 52,
    left: 'unset',
    right: 20
  },
  {
    id: 'matt',
    image: '/assets/matt.png',
    text: "Se eu pudesse traria toda a minha família para morar aqui, é maravilhoso!",
    size: 32,
    top: 96,
    left: 'unset',
    right: 1
  },
  {
    id: 'sonya',
    image: '/assets/sonya.jpg',
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.",
    size: 20,
    top: 0,
    left: 'unset',
    right: 0
  }
];

const Home = () => {
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(6);
  const [activeTestimonial, setActiveTestimonial] = useState('sonya');

  const prevSlide = () => {
    
  }

  const handleTestimonial = (element) => {
    const prevTestimonialIndex = testimonials.findIndex((testimonial => testimonial.id === activeTestimonial));
    const nextTestimonial = testimonials.find(testimonial => testimonial.id === element.target.parentNode.getAttribute('data-id'));
    
    testimonials[prevTestimonialIndex].top = nextTestimonial.top;
    testimonials[prevTestimonialIndex].left = nextTestimonial.left;
    testimonials[prevTestimonialIndex].right = nextTestimonial.right;
    
    setActiveTestimonialIndex(testimonials.findIndex(testimonial => testimonial.id === element.target.parentNode.getAttribute('data-id')));
    setActiveTestimonial(element.target.parentNode.getAttribute('data-id'));
  }

  return (
    <Container id="home" h='100vh' maxW='90%'>
      <Box id="introSection" h='100vh' w='100%'>
        <Flex h='100%' w='100%' justifyContent='space-between' alignItems='flex-start' position='relative'>
          <Box w='45%'>
            <Box as={motion.div} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition='.6s linear'>
              <Text textAlign='left' color='#fff' fontSize={20} mb={4}>SE PERMITA TER</Text>
              <Heading as='h1' fontSize={60} color='#fff' fontWeight='600' mb={8}>
                A CASA DOS SONHOS
              </Heading>
              <Text color='#fff' fontSize={16}>
                O Residencial Edinburgh é um novo complexo de casas de luxo localizado no Soho, um dos melhores bairros de Nova York.
              </Text>
            </Box>
            <Box as={motion.div} initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition='.6s linear'>
              <HStack spacing={20} w='100%' h={{ '2xl': '280px' }} mt={24} align='flex-start'>
                <Box>
                  <Text color='#fff' textAlign='left' fontSize={26}>
                    180 VAN CORTLANDT <span style={{ display: 'block' }}>PARK S, SOHO,</span> NY 10463
                  </Text>
                  <Button as='a' w='95%' mx='auto' bg='gray.50' mt={8} borderRadius={0} boxShadow='lg' _hover={{ bg: 'gray.200' }} cursor='pointer'>
                    <Text fontSize='md' color='#000'>AGENDE UMA VISITA</Text>
                  </Button>
                </Box>
                <Divider orientation='vertical' mx={20} bg='#fff' />
                <Box>
                  <Heading color='#fff' as='h4' textAlign='justify' fontSize={75} wordBreak='break-word' maxW={{ '2xl': '300px' }}>
                    R$ 1.500.000,000
                  </Heading>
                </Box>
              </HStack>
            </Box>
          </Box>

          <Flex as={motion.div} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition='.6s linear' h='80%' w='55%' justifyContent='center' align-items='center' position='relative'>
            <Box bg='#000' h='100%' w={{ '2xl': 10 }} position='absolute' top={0} right={10} zIndex='9'/>
            <Suspense fallback={<Spinner />}> 
              <Image src='/assets/house1.webp' alt="house1" display='block' h='100%' w='auto' transform='translateX(100px)' objectFit='cover' />
            </Suspense>
          </Flex>
        </Flex>
      </Box>

      <Box id="reputationSection" h='100%' w='100%'>
        <Flex w='100%' h='100%'>
          <Box as={motion.div} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition='1s linear' w='40%' mr={28}>
            <Suspense fallback={<Spinner />}> 
              <Image src='/assets/house2.webp' alt="house2" display='block' h={{ '2xl': '700px' }} w='auto' objectFit='cover' />
            </Suspense>
          </Box>
          <Box w='60%' as={motion.div} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition='1s linear'>
            <Heading as='h4' textAlign='left' fontSize={70} color='#fff' mb={8}>Nossa reputação é tão real quanto as nossas propriedades.</Heading>
            <Text fontSize={20} color='#fff'>
              Nós somos agentes imobiliários profissionais, você perceberá o serviço premium que nós oferecemos e que nossos clientes ja experienciaram.
            </Text>
            <Button as='a' w='250px' py={8} bg='gray.50' mt={8} borderRadius={0} boxShadow='lg' _hover={{ bg: 'gray.200' }} cursor='pointer'>
              <Text fontSize='md' color='#000'>AGENDE UMA VISITA</Text>
            </Button>
            <Flex justifyContent='space-between' alignItems='center' gap={10} mt={14} color='#fff'>
              <Box>
                <Heading as='h4' fontSize={60} fontWeight='800'>900+</Heading>
                <Text fontSize={30}>Clientes satisfeitos</Text>
              </Box>
              <Box>
                <Heading as='h4' fontSize={60} fontWeight='600'>10+</Heading>
                <Text fontSize={30}>Anos de experiência</Text>
              </Box>
              <Box>
                <Heading as='h4' fontSize={60} fontWeight='600'>300+</Heading>
                <Text fontSize={30}>Parceiros</Text>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      <Box id="housesSection" h='100%' w='100%' mb={{ '2xl': 32 }}>
        <Box as={motion.div} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition='1s linear'>
          <Flex justifyContent='space-between' alignItems='center'>
            <Heading as='h4' textAlign='left' fontSize={70} color='#fff' mb={8}>Propriedades populares agora</Heading>
            <Flex gap={4}>
              <Button py={8} px={6} borderRadius='10px' bg='transparent' border='1px solid #fff' color='#fff' _hover={{ bg: 'transparent' }} onClick={prevSlide}>
                <IoIosArrowBack />
              </Button>
              <Button py={8} px={6} borderRadius='10px' bg='#fff' color='#000'>
                <IoIosArrowForward />
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Box h='100%' w='100%' as={motion.div} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition='1s linear'>
          <Flex w='100%' h='100%' justifyContent='space-evenly' alignItems='flex-start' gap={6} py={5}>
            <Box position='relative' h='85%' w='50%'>
              <Suspense fallback={<Spinner />}> 
                <Image src='/assets/house3.webp' h='100%' w='100%' alt='house3' objectFit='cover' />
              </Suspense>
              <Box w={{ '2xl': '70%' }} h={{ '2xl': '100px' }} p={4} bg='#fff' position='absolute' bottom={6} left='0' right='0' mx='auto' borderRadius='15px' boxShadow='lg'>
                <Text fontSize={20} fontWeight='700' color='#000'>Macdowell's House</Text>
                <Flex w='100%' justifyContent='space-between' alignItems='flex-end'>
                  <Text fontSize={16} fontWeight='500' color='gray.500'>2312, Parker Rid, New York</Text>
                  <Text fontSize={14} p={2} bg='#000' borderRadius='10px' color='#fff'>$ 9000</Text>
                </Flex>
              </Box>
            </Box>
            <Flex flexDir='column' justifyContent='center' alignItems='center' h='85%' w='50%' gap={6}>
              <Box position='relative' h='48%' w='100%'>
                <Suspense fallback={<Spinner />}> 
                  <Image src='/assets/house4.webp' h='100%' w='100%' alt='house4' objectFit='cover' />
                </Suspense>
                <Box w={{ '2xl': '70%' }} h={{ '2xl': '100px' }} p={4} bg='#fff' position='absolute' bottom={6} left='0' right='0' mx='auto' borderRadius='15px' boxShadow='lg'>
                  <Text fontSize={20} fontWeight='700' color='#000'>Thompson's House</Text>
                  <Flex w='100%' justifyContent='space-between' alignItems='flex-end'>
                    <Text fontSize={16} fontWeight='500' color='gray.500'>2312, Parker Rid, New York</Text>
                    <Text fontSize={14} p={2} bg='#000' borderRadius='10px' color='#fff'>$ 9000</Text>
                  </Flex>
                </Box>
              </Box>
              <Box position='relative' h='48%' w='100%'>
                <Suspense fallback={<Spinner />}> 
                  <Image src='/assets/house5.webp' h='100%' w='100%' alt='house5' objectFit='cover' />
                </Suspense>
                <Box w={{ '2xl': '70%' }} h={{ '2xl': '100px' }} p={4} bg='#fff' position='absolute' bottom={6} left='0' right='0' mx='auto' borderRadius='15px' boxShadow='lg'>
                  <Text fontSize={20} fontWeight='700' color='#000'>Johnson's House</Text>
                  <Flex w='100%' justifyContent='space-between' alignItems='flex-end'>
                    <Text fontSize={16} fontWeight='500' color='gray.500'>2312, Parker Rid, New York</Text>
                    <Text fontSize={14} p={2} bg='#000' borderRadius='10px' color='#fff'>$ 9000</Text>
                  </Flex>
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>

      <Box id="testimonialSection" h='100%' w='100%'>
        <Box as={motion.div} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition='1s linear'>
          <Heading as='h4' textAlign='center' fontSize={70} color='#fff' mb={14}>O que nossos clientes dizem</Heading>
        </Box>
        <Box as={motion.div} w='100%' h={{ '2xl': '60%' }} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition='1s linear'>
          <Container id="testimonials" display='flex' justifyContent='center' alignItems='space-between' h='100%' maxW={{ '2xl': '70%' }} position='relative'>
              {
                  testimonials.map((testimonial, index) => {
                      return (testimonial.id !== activeTestimonial) ? <Box key={index} data-id={testimonial.id} position='absolute' top={testimonial.top} left={testimonial.left} right={testimonial.right} h={testimonial.size} w={testimonial.size} borderRadius='100%' overflow='hidden' cursor='pointer' onClick={handleTestimonial}>
                        <Tooltip label='Clique para ver a avaliação' placement='top' bg='gray.50' color='gray.900'>
                          <Image h='100%' w='100%' src={testimonial.image} alt={testimonial.id} objectFit='contain' />
                        </Tooltip>
                      </Box> : ''
                  })
              }
              <Box className='activeTestimonial' position='absolute' insetY={0} insetX={0} m='auto' h={{ '2xl': '600px' }} maxW={{ '2xl': '800px' }}>
                <Flex w='100%' h='100%' flexDir='column' justifyContent='center' alignItems='center'>
                  <Box data-id={testimonials[activeTestimonialIndex].id} position='relative' h={{ '2xl': 52 }} w={{ '2xl': 52 }} overflow='hidden' borderRadius='100%' mb={3}>
                    <Image h='100%' w='100%' src={testimonials[activeTestimonialIndex].image} alt='Sonya' objectFit='contain' objectPosition='bottom' />
                  </Box>
                  <Text fontSize={18} textTransform='capitalize' color='#fff' mb={8} textAlign='center'>
                    {testimonials[activeTestimonialIndex].id}
                  </Text>
                  <Text fontSize={20} color='#fff' maxW='80%' textAlign='center'>
                    {testimonials[activeTestimonialIndex].text}
                  </Text>
                </Flex>
              </Box>  
          </Container>
        </Box>
      </Box>

      <Box id="contactSection" h='100%' w='100%'>
        <Flex justifyContent='space-between' alignItems='flex-start' mb={12}>
          <Heading w='40%' as='h4' textAlign='left' fontSize={60} color='#fff' mb={14}>Interessado em alguma propriedade?</Heading>
          <Text w='40%' fontSize={20} color='gray.300' textAlign='left'>Preencha o formulário para agendar uma visita ao residencial Edinburgh. Caso você tenha alguma dúvida, não hesite em nos enviar uma mensagem!</Text>
        </Flex>
        <Flex id="contactForm" justifyContent='space-between' alignItens='flex-start'>
          <Box w='40%'>
            <Input h={14} borderRadius='0' bg='#fff' placeholder="Digite seu nome completo" fontSize={20} mb={10} />
            <Input h={14} borderRadius='0' bg='#fff' placeholder="Digite seu apelido" fontSize={20} mb={10} />
            <Input h={14} borderRadius='0' bg='#fff' placeholder="Digite seu telefone celular" fontSize={20} />
          </Box>
          <Box w='40%'>
            <Input h={14} borderRadius='0' bg='#fff' placeholder="Digite seu email" fontSize={20} mb={10} />
            <Input h={14} borderRadius='0' bg='#fff' placeholder="Digite seu gênero" fontSize={20} mb={10} />
            <Input h={14} borderRadius='0' bg='#fff' placeholder="Digite sua data de nascimento" fontSize={20} />
          </Box>
        </Flex>
      </Box>
    </Container>
  )
}
  
export default Home;