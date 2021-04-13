import { Flex, Text } from '@chakra-ui/react'

export default function WordCounters({ value, caption }) {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      padding="1rem"
      backgroundColor="white"
    >
      <Text fontSize="3xl" fontWeight="bold">
        {value}
      </Text>
      <Text>{caption}</Text>
    </Flex>
  )
}
