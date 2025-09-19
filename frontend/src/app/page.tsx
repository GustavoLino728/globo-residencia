import { Box, Button, Heading, Text } from "@chakra-ui/react";

export default function HomePage() {
  return (
    <Box textAlign="center" mt="20">
      <Heading>contaGIA</Heading>
      <Text mt="4">Bem-vindo a Nossa Plataforma</Text>
      <Button colorScheme="teal" mt="6">
        Teste do Chakra
      </Button>
    </Box>
  );
}
