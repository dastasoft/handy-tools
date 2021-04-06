import { useState } from 'react'

function countCharacters(text) {
  return text.length
}

function countWords(text) {
  return text.split(' ').length
}

function countSentences(text) {
  return text.split('.').length
}

function countParagraphs(text) {
  return text.split('.\n').length
}

export default function useWordCount() {
  const [text, setText] = useState('')
  const [characterCount, setCharacterCount] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  const [sentenceCount, setSentencetCount] = useState(0)
  const [paragraphCount, setPragraphCount] = useState(0)

  const handleTextChange = newValue => {
    if (newValue !== text) {
      setText(newValue)
      setCharacterCount(countCharacters(newValue))
      setWordCount(countWords(newValue))
      setSentencetCount(countSentences(newValue))
      setPragraphCount(countParagraphs(newValue))
    }
  }

  return {
    text,
    characterCount,
    wordCount,
    sentenceCount,
    paragraphCount,
    handleTextChange,
  }
}
