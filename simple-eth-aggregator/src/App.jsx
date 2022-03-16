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
const [crv_price, set_crv_price] = useState(null);
const [sushiEth_price, set_sushiEth_price] = useState(null);

//all hardcoded to eth. fetch price data from top 3 off chain pi's
useEffect(async() =>{
const fetchData = async() => {
  //ftx
  const ftx_response = await fetch("https://ftx.us/api/markets/eth/usd");
  const ftx_json = await ftx_response.json();
  set_ftx_price(parseFloat(ftx_json.result.price).toFixed(2));

  //coinbase
  const cb_response = await fetch("https://api.coinbase.com/v2/prices/ETH-USD/spot");
     const cb_json = await cb_response.json();
     set_cb_price(parseFloat(cb_json.data.amount).toFixed(2));

  //binance

  const binance_response = await fetch("https://api.binance.us/api/v3/ticker/price?symbol=ETHUSD");
  const binance_json = await binance_response.json();
  set_binance_price(parseFloat(binance_json.price).toFixed(2));

  //curve (off chain..)
  const crv_resp = await fetch("https://api.curve.fi/api/getETHprice");
  const crv_resp_json = await crv_resp.json();
  set_crv_price(parseFloat(crv_resp_json.data.price).toFixed(2));
  //set_crv_price(crv_resp_json.data.price);

  //uni thegraph protocol





  //********** */

  //sushi Eth/USDC pool
  const sushi_rsp = await fetch("https://api2.sushipro.io/?chainID=1&action=get_pair&pair=0x397FF1542f962076d0BFE58eA045FfA2d347ACa0");
  const sushi_rsp_json = await sushi_rsp.json();

  set_sushiEth_price(sushi_rsp_json);
  //set_sushiEth_price(parseFloat(sushi_rsp_json).toFixed(2));
 
}//Token_1_price)

fetchData();

});

// [{"Token_1_contract":"0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
// "Token_1_symbol":"WBTC","Token_1_name":"Wrapped BTC","Token_1_reserve":1306.85155681,
// "Token_1_price":0.06679835677541675,"Token_1_decimals":8,
// "Token_1_derivedETH":14.970428140352425,
// "Token_2_contract":"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
// "Token_2_symbol":"WETH","Token_2_name":"Wrapped Ether",
// "Token_2_reserve":19564.127321331798,"Token_2_price":14.970428140352425,
// "Token_2_decimals":18,"Token_2_derivedETH":1}]

//https://api2.sushipro.io/?chainID=1&action=get_pair&pair=0xceff51756c56ceffca006cd410b03ffc46dd3a58

//ethusddcd sushi 0x397FF1542f962076d0BFE58eA045FfA2d347ACa0

//have seperate useeffect for on chain, any diff at all? prolly not since all http get requests.

console.log("sushi: " + JSON.stringify(sushiEth_price));
//console.log("sushi: " + sushiEth_price);
//would need to make this a map if i needed to know what price where.
//not assuming 0=ftx, 1=binance, etc.
//map ot something
const off_chain_prices = [parseFloat(ftx_price).toFixed(2), parseFloat(cb_price).toFixed(2), parseFloat(binance_price)];
const on_chain_prices = [1,2,crv_price];

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
   isOffChain={true}
   src_array={["FTX","Coinbase", "Binance"]}
   >
    
            </PriceInfo>


{/* I WANT THESE TO BE SIDE BY SIDE */}
            <PriceInfo 
  price_array={on_chain_prices}
  isOffChain={false}
  src_array={["Uniswap","Sushi", "Curve"]}
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
