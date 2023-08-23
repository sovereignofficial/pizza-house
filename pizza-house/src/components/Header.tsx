import { Container, Flex, List, ListItem, Box } from "@chakra-ui/react"

export const Header = () => {
    return (
        <Container
            bg='app.dark'
            h="100px"
            minW='100%'>
            <List h={'full'}>
                <Flex gap='2' h={'full'} justifyContent='center' alignItems='center'>
                    <ListItem position={'absolute'} left={0} top={0} >
                        <Box m="auto" display='flex' alignItems='center' boxSize='100px' bgImage='logo.png'
                            bgSize="cover"
                            bgPosition="center"
                            bgRepeat="no-repeat" />
                    </ListItem>
                    <ListItem>Menu</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Orders</ListItem>
                </Flex>
            </List>
        </Container >
    )
}
