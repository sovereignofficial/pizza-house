import { Box, Container, Heading, Stack, } from "@chakra-ui/react"
import { CheckoutForm } from "./CheckoutForm"
import { CheckoutCartItems } from "./CheckoutCartItems"

export const CheckoutLayout = () => {
    return (
        <Container minW='full' p={8}>
            <Box p={5} textAlign={'center'}>
                <Heading>Checkout</Heading>
            </Box>
            <Stack direction={{base:"column",md:'row'}} justify='center'  spacing={6}>
                <CheckoutCartItems />
                <CheckoutForm />
            </Stack>

        </Container>
    )
}
