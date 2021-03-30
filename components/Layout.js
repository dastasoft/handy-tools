import { Box, Flex } from '@chakra-ui/react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Layout = ({ children }) => {
  return (
    <Flex color="white" direction="column" h="100%">
      <Header h="4rem" />
      <Box color="black" flex="1" padding="1rem 2rem" margin="0 auto">
        {children}
      </Box>
      <Footer h="3rem" />
    </Flex>
  )
}

export default Layout
