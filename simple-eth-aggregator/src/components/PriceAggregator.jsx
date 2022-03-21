import React from "react";
import { Button,Flex, Container,Box, 
    ChakraProvider, Spacer,Stack, Center,Text} from "@chakra-ui/react"
import PriceInfo from "./PriceInfo";

// displays a page header

export default function PriceAggregator(
    {
        
        off_chain_prices,
        on_chain_prices,
        src_arrays,
        price_arrays
    }
) {

    console.log("src_arrays: " + src_arrays[1]);
    console.log("price_arrays: " + price_arrays);
    console.log("off_chain_prices: " + off_chain_prices);
  return (
      //simply don't understand the flex thing... 
    <Flex
    >
  <PriceInfo 
  price_array={price_arrays[0]}
   isOffChain={true}
   src_array={src_arrays[0]}
   >
    
            </PriceInfo>

            <PriceInfo 
  price_array={price_arrays[1]}
  isOffChain={false}
  src_array={src_arrays[1]}
   >
    
            </PriceInfo>
</Flex>

  );
}