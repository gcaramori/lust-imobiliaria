import { extendTheme } from '@chakra-ui/react'

const config = {
  fonts: {
    heading: `'Amiri', 'sans-serif'`,
    body: `'Poppins', 'sans-serif'`,
  }
}

const theme = extendTheme(config);

export default theme;