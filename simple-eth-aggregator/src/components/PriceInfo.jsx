import { Button,Flex, Container,Box, 
    ChakraProvider, Spacer,Stack, Center,Text} from "@chakra-ui/react"
   // import {PriceRow} from './components/PriceRow'
   import  PriceRow from "./PriceRow";
    
    
    
    export default function PriceInfo(
        {
            ftx_price,
            cb_price,
            binance_price,
        }
       
    ){

        //TODO cut off after 3 decimals
        const avg_eth = ((parseFloat(ftx_price) + parseFloat(cb_price) + parseFloat(binance_price)) / 3.0).toFixed(2);
console.log( parseFloat(ftx_price) + parseFloat(cb_price));
        //will contain 2 PriceRow components
        //parent component to pricerow
    return(
    // <div> maybe for css later?
    <div>

        <Stack >
    <Box w='300px' h='400px' borderWidth='4px' borderRadius='lg' overflow='hidden'>
    
         <PriceRow ftx_price={ftx_price} 
         cb_price = {cb_price}
          binance_price = {binance_price}
          avg_eth_price={avg_eth}
          >
                
        </PriceRow>
    </Box>
    </Stack>
    </div>
    );
    }
    