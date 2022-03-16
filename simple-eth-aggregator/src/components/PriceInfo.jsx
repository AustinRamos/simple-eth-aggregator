import { Button,Flex, Container,Box, 
    ChakraProvider, Spacer,Stack, Center,Text} from "@chakra-ui/react"
   // import {PriceRow} from './components/PriceRow'
   import  PriceRow from "./PriceRow";
    
    
    
    export default function PriceInfo(
        {
            isOffChain,
            price_array,
            src_array,
        }
       
    ){

        //still hard coded, would have to do map or iteration otherwise
        const avg_eth = (((parseFloat(price_array[0])+ parseFloat(price_array[1])
         + parseFloat(price_array[2]))) / 3.0).toFixed(2);

        //will contain 2 PriceRow components
        //parent component to pricerow
    return(
    // <div> maybe for css later?
    <div>

        <Stack >
    <Box  borderWidth='4px' borderRadius='md' overflow='hidden'>
    
         <PriceRow 
          avg_eth_price={avg_eth}
          isOffChain={isOffChain}
          price_array={price_array}
          src_array={src_array}
          >
                
        </PriceRow>
    </Box>
    </Stack>
    </div>
    );
    }
    