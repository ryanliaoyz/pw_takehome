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
    case "/pw_takehome/":
      path = <Intro />
      break
    case "/pw_takehome/data":
      path = <Data />
      break
    case "/pw_takehome/contact":
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
