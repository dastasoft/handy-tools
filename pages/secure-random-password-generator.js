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

import usePasswordGenerator from '@/hooks/usePasswordGenerator'

const SecureRandomPasswordGenerator = () => {
  const {
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
  } = usePasswordGenerator()

  const onCopy = () => {
    navigator.clipboard.writeText(password)
  }

  const onRegenerate = () => {
    generatePassword()
  }

  const onSlide = value => {
    if (value !== length) {
      setLenght(value)
      generatePassword()
    }
  }

  return (
    <Box
      bg="teal.100"
      padding="1rem 2rem"
      borderRadius="5px"
      maxW="30rem"
      margin="1rem auto"
    >
      <Heading as="h2" size="lg" marginY="1rem" align="center">
        Password Generator
      </Heading>
      <Box>
        <Text
          fontSize="xl"
          h="11rem"
          maxW="100%"
          textAlign="center"
          bg="white"
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
            Generate
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
            min={MIN_PASSWORD_LENGHT}
            max={MAX_PASSWORD_LENGTH}
            defaultValue={length}
            value={length}
            onChange={onSlide}
            onChangeEnd={onSlide}
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
