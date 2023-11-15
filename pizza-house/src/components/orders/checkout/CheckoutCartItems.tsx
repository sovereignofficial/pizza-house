import { Box, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react"
import {CartItemType, OrderType } from "../../../utils/global"

interface NewOrder{
    customer:Partial<OrderType>;
    cart:CartItemType[]
}

export const CheckoutCartItems = ({newOrder}:{newOrder:NewOrder}) => {
    return (
        <Box maxW="md"  mt="5" border={'1px solid'} borderColor={'gray.700'} p={10} w='full' borderRadius='xl'>
            <Heading textAlign='center' fontSize='lg' mb={2}>Total ${newOrder.customer.paid}</Heading>
            <List p={2}  pos='relative'>
                {newOrder?.cart && newOrder.cart.map((item, index) => (
                    <ListItem my={3} key={index}>
                        <Flex  justify='space-between' align='center'>
                            <Box>
                                <Heading mb={1} fontSize='md'>{item.quantity} x {item.name}</Heading>
                                <Text fontSize='sm' color='gray.400'>{item.ingredients.join(" ")}</Text>
                            </Box>
                            <Box>
                                <Text>${item.unitPrice}</Text>
                            </Box>
                        </Flex>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
