import { Box, Flex } from '@chakra-ui/react'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Layout = ({ children }) => {
  return (
    <Flex color="white" direction="column" h="100%">
      <Header h="4rem" />
      <Box color="black" flex="1">
        {children}
      </Box>
      <Footer h="2.5rem" />
    </Flex>
  )
}

export default Layout