import { Box, ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'


const Footer = () => {

return (
  <Box bg="bg-accent" color="on-accent">
    <Container as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
      <Stack spacing={{ base: '4', md: '5' }}>
        <Stack justify="space-between" direction="row" align="center">
         
        </Stack>
        <Text fontSize="sm" color="on-accent-subtle">
          &copy; {new Date().getFullYear()} Chakra UI Pro, Inc. All rights reserved.
        </Text>
      </Stack>
    </Container>
  </Box>
)
  }

export default Footer;