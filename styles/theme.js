import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
  fonts: {
    heading: 'Lato',
    body: 'Roboto',
  },
  styles: {
    global: props => ({
      'body, h2, p': {
        color: mode('gray.700', 'whiteAlpha.900')(props),
      },
    }),
  },
})

export default theme
