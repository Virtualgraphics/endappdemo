import * as React from 'react'
import { Container, Stack, Box, Text, Flex, Heading, useColorModeValue as mode } from '@chakra-ui/react';
import { GalleryMain } from 'components/templates/gallery';
import { ContentGrid } from 'components/templates/contentgrid';


const Webtoons = () => {

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
                   Read the Webtoons and earn tokens
                  </Heading>
                 
        </Flex>
<Flex>

  <GalleryMain/>
</Flex>

        <Flex align="center" justify="center">
        <ContentGrid/>
        
        </Flex>
        <Flex align="center" justify="center">
        <ContentGrid/>
        
        </Flex>
      </Box>
    );
  };
  
  export default Webtoons;