import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function ColorChanger() {
  const { toggleColorMode } = useColorMode()
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
    />
  )
}
