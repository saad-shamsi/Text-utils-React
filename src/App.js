
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Uppercase from './components/Home';
import About from './components/About';
import Home from './components/Home'
  


function App() {
  return (
    <>
 <ChakraProvider>
 
 <Navbar/>
  <Uppercase title="Enter Text To Analyze"  />
 
 </ChakraProvider>
  
</>
  );
}

export default App;
