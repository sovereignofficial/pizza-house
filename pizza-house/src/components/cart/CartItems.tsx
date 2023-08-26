import { Heading, Stack } from "@chakra-ui/react"
import { cartData } from "../../utils/pizzaHouse.config"
import { CartItem } from "./CartItem"

export const CartItems = () => {
  return (
    <Stack spacing={{ base: '8', md: '10' }} flex="2">
        <Heading fontSize="2xl" fontWeight="bold">Order Cart (2 items)</Heading>
        <Stack spacing={'6'}>
            {cartData.map((item,index)=>(
                <CartItem key={index} item={item}/>
            ))}
        </Stack>
    </Stack>
  )
}
