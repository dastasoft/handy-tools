import { Box, Flex, Text, Heading, Textarea } from '@chakra-ui/react'

import useWordCount from '@/hooks/useWordCount'

const WordCount = () => {
  const {
    text,
    characterCount,
    wordCount,
    sentenceCount,
    paragraphCount,
    handleTextChange,
  } = useWordCount()

  return (
    <Flex direction="column">
      <Heading>Word Count</Heading>
      <Flex>
        <Box>
          <Text>{characterCount}</Text>
          <Text>characters</Text>
        </Box>
        <Box>
          <Text>{wordCount}</Text>
          <Text>words</Text>
        </Box>
        <Box>
          <Text>{sentenceCount}</Text>
          <Text>sentences</Text>
        </Box>
        <Box>
          <Text>{paragraphCount}</Text>
          <Text>paragraphs</Text>
        </Box>
      </Flex>
      <Textarea
        placeholder="Write here your text"
        value={text}
        onChange={e => handleTextChange(e.target.value)}
      />
    </Flex>
  )
}

export default WordCount
