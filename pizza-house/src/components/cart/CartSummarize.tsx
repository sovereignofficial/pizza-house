import { Button, Heading, Stack, Text } from "@chakra-ui/react"
import { cartData } from "../../utils/pizzaHouse.config"
import { useNavigate } from "react-router-dom"

export const CartSummarize = () => {
     const navigation = useNavigate()
    return (
        <Stack
            border={'1px solid'}
            borderRadius={15}
            borderColor={'gray.700'}
            p={8}
            textAlign={'center'}
            gap={5}
            w="350px"
        >
            <Heading size={'md'}>Order Summary</Heading>
            <Stack spacing="10" direction={'row'} justify={'space-between'} align={'center'} >
                <Heading fontWeight={'medium'} color={'gray.300'} fontSize={'sm'}>Subtotal</Heading>
                <Heading fontSize={'sm'}>${cartData.reduce((acc, curr) => {
                    return acc + (parseFloat(curr.price.split('$')[1]) * curr.quantity)
                }, 0)}</Heading>
            </Stack>
            <Stack spacing="10" direction={'row'} justify={'space-between'} align={'center'} >
                <Heading fontWeight={'medium'} color={'gray.300'} fontSize={'sm'}>Discount</Heading>
                <Text fontSize={'sm'} color={'gray.400'} >No discount</Text>
            </Stack>
            <Stack spacing="10" direction={'row'} justify={'space-between'} align={'center'}>
                <Heading fontWeight={'bold'} color={'gray.300'} fontSize={'lg'}>Total</Heading>
                <Heading fontSize={'lg'} >${cartData.reduce((acc, curr) => {
                    return acc + (parseFloat(curr.price.split('$')[1]) * curr.quantity)
                }, 0)}</Heading>
            </Stack>
            <Button onClick={()=>navigation('/order/new')} w="80%" mx="auto" mt="5">Go to Checkout</Button>
        </Stack>
    )
}
