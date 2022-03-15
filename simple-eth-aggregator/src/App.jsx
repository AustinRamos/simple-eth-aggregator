import logo from './logo.svg';
import { Button,Flex, Container,Box, ChakraProvider, Center,Text} from "@chakra-ui/react"
import './App.css';
import {Header,PriceInfo} from "./components"
import {useState , useEffect} from "react"
import axios from 'axios';

function App() {


//aggregate off chain prices(eth hardcode).
const [ftx_price, set_ftx_price] = useState(null);
const [cb_price, set_cb_price] = useState(null);
const [binance_price, set_binance_price] = useState(null);


//all hardcoded to eth. fetch price data from top 3 off chain pi's
useEffect(async() =>{
const fetchData = async() => {
  //ftx
  const ftx_response = await fetch("https://ftx.us/api/markets/eth/usd");
  const ftx_json = await ftx_response.json();
  set_ftx_price(ftx_json.result.price);

  //coinbase
  const cb_response = await fetch("https://api.coinbase.com/v2/prices/ETH-USD/spot");
     const cb_json = await cb_response.json();
     set_cb_price(cb_json.data.amount);

  //binance

  const binance_response = await fetch("https://api.binance.us/api/v3/ticker/price?symbol=ETHUSD");
  const binance_json = await binance_response.json();
  set_binance_price(binance_json.price);

}
fetchData();
});

//would need to make this a map if i needed to know what price where.
//not assuming 0=ftx, 1=binance, etc.
//map ot something
const off_chain_prices = [ftx_price, cb_price, binance_price];


  return (
    
    <ChakraProvider className="App">
   
      <Header className="App-header" />
        <Text className="Sub-Header"  bg="#FFEBCD" fontSize='25px' align="center"> 
        Aggregator
        </Text>
      <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={320}
      bg="#FFEBCD"
      color="black"
      className="App"
     
      >

  <PriceInfo 
  price_array={off_chain_prices}
   type={"On Chain Data"}
   >
    
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
