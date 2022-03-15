import { Button,Flex, Container,Box, 
ChakraProvider, Spacer, Center,Text, List, ListItem,ListIcon} from "@chakra-ui/react"



export default function PriceRow(
    {
        type,
        price_array, 
        avg_eth_price,

    }
){

return(

<div>
<Text as = "em" fontSize='2xl'>{type}</Text>
<Flex>
<List>
    <ListItem string = "test 1">
  <Box p='25' bg='#DEB887'>
    FTX: ${price_array[0]}
  </Box>
     </ListItem>
     <ListItem string = "test 1">
  <Box p='25' bg='#DEB887'>
    Coinbase: ${price_array[1]}
  </Box>
     </ListItem>
  <Spacer />
  <ListItem string = "test2">
  <Box p='25' bg='#DEB887'>
    Binance: ${price_array[2]}
  </Box>
  </ListItem>
  <ListItem string = "test2">
  <Box p='25' bg='#DEB887'>
    Avg: ${avg_eth_price}
  </Box>
  </ListItem>
  </List>
</Flex>
</div>

);
}
