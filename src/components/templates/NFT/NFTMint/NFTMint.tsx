import { Container, Stack, Box, Text, Flex, Heading, useColorModeValue as mode } from '@chakra-ui/react';
import { FC, useEffect } from 'react';

const NFTMint= () => {
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
                   Mint your NFT
                  </Heading>
                  
        </Flex>
      </Box>
  );
};

export default NFTMint;