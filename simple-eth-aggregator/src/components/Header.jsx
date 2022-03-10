import {
    Box,
    Stack,
    Heading,
    Flex,
    Text,
    Button,
    useDisclosure
  } from "@chakra-ui/react";
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
    {/*<a href="/" /*target="_blank" rel="noopener noreferrer"*
     <Heading as='h4' size='md'>
        TEST
     </Heading>
   {/*</a>*/}
    </Flex>
  );
}
