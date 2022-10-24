import {
    Box,
    Button,
    Container,
    HStack,
    Heading,
    Img,
    Link,
    Stack,
    Text,
    Flex,
    Icon,
    SimpleGrid,
    useColorModeValue,
   useColorModeValue as mode,
 } 
 
  from '@chakra-ui/react'
  import * as React from 'react'
  import { HiPlay } from 'react-icons/hi'
  import { FaArrowRight } from 'react-icons/fa'
import CategoryCard from './CategoryCard'
import { categories } from './_data'

  
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
            borderRadius={30}
              w="full"
              pos="relative"
              zIndex="1"
              h={{ lg: '100%' }}
              objectFit="cover"
              src="https://www.virtual-graphics.ch/wp-content/uploads/2022/10/edDAPP_imageMAIN.jpg"
              alt="Screening talent"
            />
            <Box
             borderRadius={30}
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

      <Box
    maxW="7xl"
    mx="auto"
    px={{ base: '4', md: '8', lg: '12' }}
    py={{ base: '6', md: '8', lg: '12' }}
  >
    <Stack spacing={{ base: '6', md: '8', lg: '12' }}>
      <Flex
        justify="space-between"
        align={{ base: 'start', md: 'center' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Heading size="lg">Our great Games, Animation and Comics</Heading>
        <HStack spacing={{ base: '2', md: '3' }}>
          <Link
            fontSize={{ base: 'md', md: 'lg' }}
            fontWeight="bold"
            color={useColorModeValue('blue.500', 'blue.300')}
          >
            See all Projects
          </Link>
          <Icon
            as={FaArrowRight}
            color={useColorModeValue('blue.500', 'blue.300')}
            fontSize={{ base: 'sm', md: 'md' }}
          />
        </HStack>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={{ base: '8', lg: '16' }}>
        {categories.map((category) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </SimpleGrid>
    </Stack>
  </Box>
    </Box>

    

        );

};

export default Hero;