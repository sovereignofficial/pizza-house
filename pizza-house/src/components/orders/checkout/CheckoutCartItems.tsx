import { Box, Flex, Heading, List, ListItem, Text } from "@chakra-ui/react"
import { cartData } from "../../../utils/pizzaHouse.config"

export const CheckoutCartItems = () => {
    return (
        <Box maxW="md"  mt="5" border={'1px solid'} borderColor={'gray.700'} p={10} w='full' borderRadius='xl'>
            <Heading textAlign='center' fontSize='lg' mb={2}>Total ${cartData.reduce((acc,curr)=>{
                return acc + (parseInt(curr.price.split('$')[1]) * curr.quantity)
            },0)}</Heading>
            <List p={2}  pos='relative'>
                {cartData.map((item, index) => (
                    <ListItem my={3} key={index}>
                        <Flex  justify='space-between' align='center'>
                            <Box>
                                <Heading mb={1} fontSize='md'>{item.quantity} x {item.name}</Heading>
                                <Text fontSize='sm' color='gray.400'>{item.description}</Text>
                            </Box>
                            <Box>
                                <Text>{item.price}</Text>
                            </Box>
                        </Flex>
                    </ListItem>
                ))}
            </List>
        </Box>
    )
}
