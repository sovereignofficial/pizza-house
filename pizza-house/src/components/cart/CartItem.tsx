import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { CartItemType } from "../../utils/global"
import { CartItemMeta } from "./CartItemMeta"
import { useReduxDispatch } from "../../hooks/reduxHooks"
import { decrementQuantity, deleteFromCart, incrementQuantity } from "../../redux/slices/cartSlice"

export const CartItem = ({ item }: { item: CartItemType }) => {
    const dispatch = useReduxDispatch();


    return (
        <Flex
            direction={{ base: 'column', md: "row" }}
            justifyContent={'space-between'}
            align={'center'}
            gap={14}
        >
            <CartItemMeta {...item} />

            <Stack direction={'row'}>
                <Button onClick={()=>{dispatch(decrementQuantity(item.id))}}>-</Button>
                 <Box
                    px='5'
                    alignItems={'center'}
                    justifyContent={'center'}
                    display={'flex'}
                    border={'1px solid'}
                    color={'gray.500'}
                    borderRadius={5}
                 >
                    <Text>{item.quantity}</Text>
                 </Box>
                <Button onClick={()=>{dispatch(incrementQuantity(item.id))}}>+</Button>
            </Stack>

            <Heading fontSize={'sm'}>${item.unitPrice}</Heading>
            <Button _hover={{bgColor:'brand.900'}} colorScheme="orange" variant={'outline'} onClick={()=>{dispatch(deleteFromCart(item.id))}} >X</Button>
        </Flex>
    )
}
