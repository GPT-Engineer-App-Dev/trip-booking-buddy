import { Container, Text, VStack, Heading, Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Travel Booking</Heading>
        <Text fontSize="lg">Plan your perfect trip with us.</Text>
        <Box>
          <Link to="/book">
            <Button colorScheme="teal" size="lg">Book Now</Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;