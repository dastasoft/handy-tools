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

function getMostRepeatedWord(text) {
  const words = countRepeatedWords(text)

  return Object.keys(words)
    .map(word => ({ word, count: words[word] }))
    .filter(word => word.count > 1)
    .sort((a, b) => b.count - a.count)
}

function countRepeatedWords(text) {
  const words = text.split(' ')
  const repeatedWords = words.reduce((acc, curr) => {
    const re = new RegExp(curr, 'g')
    if (!acc[curr] && curr.match(/[a-zA-z]/)) acc[curr] = text.match(re).length
    return acc
  }, {})

  return repeatedWords
}

export default function useWordCount() {
  const [text, setText] = useState('')
  const [characterCount, setCharacterCount] = useState(0)
  const [wordCount, setWordCount] = useState(0)
  const [sentenceCount, setSentencetCount] = useState(0)
  const [paragraphCount, setPragraphCount] = useState(0)
  const [mostUsedWord, setMostUsedWord] = useState([])

  const handleTextChange = newValue => {
    if (newValue !== text) {
      setText(newValue)
      setCharacterCount(countCharacters(newValue))
      setWordCount(countWords(newValue))
      setSentencetCount(countSentences(newValue))
      setPragraphCount(countParagraphs(newValue))
      setMostUsedWord(getMostRepeatedWord(newValue))
    }
  }

  return {
    text,
    characterCount,
    wordCount,
    sentenceCount,
    paragraphCount,
    mostUsedWord,
    handleTextChange,
  }
}
