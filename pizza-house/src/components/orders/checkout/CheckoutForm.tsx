import { Box, FormControl, FormLabel, Input, Button,Text, Stack } from '@chakra-ui/react'

import { Link } from "react-router-dom"

export const CheckoutForm = () => {
    return (
        <Box maxW="md" mt="5" border={'1px solid'} borderColor={'gray.700'} p={10} w='full' borderRadius='xl'>
            <Stack spacing={8}>
                <FormControl  id="clientName" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input type="text" />
                </FormControl>

                <FormControl id="clientPhone" mt="4" isRequired>
                    <FormLabel>Phone Number</FormLabel>
                    <Input type="tel" />
                </FormControl>

                <FormControl id="clientAddress" mt="4" isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input type="text" />
                </FormControl>
                <Box mx='auto'>
                    <Button mb={2}>Complete Order</Button>
                    <Text>or <Link to="/cart" style={{ color: "orange" }}>Turn back to Cart</Link></Text>
                </Box>
            </Stack>
        </Box>
    )
}
