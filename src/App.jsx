import React from 'react';
import { Box } from '@chakra-ui/react';
import Home from './components/Home';

const App = () => {
  return (
    <Box id="mainContainer" h='100%' w='100%' overflowX='hidden'>
      <Home />
    </Box>
  )
}

export default App;