import { useState } from 'react'
import {
  Checkbox,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react'

const SecureRandomPasswordGenerator = () => {
  const [password, setPassword] = useState('')
  const [length, setLenght] = useState(128)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numerical, setNumerical] = useState(true)
  const [symbols, setSymbols] = useState(true)

  const onCopy = () => {
    navigator.clipboard.writeText(password)
  }

  const onRegenerate = () => {
    setPassword(Math.floor(Math.random(0, 100) * 100))
  }

  return (
    <Box>
      <Heading as="h2" size="lg" marginY="1rem">
        Secure Random Password Generator
      </Heading>
      <Box border="2px solid black" padding="1rem" borderRadius="5px">
        <Text
          fontSize="xl"
          minH="3.9rem"
          textAlign="center"
          bg="gray.300"
          borderRadius="5px"
          padding="1rem"
        >
          {password}
        </Text>
        <Flex justify="space-between" paddingY="1rem">
          <Button colorScheme="blue" onClick={onCopy}>
            Copy
          </Button>
          <Button colorScheme="teal" onClick={onRegenerate}>
            Regenerate
          </Button>
        </Flex>
        <Flex justify="space-between" paddingY="1rem" align="center">
          <Flex align="center">
            <Text fontSize="md" marginRight="0.5rem">
              Length
            </Text>
            <Text fontSize="sm">{length}</Text>
          </Flex>
          <Slider
            aria-label="slider-ex-1"
            min={5}
            max={128}
            step={1}
            defaultValue={length}
            value={length}
            onChange={value => setLenght(value)}
            maxW="8rem"
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb boxSize={5} bg="blue.500" />
          </Slider>
        </Flex>
        <Flex justify="space-between" paddingY="1rem">
          <Text fontSize="md">A-Z</Text>
          <Checkbox
            size="lg"
            value="uppercase"
            isChecked={uppercase}
            onChange={e => setUppercase(e.target.checked)}
          />
        </Flex>
        <Flex justify="space-between" paddingY="1rem">
          <Text fontSize="md">a-z</Text>
          <Checkbox
            size="lg"
            value="lowercase"
            isChecked={lowercase}
            onChange={e => setLowercase(e.target.checked)}
          />
        </Flex>
        <Flex justify="space-between" paddingY="1rem">
          <Text fontSize="md">0-9</Text>
          <Checkbox
            size="lg"
            value="numerical"
            isChecked={numerical}
            onChange={e => setNumerical(e.target.checked)}
          />
        </Flex>
        <Flex justify="space-between" paddingY="1rem">
          <Text fontSize="md">!@#$%^&*</Text>
          <Checkbox
            size="lg"
            value="symbols"
            isChecked={symbols}
            onChange={e => setSymbols(e.target.checked)}
          />
        </Flex>
      </Box>
    </Box>
  )
}

export default SecureRandomPasswordGenerator
