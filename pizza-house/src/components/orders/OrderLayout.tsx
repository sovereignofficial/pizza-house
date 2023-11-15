import { Box, Container, Heading, Stack} from '@chakra-ui/react'
import { OrderItems } from './OrderItems'
import { useReduxSelector } from '../../hooks/reduxHooks'

export const OrderLayout = () => {
    const {orders} = useReduxSelector(state=>state.orderReducer)

    return (
        <Container  minW={'full'} p={8}>
            <Box w='full' mb="5" ml={5} >
                <Heading>Last Orders({orders.length} items)</Heading>
            </Box>
            <Stack direction={{base:'column',md:'row'}} justify={'center'} align={'center'}>
                <OrderItems orders={orders}/>
            </Stack>
        </Container>
    )
}
