import { Button, Container, List, ListItem, Stack } from '@chakra-ui/react'
import { ordersData } from '../../utils/pizzaHouse.config'
import { OrderMeta } from './OrderMeta'
import { ClientInfo } from './ClientInfo'

export const OrderItems = () => {
    return (
        <Container minW={'80%'}>
            <List>
                {ordersData.map(( {items,client,address,phone,date,status,paid}, index) => (
                    <ListItem my={10} key={index} bg='app.dark' p={5} borderRadius={'lg'}>
                        <Stack direction={{base:'column', md:'row'}} justify={'center'} align={'center'} spacing={10}>
                            <OrderMeta items={items}/>
                            <ClientInfo client={{client,address,phone,date,status,paid}} />
                            <Button >Order Again</Button>
                        </Stack>
                    </ListItem>
                ))}
            </List>
        </Container>
    )
}
