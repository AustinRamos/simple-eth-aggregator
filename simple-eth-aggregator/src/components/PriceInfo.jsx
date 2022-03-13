import { Button,Flex, Container,Box, 
    ChakraProvider, Spacer,Stack, Center,Text} from "@chakra-ui/react"
   // import {PriceRow} from './components/PriceRow'
   import  PriceRow from "./PriceRow";
    
    
    
    export default function PriceInfo(){

        //will contain 2 PriceRow components
        //parent component to pricerow
    return(
    // <div> maybe for css later?
    <div>

        <Stack >
    <Box w='300px' h='300px' borderWidth='4px' borderRadius='lg' overflow='hidden'>
    
         <PriceRow>
                
        </PriceRow>
    </Box>
    </Stack>
    </div>
    );
    }
    