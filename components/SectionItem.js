import { Link, Heading, Image, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function SectionItem({ img, title, link, onClick }) {
  return (
    <NextLink href={link}>
      <Link onClick={onClick}>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          padding="1em"
          borderRadius="8px"
          border="1px solid whiteAlpha.900"
          width="100%"
          height="100%"
          shadow="xl"
          cursor="pointer"
        >
          {img && <Image src={img} alt={title} />}
          <Heading fontSize="2xl" fontWeight="bold" textAlign="center">
            {title}
          </Heading>
        </Flex>
      </Link>
    </NextLink>
  )
}
