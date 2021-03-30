import NextLink from 'next/link'
import { Flex, Link, Text } from '@chakra-ui/react'

const Nav = ({ onClose }) => {
  return (
    <Flex direction="column" align="center">
      <NextLink href="/">
        <Link marginY="1rem" padding="1rem" onClick={onClose}>
          <Text fontSize="3xl">Home</Text>
        </Link>
      </NextLink>
      <NextLink href="/secure-random-password-generator">
        <Link marginY="1rem" padding="1rem" onClick={onClose}>
          <Text fontSize="3xl">Password Generator</Text>
        </Link>
      </NextLink>
    </Flex>
  )
}

export default Nav
