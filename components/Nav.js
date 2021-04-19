import NextLink from 'next/link'
import { Flex, Link, Text } from '@chakra-ui/react'

import { links } from '@/lib/constants'

const generateLink = onClose => ({ href, title }) => (
  <NextLink href={href}>
    <Link marginY="1rem" padding="1rem" onClick={onClose}>
      <Text fontSize={['2xl', '3xl']} fontWeight="bold">
        {title}
      </Text>
    </Link>
  </NextLink>
)

const Nav = ({ onClose }) => {
  return (
    <Flex direction="column" alignItems="center">
      {links.map(link => generateLink(onClose)(link))}
    </Flex>
  )
}

export default Nav
