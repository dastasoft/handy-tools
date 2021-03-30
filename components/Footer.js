import { Flex, Link } from '@chakra-ui/react'

const Footer = ({ h }) => {
  return (
    <Flex justify="flex-end" align="center" paddingX="1rem" bg="black" h={h}>
      <Link href="https://dastasoft.com">dastasoft</Link>
    </Flex>
  )
}

export default Footer
