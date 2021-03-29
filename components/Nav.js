import NextLink from 'next/link'
import { Flex, Link } from '@chakra-ui/react'

const Nav = ({ onClose }) => {
  return (
    <Flex direction="column">
      <NextLink href="/">
        <Link onClick={onClose}>Home</Link>
      </NextLink>
      <NextLink href="/secure-random-password-generator">
        <Link onClick={onClose}>Secure Random Password Generator</Link>
      </NextLink>
    </Flex>
  )
}

export default Nav
