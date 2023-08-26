import { Container, Flex, List, ListItem, Box, Text, Stack } from "@chakra-ui/react"
import { Link, useLocation } from "react-router-dom"
import { routes } from "../utils/pizzaHouse.config";

export const Header = () => {
    const location = useLocation();

    return (
        <Container
            bg='app.dark'
            h="100px"
            minW='100%'
            borderBottom='1px solid'
            borderColor='app.main'
        >
            <List h={'full'}>
                <Flex  h={'full'} justify={{base:'center',md:'space-between'}} gap={5} alignItems='center'>

                    <ListItem >
                        <Link to='/'>
                            <Box display='flex' alignItems='center' boxSize={{ base: '50px', md: '100px' }} bgImage='logo.png'
                                bgSize="cover"
                                bgPosition="center"
                                bgRepeat="no-repeat" />
                        </Link>
                    </ListItem>
                    <Stack spacing={{base:5,md:10}} direction={'row'}>
                        {routes.map((route, index) => (
                            <ListItem display={'flex'} gap={2} justifyContent={'center'} alignItems={'center'} key={index}>
                                <Link style={{
                                    color: `${route.path === location.pathname
                                        ? 'orange'
                                        : 'white'}`
                                }} to={route.path}>
                                    {route.route}
                                </Link>
                                {route?.itemsAmount && route.itemsAmount > 0 ? (
                                    <Box
                                        display={'flex'}
                                        justifyContent={'center'}
                                        alignItems={'center'}
                                        px={2}
                                        py='1'
                                        boxSize={5}
                                        borderRadius={3}
                                        bg="app.hot"
                                    >
                                        <Text fontSize={'sm'}>{route.itemsAmount}</Text>
                                    </Box>
                                ) : ""}
                            </ListItem>
                        ))}
                    </Stack>

                </Flex>
            </List>
        </Container >
    )
}
