import logo from './logo.svg';
import { Button,Flex, Container,Box, ChakraProvider, Center,Text} from "@chakra-ui/react"
import './App.css';
import {Header} from "./components"

function App() {
  return (
    
    <ChakraProvider className="App">
   
      <Header className="App-header" />
      <Text className="Sub-Header" fontSize='25px' align="center">Hello </Text>
      <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={300}
      bg="#CCCC99"
      color="black"
      classname="App"
     
      >

          
        
      </Flex>


    </ChakraProvider>


    // <div className="App">
    //   <header className="App-header">
    //     
    //     <Container maxW='xl' centerContent>
    //       <Box padding='4' bg='gray.100' maxW='3xl'>
    //         There are many benefits to a joint design and development system. Not only
    //         does it bring benefits to the design team.
    //       </Box>
    //     </Container>       
    //   </header>
    // </div>
    // );
  );
}

export default App;
