import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    useDisclosure,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react";
  import { Link, Route, Switch, useLocation } from "react-router-dom";

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
      <Menu style={{ textAlign: "center", marginTop: 40 }}  mode="horizontal" variant='soft-rounded' colorScheme='green'>
        <MenuItem key="/">
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem key="/lending">
          <Link to="/lending">Lending</Link>
          </MenuItem>
      </Menu>


      {/*
      UGH i really like the way thuis looks but dont understand how to route via tabs.
       <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>Price Aggregator</Tab>
    <Tab>Lending Pools </Tab>
  </TabList>
  <TabPanels>
    <TabPanel key="/">
    <Link to="/">/</Link>
    </TabPanel>
    <TabPanel key="/lending">
    <Link to="/lending">/lending</Link>
    </TabPanel>
  </TabPanels>
</Tabs> */}
    
    </Flex>

  );
}
