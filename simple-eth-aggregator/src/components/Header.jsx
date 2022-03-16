import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    useDisclosure
  } from "@chakra-ui/react";
  import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
  
import React from "react";

// displays a page header

export default function Header() {
  return (
  <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
     
    >

<Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Aggregator
        </Heading>
      </Flex>

      {/* <Flex>
      <a href="/" target="_blank" rel="noopener noreferrer">
     <Heading as='h4' size='md'>
        Price Aggregator
     </Heading>
   </a>
   <a href="/" target="_blank" rel="noopener noreferrer">
     <Heading as='h4' size='md'>
        Lending Pools
     </Heading>
   </a>
      </Flex> */}

      <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>Price Aggregator</Tab>
    <Tab>Lending Pools </Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    
    </Flex>

  );
}
