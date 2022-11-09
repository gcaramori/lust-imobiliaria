import { extendTheme } from '@chakra-ui/react'

const config = {
  fonts: {
    heading: `'Amiri', 'sans-serif'`,
    body: `'Poppins', 'sans-serif'`,
  },
  components: {
    Divider: {
      defaultProps: {
        colorScheme: 'white',
      }
    }
  },
  breakpoints: {
    sm: '26em'
  }
}

const theme = extendTheme(config);

export default theme;