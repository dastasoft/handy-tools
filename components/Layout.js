import { Box, Flex, useColorModeValue } from '@chakra-ui/react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Layout = ({ children }) => {
  const bg = useColorModeValue('linkedin.100', 'gray.700')

  return (
    <Flex color="whiteAlpha.900" direction="column" minH="100%">
      <Header h="4rem" />
      <Box
        color="black"
        flex="1"
        padding="1rem"
        margin="0 auto"
        width="100%"
        bg={bg}
      >
        {children}
      </Box>
      <Footer h="3rem" />
    </Flex>
  )
}

export default Layout
