import {
  Box,
  Heading,
  Flex,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Link,
  Text
} from "@chakra-ui/react";


  const Footer = () => {
    return (
      <Box
        as="footer"
        bg="gray.100"
        borderTop="1px solid"
        borderColor="gray.300"
        py="2.5rem"
        fontSize="0.875rem"
      >
        <Box
         height="10px"
          maxW="64rem"
          marginX="auto"
          pb="2rem"
          mb="1.5rem"
          px={{ base: "1rem", lg: "0" }}
          borderBottom="1px solid"
          borderColor="gray.300"
        >
          <Flex height = "10px" justify="start" flexWrap="wrap" alignItems="start">
            <Box height = "10px" w={{ base: "75%", lg: 1 / 4 }} mb={{ base: "1.5rem", lg: "0" }}>
              <Heading
                as="h5"
                color="gray.700"
                mb="0.5rem"
                fontSize="0.875rem"
                fontWeight="600"
              >
                React Crypto Aggregator
              </Heading>
            </Box>
           
            <Box w={{ base: "100%", lg: 1 / 4 }} mb={{ base: "1.5rem", lg: "0" }}>
              <Flex justify="start" mb="0.5rem" alignItems="baseline">
              
                <Link href="#" mr="0.5rem">
                  <svg
                    style={{ width: "2rem", height: "2rem" }}
                    fill="#008F94"
                    viewBox="0 0 32 32"
                    role="img"
                    aria-label="Navigate to Twitter"
                    focusable="false"
                  >
                    <path
                      d="m31 6.36c-1.16.49-2.32.82-3.55.95 1.29-.76 2.22-1.87 2.72-3.38a13.05 13.05 0 0 1 -3.91 1.51c-1.23-1.28-2.75-1.94-4.51-1.94-3.41 0-6.17 2.73-6.17 6.12 0 .49.07.95.17 1.38-4.94-.23-9.51-2.6-12.66-6.38-.56.95-.86 1.97-.86 3.09 0 2.07 1.03 3.91 2.75 5.06-1-.03-1.92-.3-2.82-.76v.07c0 2.89 2.12 5.42 4.94 5.98-.63.17-1.16.23-1.62.23-.3 0-.7-.03-1.13-.13a6.07 6.07 0 0 0 5.74 4.24c-2.22 1.74-4.78 2.63-7.66 2.63-.56 0-1.06-.03-1.43-.1 2.85 1.84 6 2.76 9.41 2.76 7.29 0 12.83-4.01 15.51-9.3 1.36-2.66 2.02-5.36 2.02-8.09v-.46c-.03-.17-.03-.3-.03-.33a12.66 12.66 0 0 0 3.09-3.16"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
             
              </Flex>
  
            </Box>
          </Flex>
        </Box>
        <Flex
            maxW="60rem"
            mx="auto"
            alignItems="center"
            px={{ base: "1rem", lg: "0" }}
          >
      
            <Text color="gray.600" fontSize="1rem" pl="0.25rem">
              Created by Austin with ReactJS and Chakra-UI
            </Text>
          </Flex>
      </Box>
    );
  };
  
  export default Footer;