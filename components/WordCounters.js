import { Flex, Text, useColorModeValue } from '@chakra-ui/react'

export default function WordCounters({ value, caption }) {
  const bg = useColorModeValue('whiteAlpha.900', 'gray.800')

  return (
    <Flex flexDirection="column" alignItems="center" padding="1rem" bg={bg}>
      <Text fontSize="3xl" fontWeight="bold">
        {value}
      </Text>
      <Text>{caption}</Text>
    </Flex>
  )
}
