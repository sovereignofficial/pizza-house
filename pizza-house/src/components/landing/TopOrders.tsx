import { Container, Heading, Box } from "@chakra-ui/react"
import { MenuView } from "../menu/MenuView"
import { useReduxSelector } from "../../hooks/reduxHooks"



export const TopOrders = () => {

    const {menu} = useReduxSelector(state=>state.menuReducer);
    
    return (
        <Container p={10} mb={20} minW='full'>
            <Box p={3} m='auto' textAlign='center' w={{base:'300px',md:"400px"}} my={10} borderBottom={'5px solid'} borderColor={'app.hot'} bgColor="brand.900">
                <Heading size='lg'>Our Trends</Heading>
            </Box>
            {menu && <MenuView menu={ menu?.slice(0,4)}/>}
        </Container>
    )
}
