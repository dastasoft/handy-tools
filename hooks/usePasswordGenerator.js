import { useState } from 'react'

const PATTERNS = {
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  numerical: /[0-9]/,
  symbols: /[!@#$%^&*]/,
}

export default function usePasswordGenerator() {
  const MIN_PASSWORD_LENGHT = 5
  const MAX_PASSWORD_LENGTH = 128
  const [password, setPassword] = useState('')
  const [length, setLenght] = useState(MAX_PASSWORD_LENGTH)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numerical, setNumerical] = useState(true)
  const [symbols, setSymbols] = useState(true)

  const checkPattern = value => {
    if (uppercase && PATTERNS.uppercase.test(value)) return true

    if (lowercase && PATTERNS.lowercase.test(value)) return true

    if (numerical && PATTERNS.numerical.test(value)) return true

    if (symbols && PATTERNS.symbols.test(value)) return true
  }

  const getRandomByte = () => {
    if (window.crypto?.getRandomValues) {
      const result = new Uint8Array(1)
      window.crypto.getRandomValues(result)
      return result[0]
    } else if (window.msCrypto?.getRandomValues) {
      const result = new Uint8Array(1)
      window.msCrypto.getRandomValues(result)
      return result[0]
    } else {
      return Math.floor(Math.random() * 256)
    }
  }

  const generatePassword = () => {
    if (uppercase || lowercase || numerical || symbols) {
      setPassword(
        Array.apply(null, { length: length })
          .map(() => {
            let result

            do {
              result = String.fromCharCode(getRandomByte())
            } while (!checkPattern(result))

            return result
          })
          .join('')
      )
    } else {
      setPassword('You must select at least one option')
    }
  }

  return {
    MIN_PASSWORD_LENGHT,
    MAX_PASSWORD_LENGTH,
    password,
    length,
    setLenght,
    uppercase,
    setUppercase,
    lowercase,
    setLowercase,
    numerical,
    setNumerical,
    symbols,
    setSymbols,
    generatePassword,
  }
}
