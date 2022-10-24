import {
    Box,
    Button,
    Heading,
    Img,
    Link,
    Stack,
    Text,
   useColorModeValue as mode,
 } 
 
  from '@chakra-ui/react'
  import * as React from 'react'
  import { HiPlay } from 'react-icons/hi'
  
  const Hero = () => {
    return (

      <Box as="section" bg={mode('gray.50', 'gray.800')} margin={0} pt="30" pb="24">
      <Box maxW={{ base: 'xl', md: '7xl' }} mx="auto" px={{ base: '6', md: '8' }}>
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          spacing={{ base: '3rem', lg: '2rem' }}
          mt="8"
          align={{ lg: 'center' }}
          justify="space-between"
        >
          <Box flex="1" maxW={{ lg: '520px' }}>
            <Text
              size="xs"
              textTransform="uppercase"
              fontWeight="semibold"
              color={mode('blue.600', 'blue.300')}
              letterSpacing="wide"
            >
              enDAPP- Be Entertained and Earn
            </Text>
            <Heading
              as="h1"
              size="3xl"
              color={mode('blue.600', 'blue.300')}
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              Games, Animated Shows, Comics and NFTs, all in one Dapp
            </Heading>
            <Text color={mode('gray.600', 'gray.400')} mt="4" fontSize="lg" fontWeight="medium">
           enDapp is an app that includes games, cartoons, video and webtoons all in one blockchain-powered app. Every event, decision or action will be tokenized to create a fully immersive experience where the audience creates their own metaverse. 
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing="4" mt="8">
              <Button size="lg" minW="210px" colorScheme="blue" height="14" px="8">
                Connect Wallet
              </Button>
              <Button
                size="lg"
                bg="white"
                color="gray.900"
                _hover={{ bg: 'gray.50' }}
                height="14"
                px="8"
                shadow="base"
                leftIcon={<Box as={HiPlay} fontSize="2xl" />}
              >
                Watch Demo
              </Button>
            </Stack>
            <Text mt="8" color={mode('gray.600', 'gray.400')}>
              Already have an account store?{' '}
              <Link href="#" textDecoration="underline">
                Log in
              </Link>
            </Text>
          </Box>
          <Box pos="relative" w={{ base: 'full', lg: '560px' }} h={{ base: 'auto', lg: '560px' }}>
            <Img
              w="full"
              pos="relative"
              zIndex="1"
              h={{ lg: '100%' }}
              objectFit="cover"
              src="https://www.virtual-graphics.ch/wp-content/uploads/2022/10/edDAPP_imageMAIN.jpg"
              alt="Screening talent"
            />
            <Box
              pos="absolute"
              w="100%"
              h="100%"
              top="-4"
              left="-4"
              bg={mode('gray.200', 'gray.700')}
            />
          </Box>
        </Stack>
      </Box>
    </Box>

    

        );

};

export default Hero;