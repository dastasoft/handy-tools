import { Box, Flex } from '@chakra-ui/react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Layout = ({ children }) => {
  return (
    <Flex color="white" direction="column" minH="100%">
      <Header h="4rem" />
      <Box
        color="black"
        flex="1"
        padding="1rem"
        margin="0 auto"
        width="100%"
        backgroundColor="linkedin.100"
      >
        {children}
      </Box>
      <Footer h="3rem" />
    </Flex>
  )
}

export default Layout
