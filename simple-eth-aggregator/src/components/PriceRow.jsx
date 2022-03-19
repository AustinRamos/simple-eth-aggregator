import { Button,Flex, Container,Box, 
ChakraProvider, Spacer, Center,Text, List, ListItem,ListIcon} from "@chakra-ui/react"



export default function PriceRow(
    {
      isOffChain,
        price_array, 
        avg_eth_price,
        src_array,

    }
){

return(

<div>
<Text as = "em" fontSize='2xl'>{isOffChain ? "Off Chain Data" : "On Chain Data"}</Text>

<List>
    <ListItem string = "test 1">
  <Box p='25' bg='#DEB887'>
    {src_array[0]}: ${price_array[0]}
  </Box>
     </ListItem>
     <ListItem string = "test 1">
  <Box p='25' bg='#DEB887'>
    {src_array[1]} ${price_array[1]}
  </Box>
     </ListItem>
  <Spacer />
  <ListItem string = "test2">
  <Box p='25' bg='#DEB887'>
  {src_array[2]} ${price_array[2]}
  </Box>
  </ListItem>
  <ListItem string = "test2">
  <Box p='25' bg='#DEB887'>
    Avg: ${avg_eth_price}
  </Box>
  </ListItem>
  </List>

</div>

);
}
