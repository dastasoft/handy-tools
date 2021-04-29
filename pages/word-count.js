import {
  SimpleGrid,
  Flex,
  Text,
  Heading,
  Textarea,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'

import WordCounter from '@/components/WordCounters'
import useWordCount from '@/hooks/useWordCount'

const WordCount = () => {
  const {
    text,
    characterCount,
    wordCount,
    sentenceCount,
    paragraphCount,
    mostUsedWord,
    handleTextChange,
  } = useWordCount()

  const bg = useColorModeValue('whiteAlpha.900', 'gray.800')

  return (
    <Flex direction="column">
      <Heading>Word Count</Heading>
      <SimpleGrid
        width="100%"
        minChildWidth="7rem"
        gap={1}
        margin="1rem auto"
        borderRadius="3px"
        shadow="lg"
      >
        <WordCounter value={characterCount} caption="characters" />
        <WordCounter value={wordCount} caption="words" />
        <WordCounter value={sentenceCount} caption="sentences" />
        <WordCounter value={paragraphCount} caption="paragraphs" />
      </SimpleGrid>
      <Textarea
        placeholder="Write here your text"
        bg={bg}
        value={text}
        rows={9}
        shadow="lg"
        onChange={e => handleTextChange(e.target.value)}
      />
      <Box
        margin="1rem auto"
        padding="1rem"
        bg={bg}
        width="100%"
        shadow="lg"
        borderRadius="3px"
      >
        <Heading fontSize="1rem">Repeated Words</Heading>
        <Box marginTop="1rem">
          {mostUsedWord.map(({ count, word }) => (
            <Flex key={word}>
              <Text marginRight="0.5rem">{word}:</Text>
              <Text>{count}</Text>
            </Flex>
          ))}
        </Box>
      </Box>
    </Flex>
  )
}

export default WordCount
