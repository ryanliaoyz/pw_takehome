import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navi from './navigation';
import Intro from './intro';
import Data from './data';
import Contact from './contact';

function App() {
  let path
  switch (window.location.pathname) {
    case "/":
      path = <Intro />
      break
    case "/data":
      path = <Data />
      break
    case "/contact":
      path = <Contact />
      break
  }
  return (
    <ChakraProvider>
      <Navi />
      <div >
        {path}
      </div>
      
    </ChakraProvider>
  );

}

export default App;
