import { Box, Button, useColorMode } from '@chakra-ui/react'

export default function ColorChanger() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
      </Button>
    </Box>
  )
}
