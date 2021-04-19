import { Link, Heading, Image, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function SectionItem({ img, title, link }) {
  return (
    <Link as={NextLink} href={link}>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
        padding="1em"
        borderRadius="8px"
        border="1px solid white"
        width="100%"
        height="100%"
        shadow="xl"
      >
        <Image src={img} alt={title} />
        <Heading fontSize="2xl" fontWeight="bold">
          {title}
        </Heading>
      </Flex>
    </Link>
  )
}
