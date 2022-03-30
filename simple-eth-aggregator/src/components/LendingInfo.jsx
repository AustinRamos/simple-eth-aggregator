import React from "react";
import { Button,Flex, Container,Box, 
    ChakraProvider, Spacer,Stack, Center,Text} from "@chakra-ui/react"
import PriceInfo from "./PriceInfo";

// displays a page header

export default function LendingInfo(
    {
        
        off_chain_prices,
        on_chain_prices,
        src_arrays,
        price_arrays
    }
) {

  return (
      //simply don't understand the flex thing... 
      <Flex>
      <Text style={{ textAlign: "center", marginTop: -180 }}  mode="horizontal" className="Sub-Header"  bg="#FFEBCD" fontSize='25px' align="top"> 
              LENDING AND LIQUIDATIONS
              </Text>
      </Flex>

  );
}