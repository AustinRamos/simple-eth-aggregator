import logo from './logo.svg';
import { Button,Flex, Container,Box, ChakraProvider, Center,Text} from "@chakra-ui/react"
import './App.css';
import {Header,PriceInfo} from "./components"
import {useState , useEffect} from "react"
import axios from 'axios';

function App() {


  const ftxApiKey = "ePC6V5kAbi65QAZGELS3b14SBHk36vNgkmTVhR3k";
 
  const ftx_secret_api = "_tYz_a2rK63VOqrBT7TUg4c2MGHXvjdF13rM6fZU";

const [ftx_price, set_ftx_price] = useState({});
// //will i need to authenticate accnt? 
// //GET https://ftx.us/api/markets/{market_name}/orderbook?depth={depth}
// useEffect(() => {
//   fetch("https://ftx.us/api/markets/ETH/USD/orderbook?depth=3")
//   .then(response =>
//     response.json())
//   .then(data => set_ftx_price(data.message))
// },[])

useEffect(async() =>{
  const ax = axios;
  ax.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
const result = await ax.get("https://ftx.us/api/markets",{ crossDomain: true });
console.log("ater async call")
set_ftx_price(result);
});

console.log("after useeffect ftx_price: " + ftx_price);

//console.log("OBJECT" + this.state.ftx_price);

  return (
    
    <ChakraProvider className="App">
   
      <Header className="App-header" />
        <Text className="Sub-Header"  bg="#CCCC99" fontSize='25px' align="center"> 
        Aggregator
        </Text>
      <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={320}
      bg="#CCCC99"
      color="black"
      className="App"
     
      >
   <PriceInfo>
            
            </PriceInfo>


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
