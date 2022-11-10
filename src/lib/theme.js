import { extendTheme } from '@chakra-ui/react'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const config = {
  fonts: {
    heading: `'Amiri', 'sans-serif'`,
    body: `'Poppins', 'sans-serif'`
  },
  components: {
    Steps,
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