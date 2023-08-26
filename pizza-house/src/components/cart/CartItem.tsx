import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { CartItemType } from "../../utils/global"
import { CartItemMeta } from "./CartItemMeta"

export const CartItem = ({ item }: { item: CartItemType }) => {
    return (
        <Flex
            direction={{ base: 'column', md: "row" }}
            justifyContent={'space-between'}
            align={'center'}
            gap={14}
        >
            <CartItemMeta {...item} />

            <Stack direction={'row'}>
                <Button>-</Button>
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
                <Button>+</Button>
            </Stack>

            <Heading fontSize={'sm'}>{item.price}</Heading>
            <Button _hover={{bgColor:'brand.900'}} colorScheme="orange" variant={'outline'} >X</Button>
        </Flex>
    )
}
