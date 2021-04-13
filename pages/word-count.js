import { SimpleGrid, Flex, Heading, Textarea } from '@chakra-ui/react'

import WordCounter from '@/components/WordCounters'
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
        backgroundColor="white"
        value={text}
        rows={9}
        shadow="lg"
        onChange={e => handleTextChange(e.target.value)}
      />
    </Flex>
  )
}

export default WordCount
