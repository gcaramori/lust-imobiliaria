import { extendTheme } from '@chakra-ui/react'

const config = {
  fonts: {
    heading: `'Roboto Slab', 'sans-serif'`,
    body: `'Poppins', 'sans-serif'`,
  }
}

const theme = extendTheme(config);

export default theme;