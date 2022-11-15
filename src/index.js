import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <ChakraProvider>
          {/* <ColorModeProvider> */}
          <App />
          {/* </ColorModeProvider> */}
     </ChakraProvider>


);

