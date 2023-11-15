import { Box, FormControl, FormLabel, Input, Button, Text, Stack } from '@chakra-ui/react'

import { Form, Link } from "react-router-dom"
import { onChangeAddress, onChangeClient, onChangePhone,createNewOrder } from '../../../redux/slices/orderSlice'
import { useReduxDispatch, useReduxSelector } from '../../../hooks/reduxHooks'
import { useCreateOrderMutation } from '../../../redux/services/restaurant/apiRestaurant'

export const CheckoutForm = () => {
    const dispatch = useReduxDispatch();
    const [createOrder,{isLoading}] = useCreateOrderMutation();
    const { newOrder } = useReduxSelector(st=>st.orderReducer);

    const handleSubmit = async () => {
        const data = await createOrder(newOrder).unwrap();
        console.log(data,isLoading);
    }

    return (
        <Box maxW="md" mt="5" border={'1px solid'} borderColor={'gray.700'} p={10} w='full' borderRadius='xl'>
            <Form method='post'  >
                <Stack spacing={8}>
                    <FormControl id="clientName" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input onChange={(e)=>dispatch(onChangeClient(e.target.value))} type="text" />
                    </FormControl>

                    <FormControl id="clientPhone" mt="4" isRequired>
                        <FormLabel>Phone Number</FormLabel>
                        <Input onChange={(e)=>dispatch(onChangePhone(e.target.value))}  type="tel" />
                    </FormControl>

                    <FormControl id="clientAddress" mt="4" isRequired>
                        <FormLabel>Address</FormLabel>
                        <Input onChange={(e)=>dispatch(onChangeAddress(e.target.value))}  type="text" />
                    </FormControl>
                    <Box mx='auto'>
                        <Button onClick={handleSubmit}  mb={2}>Complete Order</Button>
                        <Text>or <Link to="/cart" style={{ color: "orange" }}>Turn back to Cart</Link></Text>
                    </Box>
                </Stack>
            </Form>
        </Box>
    )
}

