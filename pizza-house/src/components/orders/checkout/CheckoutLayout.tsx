import { Box, Container, Heading, Stack, } from "@chakra-ui/react"
import { CheckoutForm } from "./CheckoutForm"
import { CheckoutCartItems } from "./CheckoutCartItems"
import { useReduxSelector } from "../../../hooks/reduxHooks"

export const CheckoutLayout = () => {

    const {newOrder} = useReduxSelector(st=>st.orderReducer)
    return (
        <Container minW='full' p={8}>
            <Box p={5} textAlign={'center'}>
                <Heading>Checkout</Heading>
            </Box>
            <Stack direction={{base:"column",md:'row'}} justify='center'  spacing={6}>
                <CheckoutCartItems newOrder={newOrder}/>
                <CheckoutForm />
            </Stack>

        </Container>
    )
}
