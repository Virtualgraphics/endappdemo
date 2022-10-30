import { FC, useEffect } from 'react';
import { Container, Stack, Box, Text, Flex, Heading, useColorModeValue as mode } from '@chakra-ui/react';

const Games = () => {
 
    return (
      <Box w="100%" > <Flex align="center" justify="center">
      <Heading
                    as="h1"
                    size="xl"
                    color={mode('blue.600', 'blue.300')}
                    mt="8"
                    fontWeight="extrabold"
                    letterSpacing="tight"
                  >
                   Immerse yourself in our games!
                  </Heading>
                  
        </Flex>
      </Box>
    );
  };
  
  export default Games;