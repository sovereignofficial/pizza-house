import {  Container, Flex, Stack, Text } from "@chakra-ui/react"
import { CartItems } from "./CartItems"
import { CartSummarize } from "./CartSummarize"
import { Link } from "react-router-dom"
import { useReduxDispatch, useReduxSelector } from "../../hooks/reduxHooks"
import { useEffect } from "react"
import { setSummary } from "../../redux/slices/cartSlice"

export const CartLayout = () => {
    const { cart,cartSummary } = useReduxSelector(state=>state.cartReducer);
    const dispatch = useReduxDispatch();

    useEffect(()=>{
       dispatch(setSummary())
    },[cart])

    return (
        <Container display={'flex'} justifyContent={'center'} minW={'full'} p={8}>
            <Stack
                direction={{ base: 'column', lg: "row" }}
                align={{ lg: 'flex-start' }}
                spacing={{ base: '8', md: '16' }}
            >
                <CartItems cart={cart} />

                <Flex direction="column" align="center" flex="1" gap="2">
                    <CartSummarize cart={cart} cartSummary={cartSummary}/>
                    <Text>or <Link to="/menu" style={{color:"orange"}}>Continue shopping</Link></Text>
                </Flex>

            </Stack>
        </Container>
    )
}
