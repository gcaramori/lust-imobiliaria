import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Box } from '@chakra-ui/react';
import Navbar from './components/Navbar';
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
    <Box id="mainContainer" py={30} px={40} h='100%' w='100%' overflowX='hidden'>
      <Navbar />
      <RouterProvider router={router} />
    </Box>
  )
}

export default App;