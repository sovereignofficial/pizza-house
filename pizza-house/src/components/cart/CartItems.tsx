import { Heading, Stack } from "@chakra-ui/react"
import { CartItem } from "./CartItem"
import { CartItemType } from "../../utils/global"

export const CartItems = ({cart}:{cart:CartItemType[]}) => {
  
  return (
    <Stack spacing={{ base: '8', md: '10' }} flex="2">
        <Heading fontSize="2xl" fontWeight="bold">Your Cart ({cart.length} items)</Heading>
        <Stack spacing={'6'}>
            {cart.map((item,index)=>(
                <CartItem key={index} item={item}/>
            ))}
        </Stack>
    </Stack>
  )
}
