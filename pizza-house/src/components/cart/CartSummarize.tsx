import { Button, Heading, Stack, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { CartItemType, CartSummary } from "../../utils/global"
import { useReduxDispatch } from "../../hooks/reduxHooks"
import { setItemsFromCart } from "../../redux/slices/orderSlice"

export const CartSummarize = ({cart, cartSummary }: {cart:CartItemType[], cartSummary: CartSummary }) => {
    const navigation = useNavigate();
    const dispatch = useReduxDispatch();

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
                <Heading fontSize={'sm'}>${cartSummary.cartPrice}</Heading>
            </Stack>
            <Stack spacing="10" direction={'row'} justify={'space-between'} align={'center'} >
                <Heading fontWeight={'medium'} color={'gray.300'} fontSize={'sm'}>Discount</Heading>
                <Text fontSize={'sm'} color={'gray.400'} >{cartSummary?.discount > 0 ? `${cartSummary.discount}` : "No discount"}</Text>
            </Stack>
            <Stack spacing="10" direction={'row'} justify={'space-between'} align={'center'}>
                <Heading fontWeight={'bold'} color={'gray.300'} fontSize={'lg'}>Total</Heading>
                <Heading fontSize={'lg'} >${cartSummary.totalPrice}</Heading>
            </Stack>
            <Button onClick={() => {
                navigation('/order/new')
                dispatch(setItemsFromCart({cart,totalPrice:cartSummary.totalPrice}))
            }
            } w="80%" mx="auto" mt="5">Go to Checkout</Button>
        </Stack>
    )
}
