import { Button,Flex, Container,Box, 
ChakraProvider, Spacer, Center,Text, List, ListItem,ListIcon} from "@chakra-ui/react"



export default function PriceRow(){

return(

<div>
<Text as = "em" fontSize='2xl'>On chain Data</Text>
<Flex>
<List>
    <ListItem string = "test 1">
  <Box p='25' bg='blue'>
    FTX: 
  </Box>
     </ListItem>
  <Spacer />
  <ListItem string = "test2">
  <Box p='25' bg='grey'>
    Binance
  </Box>
  </ListItem>
  </List>
</Flex>
</div>

);
}
