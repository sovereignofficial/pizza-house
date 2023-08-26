import { Container, Heading, Box } from "@chakra-ui/react"
import { MenuView } from "../menu/MenuView"



export const TopOrders = () => {
    return (
        <Container p={10} mb={20} minW='full'>
            <Box p={3} m='auto' textAlign='center' w={{base:'300px',md:"400px"}} my={10} borderBottom={'5px solid'} borderColor={'app.hot'} bgColor="brand.900">
                <Heading size='lg'>Our Trends</Heading>
            </Box>
            <MenuView/>
        </Container>
    )
}
