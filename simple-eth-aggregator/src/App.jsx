import logo from './logo.svg';
import { Button,Flex, Container,Box, ChakraProvider, Center,Text} from "@chakra-ui/react"
import './App.css';
import {Header,PriceInfo, Footer,PriceAggregator} from "./components"
import {useState , useEffect} from "react"
import axios from 'axios';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

const DAI_QUERY = gql
`query tokens($tokenAddress: Bytes!) {
  tokens(where: { id: $tokenAddress }) {
    derivedETH
    totalLiquidity
  }
}`;

const ETH_PRICE_QUERY = gql
`query ethPrice {
  bundle(id: "1") {
    ethPrice
  }
}`;
 

 //create appollo client for The Graph queries
 export const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2",
  }),
  cache: new InMemoryCache(),
});




function App() {

//aggregate off chain prices(eth hardcode).
const [ftx_price, set_ftx_price] = useState(null);
const [cb_price, set_cb_price] = useState(null);
const [binance_price, set_binance_price] = useState(null);
const [crv_price, set_crv_price] = useState(null);
const [sushiEth_price, set_sushiEth_price] = useState(null);

//all hardcoded to eth. fetch price data from top 3 off chain pi's
//could do no await to make them see what happens?
useEffect(async() =>{
const fetchData = async() => {


  //********** */

  //sushi Eth/USDC pool
  const sushi_rsp = await fetch("https://api2.sushipro.io/?chainID=1&action=get_pair&pair=0x397FF1542f962076d0BFE58eA045FfA2d347ACa0");
  const sushi_rsp_json = await sushi_rsp.json();

  set_sushiEth_price(JSON.stringify(sushi_rsp_json[0].Token_1_price));
  //console.log(JSON.stringify(sushi_rsp_json));
  //console.log(JSON.stringify(sushi_rsp_json[0].Token_1_price));
 

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

}
fetchData();

});


//seperate hook for uniswap graph query.
//have to get usd price of dai to divide and find exact usd price of eth.
const { loading, error, data: ethPriceData } = useQuery(ETH_PRICE_QUERY);
const {
  loading: daiLoading,
  error: daiError,
  data: daiData,
} = useQuery(DAI_QUERY, {
  variables: {
    tokenAddress: "0x6b175474e89094c44da98b954eedeac495271d0f",
  },
});

const daiPriceInEth = daiData && daiData.tokens[0].derivedETH;
const daiTotalLiquidity = daiData && daiData.tokens[0].totalLiquidity;
const ethPriceInUSD = ethPriceData && ethPriceData.bundle.ethPrice;



const off_chain_prices = [parseFloat(ftx_price).toFixed(2), parseFloat(cb_price).toFixed(2), parseFloat(binance_price)];
const on_chain_prices = [parseFloat(ethPriceInUSD).toFixed(2),parseFloat(sushiEth_price).toFixed(2),crv_price];

  return (
    
    <ChakraProvider className="App">
   
      <Header className="App-header" />
      <Text className="Sub-Header"  bg="#FFEBCD" fontSize='25px' align="center"> 
        Price Aggregator
        </Text>
      <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={200}
      bg="#FFEBCD"
      color="black"
      className="App"
     
      >

     <PriceAggregator
            off_chain_prices={off_chain_prices}
            on_chain_prices={on_chain_prices}
            src_arrays= {[["FTX", "Coinbase", "Binance"], ["Uniswap", "Sushi", "Curve"]]}
            price_arrays={[off_chain_prices, on_chain_prices]}
      />
 

   {/* <PriceInfo 
  price_array={off_chain_prices}
   isOffChain={true}
   src_array={["FTX","Coinbase", "Binance"]}
   >
    
            </PriceInfo>



            <PriceInfo 
  price_array={on_chain_prices}
  isOffChain={false}
  src_array={["Uniswap","Sushi", "Curve"]}
   >
    
            </PriceInfo>  */}


      </Flex>
 
<Footer > </Footer>

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
