import { Button,Flex, Container,Box, 
ChakraProvider, Spacer, Center,Text, List, ListItem,ListIcon} from "@chakra-ui/react"



export default function PriceRow(
    {
        ftx_price,
        cb_price,
        binance_price,
        avg_eth_price,

    }
){

return(

<div>
<Text as = "em" fontSize='2xl'>On chain Data</Text>
<Flex>
<List>
    <ListItem string = "test 1">
  <Box p='25' bg='#DEB887'>
    FTX: ${ftx_price}
  </Box>
     </ListItem>
     <ListItem string = "test 1">
  <Box p='25' bg='#DEB887'>
    Coinbase: ${cb_price}
  </Box>
     </ListItem>
  <Spacer />
  <ListItem string = "test2">
  <Box p='25' bg='#DEB887'>
    Binance: ${binance_price}
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
