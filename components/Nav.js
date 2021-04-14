import NextLink from 'next/link'
import { Flex, Link, Text } from '@chakra-ui/react'

const links = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Password Generator',
    href: '/secure-random-password-generator',
  },
  {
    title: 'Word Count',
    href: '/word-count',
  },
]

const generateLink = onClose => ({ href, title }) => (
  <NextLink href={href}>
    <Link marginY="1rem" padding="1rem" onClick={onClose}>
      <Text fontSize="3xl">{title}</Text>
    </Link>
  </NextLink>
)

const Nav = ({ onClose }) => {
  return (
    <Flex direction="column" align="center">
      {links.map(link => generateLink(onClose)(link))}
    </Flex>
  )
}

export default Nav
