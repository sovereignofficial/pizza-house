import { Box, Container, Heading, Stack} from '@chakra-ui/react'
import { OrderItems } from './OrderItems'
import { ordersData } from '../../utils/pizzaHouse.config'

export const OrderLayout = () => {
    return (
        <Container  minW={'full'} p={8}>
            <Box w='full' mb="5" ml={5} >
                <Heading>Last Orders({ordersData.length} items)</Heading>
            </Box>
            <Stack direction={{base:'column',md:'row'}} justify={'center'} align={'center'}>
                <OrderItems/>
            </Stack>
        </Container>
    )
}
