import { Hero } from 'components/templates/hero';
import { Showcase } from 'components/templates/showcase';
import { LogoGrid } from 'components/templates/logogrid';


import * as React from 'react'
import { Container, Stack, Box, Text, Flex, Heading, useColorModeValue as mode } from '@chakra-ui/react';

  
  const Home = () => {
    return (
     <div>
      <Hero />
<Box w="100%" > <Flex align="center" justify="center">
<Heading
              as="h1"
              size="xl"
              color={mode('blue.600', 'blue.300')}
              mt="8"
              fontWeight="extrabold"
              letterSpacing="tight"
            >
              CHECK OUT OUR PROJECTS BELOW:
            </Heading>
  </Flex>

      <Showcase />
      <LogoGrid />
      
      </Box>
     </div> 

)

};

export default Home;
