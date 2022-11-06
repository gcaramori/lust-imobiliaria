import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Box } from '@chakra-ui/react';
import Navbar from './components/includes/Navbar';
import Footer from './components/includes/Footer';
import Home from './components/Home';
import Map from './components/Map';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/map",
    element: <Map />,
  }
]);

const App = () => {
  return (
    <Box id="mainContainer" h='100%' w='100%' overflowX='hidden'>
      <Navbar />  
      <Box h='100%' w='100%' pt={10}>
        <RouterProvider router={router} />
      </Box>
    </Box>
  )
}

export default App;